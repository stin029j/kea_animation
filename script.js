window.addEventListener("load", sidenVises);


"use strict";
let score = 0;
let life = 3;


function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("showStart");

    document.querySelector("#play_button").classList.remove("hide");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play_button").classList.add("pulse");

    document.querySelector("#settings_button").classList.remove("hide");
    document.querySelector("#settings").addEventListener("click", showSetting);

    document.querySelector("#play_button").addEventListener("click", hideStart);
    document.querySelector("#settings_button").addEventListener("click", showSetting);
}


function showSetting() {
    console.log("showSettings");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#musik_turnon_knap").classList.remove("hide");
    document.querySelector("#sfx_turnon_knap").classList.remove("hide");
    document.querySelector("#back").classList.remove("hide");
    showMusicOff();
    sfxOff();
}

function muteMusic() {
    console.log("muteMusic");
    document.querySelector("#music_turnoff_knap").classList.remove("hide");
    document.querySelector("#musik_turnon_knap").classList.add("hide");
}

//her gemmer jeg music on knapper og viser music off kanppen
function showMusicOff() {
    document.querySelector('#musik_turnon_knap').addEventListener('click', function () {
        console.log('music off');
        document.querySelector("#music_turnoff_knap").classList.remove("hide");
        document.querySelector("#musik_turnon_knap").classList.add("hide");
        showMusicOn();
    });
}

function showMusicOn() {
    document.querySelector('#music_turnoff_knap').addEventListener('click', function () {
        console.log('music on');
        document.querySelector("#music_turnoff_knap").classList.add("hide");
        document.querySelector("#musik_turnon_knap").classList.remove("hide");

    });
}

function sfxOff() {
    document.querySelector('#sfx_turnon_knap').addEventListener('click', function () {
        console.log('sfx off');
        document.querySelector("#sfx_turnoff_knap").classList.remove("hide");
        document.querySelector("#sfx_turnon_knap").classList.add("hide");
        sfxOn();
    });
}

function sfxOn() {
    document.querySelector('#sfx_turnoff_knap').addEventListener('click', function () {
        console.log('sfx on');
        document.querySelector("#sfx_turnoff_knap").classList.add("hide");
        document.querySelector("#sfx_turnon_knap").classList.remove("hide");
    });
}

function hideSetting() {
    document.querySelector('#back').addEventListener('click', function () {
        console.log('hide setting')
        document.querySelector("#sfx_turnoff_knap").classList.add("hide");
        document.querySelector("#sfx_turnon_knap").classList.add("hide");
        document.querySelector("#settings").classList.add("hide");
        document.querySelector("#music_turnoff_knap").classList.add("hide");
        document.querySelector("#musik_turnon_knap").classList.add("hide");
        document.querySelector("#sfx_turnon_knap").classList.add("hide");
        document.querySelector("#back").classList.add("hide");
    });
}
hideSetting();


function unmuteMusic() {
    console.log("unmuteMusic");
    document.querySelector("#music_turnoff_knap").classList.add("hide");
    document.querySelector("#musik_turnon_knap").classList.remove("hide");

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play_button").classList.remove("pulse");
    document.querySelector("#play_button").removeEventListener("click", hideStart);
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#play_button").classList.add("fade_out");


    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("startGame");

    document.querySelector("#score").innerHTML = "score: " + score;
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#play_button").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");
    document.querySelector("#tandboerste").addEventListener("click", clickPlastic);
    document.querySelector("#tandboerste2").addEventListener("click", clickPlastic);
    document.querySelector("#bag_left").addEventListener("click", clickPlastic);
    document.querySelector("#bag_left2").addEventListener("click", clickPlastic);
    document.querySelector("#bag_right").addEventListener("click", clickPlastic);
    document.querySelector("#bubble_big").addEventListener("click", clickPlastic);
    document.querySelector("#bubble_big2").addEventListener("click", clickPlastic);
    document.querySelector("#bubble_small").addEventListener("click", clickPlastic);
    document.querySelector("#bubble_small2").addEventListener("click", clickPlastic);
    document.querySelector("#flaske").addEventListener("click", clickPlastic);
    document.querySelector("#flaske2").addEventListener("click", clickPlastic);
    document.querySelector("#straw_left").addEventListener("click", clickPlastic);
    document.querySelector("#strawyellow_left").addEventListener("click", clickPlastic);
    document.querySelector("#strawyellow_right").addEventListener("click", clickPlastic);

    document.querySelector("#brandmand_left1").classList.add("hide");
    document.querySelector("#brandmand_left2").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left3").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left4").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left5").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left6").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right1").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right2").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right3").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right4").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right5").addEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right6").addEventListener("click", clickBrandmand);

}

function clickPlastic() {
    console.log("clickPlastic");

    //        score = score + 1; eller score++; betyder implement med én
    //        score = score + 5; eller score+=5
    score++;
    console.log(score);

    document.querySelector("#score").innerHTML = "score:" + score;

    console.log(this);
    this.classList.add("hide");

}

function clickBrandmand() {
    console.log("clickBrandmand");


    score--;
    console.log(score);

    document.querySelector("#score").innerHTML = "score:" + score;

    console.log(this);
    this.classList.add("hide");
}

function gameOver() {

}

function levelComplete() {

}
