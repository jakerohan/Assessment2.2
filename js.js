

function changeimage1(){
    var img = document.getElementById("image");
    img.src="http://www.outgrabe.net/bird00.jpg";
    document.getElementById("caption").innerHTML ="Pardalote by fir0002 (CC-by-NC)";
    }

function changeimage2(){
    var img = document.getElementById("image");
    img.src="http://www.outgrabe.net/bird01.jpg";
    document.getElementById("caption").innerHTML ="Purple swamp hen by Toby Hudson (CC-by-SA)";
}

function changeimage3(){
    var img = document.getElementById("image");
    img.src="http://www.outgrabe.net/bird02.jpg";
    document.getElementById("caption").innerHTML ="White-headed Stilt by JJ Harrison (CC-by-SA)";
}

function changeimage4(){
    var img = document.getElementById("image");
    img.src="http://www.outgrabe.net/bird03.jpg";
    document.getElementById("caption").innerHTML ="Inland Thornbill by Peter Jacobs (CC-by-SA)";
}

function changeimage5(){
    var img = document.getElementById("image");
    img.src="http://www.outgrabe.net/bird04.jpg";
    document.getElementById("caption").innerHTML ="Rose Robin by JJ Harrison (CC-by-SA)";
}

var dark = 0;

function darkmode(){
    var e = document.querySelector(":root");

    if (dark === 0){
    e.setAttribute("data-theme", "dark");
    dark = 1
    } else {
        e.setAttribute("data-theme", "normal");
        dark = 0;
    }
}

var butt = 0;

function changeText(){
    document.getElementById('darkmodebutton');
   
    if (butt === 0){
    darkmodebutton.textContent = 'Stupid Mode';
    butt = 1;
    } else {
        darkmodebutton.textContent = 'Dark Mode';
    butt = 0;
    }
}



/*

 if ( theme === no ) {
        e.setAttribute("data-theme", "dark");
        theme = yes;
    } else {
        e.setAttribute("data-theme", "normal");
        theme = no;
    }

*/