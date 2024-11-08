document.querySelectorAll('input[name="unit"]').forEach((radio) => {
  radio.addEventListener("change", updateTotal);
});

function updateTotal() {
  const selectedOption = document.querySelector('input[name="unit"]:checked');
  let total = 0;
  if (selectedOption.id === "unit1") total = 10;
  else if (selectedOption.id === "unit2") total = 18;
  else if (selectedOption.id === "unit3") total = 24;

  document.querySelector(".total").innerText = `Total: $${total}.00 USD`;
}
