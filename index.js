let display=document.getElementById("expr");

function appendNum(val){
    display.value+=val;
}

function clearNum(){
    display.value="";
}

function deleteNum(){
    display.value=display.value.substring(0,display.value.length-1);
}

function outAns(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value=error;
    }
}