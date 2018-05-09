[...document.querySelectorAll("main span.col-3")].forEach(priceElement => {
  priceElement.style.borderRight = (Number(priceElement.textContent) * 2) + "px solid black";
  priceElement.style.borderBottom = "1px solid black";
  priceElement.style.borderRadius = "0 200% 400% 0";
  priceElement.style.alignSelf = "center";
});
