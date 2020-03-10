
window.onload = pageLoad;
function pageLoad(){

    var form = document.getElementById("myForm")
    form.onsubmit = Submit
   
}

function Submit(){

    var form = document.forms["myForm"]["password"].value;
    var form2 = document.forms["myForm"]["repassword"].value;
    alert(form + form2)
    return validateForm(form,form2);

}
function validateForm(password,repassword) {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
if(password!=repassword){
    return false;
}
    else{
     return true;
}
}

