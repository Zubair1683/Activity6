var timeOut = 500;
var level = 1;
var clicknum = 0;


function changePosition() {

    //wait timeout
    setTimeout(function(){
        //change position
        document.getElementById("mybutton").style.marginLeft = Math.random()*300+"px";
        document.getElementById("mybutton").style.marginTop = Math.random()*300+"px";
    }, timeOut);

}

function clicker(){
    clicknum++;
   
    if(clicknum == 3){
        levelUp();
        clicknum = 0;       
    }
}

function levelUp() {
 timeOut -= 100;
 level++;
 alert("You are winner! You can go next level " + level);

}