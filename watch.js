const { basename, join } = require("path");
const { readFile, writeFile } = require("fs");
const { watch } = require("chokidar");

function watcher(path) {
  readFile(path, "utf8", (err, scriptContent) => {
    if (err) throw err;

    let template = join("./node_modules/MyFirstCoffeeShop/src/templates", basename(path, ".js") + ".twig");
    readFile(template, 'utf8', (err, templateContent) => {
      if (err) throw err;

      templateContent = templateContent.replace(/\n*<!-- start magic -->[\s\S]*?<!-- end magic -->/, "") + `

<!-- start magic -->
{% block footerJavaScript %}
<script>
${scriptContent}
</script>
{{ parent() }}
{% endblock %}
<!-- end magic -->`;

      writeFile(template, templateContent, 'utf8', (err) => {
        if (err) throw err;

        console.log(`Successfully injected into ${basename(template)}.`)
      });
    });
  });
}

watch("./src/*.js")
  .on("add", watcher)
  .on("change", watcher)
  // .on("unlink", () => process.exit())
  .on("error", console.error);
