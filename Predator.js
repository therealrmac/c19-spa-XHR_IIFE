console.log('predator loaded');
var Predator = (function (Predator) {
  var carnivores = [];
  var herbivores= [];
  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        carnivores = JSON.parse(this.responseText).carnivores;
        callbackToInvoke(carnivores);
       });
      loader.open("GET", "carnivore.json");
      loader.send();
    
    },
      loadHerbivores: function (callbackToInvoke) {
      var herbloader = new XMLHttpRequest();
      herbloader.addEventListener("load", function () {
        herbivores= JSON.parse(this.responseText).herbivores;
        callbackToInvoke(herbivores);
       });
       herbloader.open("GET", "herbivore.json");
       herbloader.send();
   }
  } 
  return Predator;
}(Predator || {}));