function drag(event) {
	event.dataTransfer.setData("text", event.target.id);
}
function permiteDrop(event){
	event.preventDefault();
}
function drop(event){
   event.preventDefault();

   var dato= event.dataTransfer.getData("text");
   event.target.appendChild(document.getElementById(dato));
}