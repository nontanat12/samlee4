function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != null) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }
var password1
var username1

window.onload = loginLoad;

function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin");
	form.onsubmit = handleSubmit;
	var parameter = getParams();
	username1 = parameter["username"];
	password1= parameter["password"];
}

function handleSubmit(){
	var a = document.forms["myLogin"]["username"].value
	var a2 = document.forms["myLogin"]["password"].value
	return checkLogin(a, a2)

}
function checkLogin(user,pass){
	if(user == username1 && pass == password1){
		alert("success")
		return true;
	}

	else{
		alert("Error!");
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			