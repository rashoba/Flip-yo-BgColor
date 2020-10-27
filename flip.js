//Here is declaring hex, color and btn as constands. These means they cannot be reassigned.
// hex is an array with 16 values
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; 
const btn = document.getElementById("btn"); 
// The getElementById() method returns the element that has the ID attribute with the specified value
//the id here is btn
const color = document.querySelector(".color");
// querySelector() returns the first Element within the document that matches the specified selector, 
//or group of selectors. If no matches are found, null is returned. In this case, color is the query selected

//A function that enables us listen for a CLICK event
btn.addEventListener("click", function () {
  let hexColor = "#";  //Here is creating an hex color value eg #e3e3e3
  
  //This is a loop to generate the random hex numbers i.e. 6 values. 
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; 
  }
  
  // display the background color;
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

 // function to help get the value between 0 and F in the hex array
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
