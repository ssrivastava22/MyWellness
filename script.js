
//tab buttons 
function studyTab(){
  
if((key==studyGoalKey) && (pointsKey==mentalGoalKey)) {
		window.location.replace("end.html"); 
	}
  else {
  window.location.replace("studyMain.html");
  }
}

function mentalTab(){
	if((key==studyGoalKey) && (pointsKey==mentalGoalKey)) {
		window.location.replace("end.html"); 
	}
  else {
  window.location.replace("mentalMain.html");
  }
}

//go buttons 


//pomodoro method 

function go2pomodoro() {
  window.location.replace("pomodoro.html");
}

function go2music() {
  
  window.location.replace("music.html");

}

function go2guided() {

  window.location.replace("guided.html");

}

function go2stretch() {

  window.location.replace("stretch.html");

}


function go2walking() {

  window.location.replace("walk.html");

}
function go2mentalh() {

  window.location.replace("mentalMain.html");

}
function go2study() {

  window.location.replace("studyMain.html");

}
function go2select() {

  window.location.replace("selectPage.html");

}

//ninety method 

function go2ninety() {

  window.location.replace("ninety.html");
 
}
//get things done
function go2getthingsdone() {
 
  window.location.replace("getthingsdone.html");

}

//do it now 
function go2doitnow() {

  window.location.replace("doitnow.html");

}

//points 

function docWrite(variable) {
    document.write(variable);
}

var key = 0; 
var textKey = "You have not created a To-Do list yet! Head to the 'Get It Done Method' page to create one!"; 
//mental health points 
var pointsKey = 0; 


//goal points 

var studyGoalKey = 0; 
  var studyGoalKey = localStorage.getItem("banana");
//mental health points variables
   var mentalGoalKey = 0; 
  var mentalGoalKey = localStorage.getItem("orange");




function increaseKey4Walk() { 
  window.pointsKey = Number(window.pointsKey) + Number(1);  
  element = document.getElementById("letswalk");
		element.innerHTML = "Mental Health Points: " + window.pointsKey;
    localStorage.setItem("yams", window.pointsKey); 
}

function increaseKey4Guide() { 
  window.pointsKey = Number(window.pointsKey) + Number(1);  
  element = document.getElementById("letsguide");
		element.innerHTML = "Mental Health Points: " + window.pointsKey;
    localStorage.setItem("yams", window.pointsKey); 
}

function increaseKey4Stretch() { 
  window.pointsKey = Number(window.pointsKey) + Number(2);  
  element = document.getElementById("letsstretch");
		element.innerHTML = "Mental Health Points: " + window.pointsKey;
    localStorage.setItem("yams", window.pointsKey); 
}

function increaseKey4Music() { 
  window.pointsKey = Number(window.pointsKey) + Number(2);  
  element = document.getElementById("letsmusic");
		element.innerHTML = "Mental Health Points: " + window.pointsKey;
    localStorage.setItem("yams", window.pointsKey); 
}

pointsKey = localStorage.getItem("yams"); 



function increaseKey4Pomo() { 
  window.key = Number(window.key) + Number(1);  
  element = document.getElementById("letsPomo");
		element.innerHTML = "Academic Points: " + window.key;
    localStorage.setItem("potato", window.key); 
}

function increaseKey4Nine() { 
  window.key = Number(window.key) + Number(3);  
  element = document.getElementById("letsNine");
		element.innerHTML = "Academic Points: " + window.key;
    localStorage.setItem("potato", window.key); 
}

function increaseKey4Do() { 
  window.key = Number(window.key) + Number(2);  
  element = document.getElementById("letsDo");
		element.innerHTML = "Academic Points: " + window.key;
    localStorage.setItem("potato", window.key); 
}

function increaseKey4Get() { 
  window.key = Number(window.key) + Number(1);  
  element = document.getElementById("letsGet");
		element.innerHTML = "Academic Points: " + window.key;
    localStorage.setItem("potato", window.key); 
}



key = localStorage.getItem("potato"); 

function resetKey() { 
  localStorage.setItem("potato", 0); 
	key = localStorage.getItem("potato");
	var element = document.getElementById("lets");
		element.innerHTML = "Academic Points: " + key;

    localStorage.setItem("textarea", "You have not created a To-Do list yet! Head to the 'Get It Done Method' page to create one!"); 
	textKey = localStorage.getItem("textarea");


}

function resetKey2() {
 localStorage.setItem("yams", 0); 
	pointsKey = localStorage.getItem("yams");
  	var element = document.getElementById("firstLabel");
		element.innerHTML = "Mental Health Points: " + pointsKey;
}


function myFunction() {

var x = document.getElementById("myTextArea").value;
  document.getElementById("demo").innerHTML = x;

    localStorage.setItem("textarea", x); 
  
  
}

var textKey = localStorage.getItem("textarea"); 

function newFunction () {
  document.getElementById("test").innerHTML = textKey;
}


//do it now completed 


//goal setting javascript 



//finish function 





//JOURNAL completed


//WEDNESDAY CODE ONLY

var textKey0 = " "; 

function save0() {

     document.getElementById("myTextArea").disabled = true;


     document.getElementById("myTextArea").style.visibility = "hidden";

     function newFunction0() {
var x0 = document.getElementById("myTextArea").value;


    localStorage.setItem("textarea0", x0); 

  document.getElementById("test0").innerHTML = x0;
}

newFunction0(); 
  
}


