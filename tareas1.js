document.getElementById("even").addEventListener("click",prueva);
getTarea();
function prueva(){

var conte = document.getElementById("cont").value;
//alert(conte);

var tarea = {

  conte

};

if(localStorage.getItem("tareas") === null){

  var ta = [];
  ta.push(tarea);
  localStorage.setItem("tareas", JSON.stringify(ta));

}else{

  var ta= JSON.parse(localStorage.getItem("tareas"));
  ta.push(tarea);
  localStorage.setItem("tareas",JSON.stringify(ta));

}
//console.log(localStorage.getItem("tareas"));

getTarea();
}

function getTarea(){
var tarea = JSON.parse(localStorage.getItem("tareas"));
var di = document.getElementById("tareas");
di.innerHTML='';
for (var i = 0; i < tarea.length; i++) {
  var nom = tarea[i].conte;
  di.innerHTML += `<div class ="hola">
  <p>${nom}</p> <input type="button" name="" value="borrar" onclick="del('${nom}')">
  </div>`
}
}

function del(nom){

var tarea = JSON.parse(localStorage.getItem("tareas"));

for (var i = 0; i < tarea.length; i++) {
  if(tarea[i].conte == nom){

    tarea.splice(i,1);

  }
}
localStorage.setItem("tareas", JSON.stringify(tarea));
getTarea();

}
