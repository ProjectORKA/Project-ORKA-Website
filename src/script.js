
function randomLetter(){
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random()*letters.length)];
}

function randomString(n){
    var text = "";
    for(i = 0; i < n; i++){
        text += randomLetter();
    }
    return text;
}

headlineCurrentSelection = 2;

setInterval(function (){
    var children = document.getElementById("headline").children;
    for(var i = 1; i < children.length; i++){
        if(children[i].style.display != "none"){
            children[i].style.display = "none";
            i++;
            if(i >= children.length) i = 1;
            children[i].style.display = "inline";
            break;
        }
    }
}, 1500);

setInterval(function (){
    var children = document.getElementById("headline2").children;
    for(var i = 1; i < children.length; i++){
        if(children[i].style.display != "none"){
            children[i].style.display = "none";
            i++;
            if(i >= children.length) i = 1;
            children[i].style.display = "inline";
            break;
        }
    }
}, 4334);