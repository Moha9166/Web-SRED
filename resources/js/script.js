nombre=prompt("dime un color")
azul="azul"

if (nombre == azul){
  let root = document.documentElement;
  root.style.setProperty('--hola', "blue")
}
else{
    alert("red")
    let root = document.documentElement;
    root.style.setProperty('--hola', "red")
}

let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});


