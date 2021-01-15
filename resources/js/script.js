nombre=prompt("Write a color in english")


let root = document.documentElement;
root.style.setProperty('--hola', ""+nombre)
root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
  
});


