console.log("iife-xhr loaded");
var dispaly= document.getElementById('output');
var dispaly2= document.getElementById('output2');
function showCarnivores (carnivores) {
  console.log("showCarnivores", carnivores);
  var x= "Carnivores: ";
  dispaly.innerHTML = x;
  for (var i=0; i< carnivores.length; i++){
   dispaly.innerHTML+= carnivores[i].name + " ";
}
}
function showHerbivores (herbivores) {
	var y= "Herbivores: "
	console.log('showHerbivores');
	dispaly2.innerHTML = y;
	for (var i=0; i< herbivores.length; i++){
		dispaly2.innerHTML+= herbivores[i].name + " ";
	}
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores)