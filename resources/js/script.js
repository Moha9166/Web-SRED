//Asks the user to introduce a color to asignate
nombre=prompt("Write a color in english")

//Reads and asigns a value to the .css variable
let root = document.documentElement;
// asigns the introduced color to the title color
root.style.setProperty('--hola', ""+nombre)
// Makes posible the movement of the custom mouse cursor
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
  
});