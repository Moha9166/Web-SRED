nombre=prompt("dime un color")
azul="azul"

if (nombre == azul){
    window.location.href="https://www.youtube.com"
}
else{
    alert("hola")
}

let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});