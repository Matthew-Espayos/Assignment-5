// Creating variables
let diameter = 0
let area = 0
let circumference = 0
// Calculates area of a circle
document.getElementById('mybutton').addEventListener('click', calculate)
function calculate () {
  diameter = document.getElementById('diameter').value
  diameter = parseFloat(diameter / 2).toFixed(2)
  // Calculates for area
  area = 0
  area = (Math.PI * diameter ** 2)
  document.getElementById('myarea').innerHTML = area
  // Calculates for circumference
  circumference = 0
  circumference = (2 * Math.PI * diameter)
  document.getElementById('mycircumference').innerHTML = circumference
}