var textKey0 = localStorage.getItem("textarea0");

 

function reset0() {
  localStorage.setItem("textarea0", " "); 
	textKey0 = localStorage.getItem("textarea0");

  document.getElementById("test0").innerHTML = textKey0;

  document.getElementById("myTextArea").disabled = false;
  document.getElementById("myTextArea").style.visibility = "visible";

}
//DONE WEDNESDAY CODE


//MONDAY CODE ONLY 
var textKey1 = " "; 

function save1() {

     document.getElementById("myTextArea1").disabled = true;


     document.getElementById("myTextArea1").style.visibility = "hidden";


     function newFunction1() {
var x1 = document.getElementById("myTextArea1").value;


    localStorage.setItem("textarea1", x1); 

  document.getElementById("test1").innerHTML = x1;
}

newFunction1(); 

     
  
}


var textKey1 = localStorage.getItem("textarea1");

 

function reset1() {
  localStorage.setItem("textarea1", " "); 
	textKey1 = localStorage.getItem("textarea1");

  document.getElementById("test1").innerHTML = textKey1;

  document.getElementById("myTextArea1").disabled = false;
  document.getElementById("myTextArea1").style.visibility = "visible";

}
//DONE MONDAY CODE 



//TUESDAY CODE ONLY 
var textKey2 = " "; 

function save2() {

     document.getElementById("myTextArea2").disabled = true;


     document.getElementById("myTextArea2").style.visibility = "hidden";

     function newFunction2() {
var x2 = document.getElementById("myTextArea2").value;


    localStorage.setItem("textarea2", x2); 

  document.getElementById("test2").innerHTML = x2;
}

newFunction2(); 
  
}


var textKey2 = localStorage.getItem("textarea2");

 

function reset2() {
  localStorage.setItem("textarea2", " "); 
	textKey2 = localStorage.getItem("textarea2");

  document.getElementById("test2").innerHTML = textKey2;

  document.getElementById("myTextArea2").disabled = false;
  document.getElementById("myTextArea2").style.visibility = "visible";

}
//DONE TUESDAY CODE 


//THURSDAY CODE ONLY 
var textKey3 = " "; 

function save3() {

     document.getElementById("myTextArea3").disabled = true;


     document.getElementById("myTextArea3").style.visibility = "hidden";

     function newFunction3() {
var x3 = document.getElementById("myTextArea3").value;


    localStorage.setItem("textarea3", x3); 

  document.getElementById("test3").innerHTML = x3;
}

newFunction3(); 
  
}


var textKey3 = localStorage.getItem("textarea3");

 

function reset3() {
  localStorage.setItem("textarea3", " "); 
	textKey3 = localStorage.getItem("textarea3");

  document.getElementById("test3").innerHTML = textKey3;

  document.getElementById("myTextArea3").disabled = false;
  document.getElementById("myTextArea3").style.visibility = "visible";

}
//DONE THURSDAY CODE 



//FRIDAY CODE ONLY 
var textKey4 = " "; 

function save4() {

     document.getElementById("myTextArea4").disabled = true;


     document.getElementById("myTextArea4").style.visibility = "hidden";

     function newFunction4() {
var x4 = document.getElementById("myTextArea4").value;


    localStorage.setItem("textarea4", x4); 

  document.getElementById("test4").innerHTML = x4;
}

newFunction4(); 
  
}


var textKey4 = localStorage.getItem("textarea4");

 

function reset4() {
  localStorage.setItem("textarea4", " "); 
	textKey4 = localStorage.getItem("textarea4");

  document.getElementById("test4").innerHTML = textKey4;

  document.getElementById("myTextArea4").disabled = false;
  document.getElementById("myTextArea4").style.visibility = "visible";

}
//DONE FRIDAY CODE 



//SATURDAY CODE ONLY 
var textKey5 = " "; 

function save5() {

     document.getElementById("myTextArea5").disabled = true;


     document.getElementById("myTextArea5").style.visibility = "hidden";

     

      function newFunction5() {
var x5 = document.getElementById("myTextArea5").value;


    localStorage.setItem("textarea5", x5); 

  document.getElementById("test5").innerHTML = x5;
}

newFunction5(); 
  
}


var textKey5 = localStorage.getItem("textarea5");



function reset5() {
  localStorage.setItem("textarea5", " "); 
	textKey5 = localStorage.getItem("textarea5");

  document.getElementById("test5").innerHTML = textKey5;

  document.getElementById("myTextArea5").disabled = false;
  document.getElementById("myTextArea5").style.visibility = "visible";

}
//DONE SATURDAY CODE 



//SUNDAY CODE ONLY 
var textKey6 = " "; 

function save6() {

     document.getElementById("myTextArea6").disabled = true;


     document.getElementById("myTextArea6").style.visibility = "hidden";

     function newFunction6() {
var x6 = document.getElementById("myTextArea6").value;


    localStorage.setItem("textarea6", x6); 

  document.getElementById("test6").innerHTML = x6;
}

newFunction6(); 
  
}


var textKey6 = localStorage.getItem("textarea6");

 

function reset6() {
  localStorage.setItem("textarea6", " "); 
	textKey6 = localStorage.getItem("textarea6");

  document.getElementById("test6").innerHTML = textKey6;

  document.getElementById("myTextArea6").disabled = false;
  document.getElementById("myTextArea6").style.visibility = "visible";

}
//DONE SUNDAY CODE 