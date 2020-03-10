var phun = 0;
function postFunction()
{
    var text1 = document.getElementById("text1").value;
    var post1 = document.getElementById("post1");
    var reply1 = document.getElementById("reply1");
    var reply2 = document.getElementById("reply2"); 
    
    if(phun==0){
        document.getElementById("post1").innerHTML=text1;
        phun +=1;
    }
    else if(phun==1){
        document.getElementById("reply1").innerHTML=text1;
        phun +=1;
    }
    else if(phun==2){
        reply2 = document.getElementById("reply2").innerHTML=text1;
        phun =0;
    }
}
function clearFunction(){

    post1.innerHTML = "";
    reply1.innerHTML = "";
    reply2.innerHTML = "";
   
    document.getElementById("text1").value = "";
    phun=0;
}