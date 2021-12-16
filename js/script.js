var menu = document.getElementsByTagName('img')[0];
console.log(menu);
var nav = document.getElementsByTagName('nav')[0];
console.log(nav);
 
menu.addEventListener('click', voir);

function voir() {
    console.log('je veux un burger ;)');

    if( nav.style.visibility == "visible"){
        nav.style.visibility = "hidden";
        menu.src = "assets/burger.png";
    }else{
        nav.style.visibility = "visible";
        menu.src = "assets/close.png";
    }
}