const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "#e0f2fe",
  "#bae6fd",
  "#dbeafe",
  "#bfdbfe",
  "#c7d2fe",
  "#6d28d9",
  "#f9a8d4",
  "#ec4899",
  "#14b8a6",
  "#84cc16",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random no between 0 - 3
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
