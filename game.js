window.onload = pageLoad;

function pageLoad(){
	var startbtn = document.getElementById("start");
	startbtn.onclick = startGame;
	

}

function startGame(){
	alert("Ready");
	timeStart();
	addBox();
	
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('clock');
	timer = setInterval(timeCount,TIMER_TICK);
	var maxtime = 30;
	
	function timeCount(){
		var allbox = document.querySelectorAll("#squares-layer div");
		x.innerHTML = maxtime;
		maxtime--;
		
		console.log(maxtime);
		if(maxtime == 0){
			alert("youlose");
			clearInterval(timer);
			clearScreen();
		}
		if(allbox.length ==0){
			alert("youwin!");
			clearInterval(timer);
			clearScreen();
		}
	}
}

function addBox(){

	var numbox = document.getElementById("numbox").value ;
	var squaresLayer =document.getElementById("squares-layer") ;
	var colorDrop = document.getElementById("color");
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement("div") ;
		tempbox.className = "square "+ colorDrop.value;
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}
var temp_x;
function bindBox(box){
	temp_x = document.getElementById("squares-layer");
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		temp_x.removeChild(box);
	}
	
	
}

function clearScreen(){

	var allbox = document.querySelectorAll(".square ");
    console.log(allbox[0]);
	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		console.log(i);
		temp_x.removeChild(allbox[i]);
	}
}




