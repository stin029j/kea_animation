window.addEventListener("load", sidenVises);


"use strict";
let timeLeft = 10;
let score = 0;
let life = 3;


function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("showStart");

    document.querySelector("#play_btn").classList.remove("hide");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play_btn").classList.add("pulse");

    document.querySelector("#settings_button").classList.remove("hide");
    document.querySelector("#settings").addEventListener("click", showSetting);

    document.querySelector("#play_btn").addEventListener("click", hideStart);
    document.querySelector("#settings_button").addEventListener("click", showSetting);
}

function showExit() {
    console.log("showExit");

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
    document.querySelector("#play_btn").classList.remove("pulse");
    document.querySelector("#play_btn").removeEventListener("click", hideStart);
    document.querySelector("#start").classList.add("fade_out");
    document.querySelector("#play_btn").classList.add("fade_out");


    document.querySelector("#start").addEventListener("animationend", startGame);
}

function startGame() {
    console.log("startGame");

    document.querySelector("#air").classList.remove("hide");
    document.querySelector("#time").classList.remove("hide");
    document.querySelector("#life").classList.remove("hide");
    document.querySelector("#energy").classList.remove("hide");
    document.querySelector("#points").classList.remove("hide");
    document.querySelector("#score").classList.remove("hide");
    document.querySelector("#exit").classList.remove("hide");
    document.querySelector("#exit").addEventListener("click", showStart);

    document.querySelector("#score").innerHTML = "score: " + score;
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#play_btn").removeEventListener("animationend", startGame);
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

    document.querySelector("#brandmand_left1").addEventListener("click", clickBrandmand);
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

    timeLeftFc();
}


function timeLeftFc() {
    console.log("timeLeftFc timeLeft er" + timeLeft);
    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 3000);
    } else {

        gameover();
    }

}

function clickPlastic() {
    console.log("clickPlastic");

    score++;
    console.log(score);

    document.querySelector("#score").innerHTML = "score:" + score;

    console.log(this);
    this.classList.add("hide");

    gameStatus();


}
//

//det over skal måske slettes

function clickBrandmand() {
    console.log("clickBrandmand");

    if (this.classList.contains("brandmand")) {
        console.log("life");

        this.classList.remove("brandmand");

        document.querySelector("#heart" + life).classList.add("hide");
        life--;

        this.classList.add("dissappear");
        this.addEventListener("animationend", myMove);
        gameStatus();
    }


}


function myMove() {
    console.log("myMove");

    document.querySelector("#plastic" + myRandom()).classList.add("");
}

function myRandom() {
    let tilfaeldigttal = Math.floor(Math.random() * 6) + 1;
    return tilfaeldigttal;

}

function gameStatus() {
    console.log("gameStatus life er" + life);
    if (life == 0) {
        document.querySelector("#gameover").classList.remove("hide");
        gameover();
    }
    if (score == 10) {
        document.querySelector("#levelcomplete").classList.remove("hide");
        levelComplete();
    }

}

function gameover() {
    console.log("gameOver");

    document.querySelector("#air").classList.add("hide");
    document.querySelector("#time").classList.add("hide");
    document.querySelector("#life").classList.add("hide");
    document.querySelector("#energy").classList.add("hide");
    document.querySelector("#points").classList.add("hide");
    document.querySelector("#score").classList.add("hide");
    document.querySelector("#exit").classList.add("hide");

    document.querySelector("#tandboerste").removeEventListener("click", clickPlastic);
    document.querySelector("#tandboerste2").removeEventListener("click", clickPlastic);
    document.querySelector("#bag_left").removeEventListener("click", clickPlastic);
    document.querySelector("#bag_left2").removeEventListener("click", clickPlastic);
    document.querySelector("#bag_right").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_big").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_big2").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_small").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_small2").removeEventListener("click", clickPlastic);
    document.querySelector("#flaske").removeEventListener("click", clickPlastic);
    document.querySelector("#flaske2").removeEventListener("click", clickPlastic);
    document.querySelector("#straw_left").removeEventListener("click", clickPlastic);
    document.querySelector("#strawyellow_left").removeEventListener("click", clickPlastic);
    document.querySelector("#strawyellow_right").removeEventListener("click", clickPlastic);

    document.querySelector("#brandmand_left1").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left2").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left3").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left4").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left5").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left6").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right1").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right2").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right3").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right4").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right5").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right6").removeEventListener("click", clickBrandmand);


    document.querySelector("#tandboerste").classList.add("hide");
    document.querySelector("#tandboerste2").classList.add("hide");
    document.querySelector("#bag_left").classList.add("hide");
    document.querySelector("#bag_left2").classList.add("hide");
    document.querySelector("#bag_right").classList.add("hide");
    document.querySelector("#bubble_big").classList.add("hide");
    document.querySelector("#bubble_big2").classList.add("hide");
    document.querySelector("#bubble_small").classList.add("hide");
    document.querySelector("#bubble_small2").classList.add("hide");
    document.querySelector("#flaske").classList.add("hide");
    document.querySelector("#flaske2").classList.add("hide");
    document.querySelector("#straw_left").classList.add("hide");
    document.querySelector("#strawyellow_left").classList.add("hide");
    document.querySelector("#strawyellow_right").classList.add("hide");

    document.querySelector("#brandmand_left1").classList.add("hide");
    document.querySelector("#brandmand_left2").classList.add("hide");
    document.querySelector("#brandmand_left3").classList.add("hide");
    document.querySelector("#brandmand_left4").classList.add("hide");
    document.querySelector("#brandmand_left5").classList.add("hide");
    document.querySelector("#brandmand_left6").classList.add("hide");
    document.querySelector("#brandmand_right1").classList.add("hide");
    document.querySelector("#brandmand_right2").classList.add("hide");
    document.querySelector("#brandmand_right3").classList.add("hide");
    document.querySelector("#brandmand_right4").classList.add("hide");
    document.querySelector("#brandmand_right5").classList.add("hide");
    document.querySelector("#brandmand_right6").classList.add("hide");

    document.querySelector("#gameover").classList.remove("hide");

}

function levelComplete() {
    console.log("levelComplete");

    document.querySelector("#air").classList.add("hide");
    document.querySelector("#time").classList.add("hide");
    document.querySelector("#life").classList.add("hide");
    document.querySelector("#energy").classList.add("hide");
    document.querySelector("#points").classList.add("hide");
    document.querySelector("#score").classList.add("hide");
    document.querySelector("#exit").classList.add("hide");

    document.querySelector("#tandboerste").removeEventListener("click", clickPlastic);
    document.querySelector("#tandboerste2").removeEventListener("click", clickPlastic);
    document.querySelector("#bag_left").removeEventListener("click", clickPlastic);
    document.querySelector("#bag_left2").removeEventListener("click", clickPlastic);
    document.querySelector("#bag_right").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_big").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_big2").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_small").removeEventListener("click", clickPlastic);
    document.querySelector("#bubble_small2").removeEventListener("click", clickPlastic);
    document.querySelector("#flaske").removeEventListener("click", clickPlastic);
    document.querySelector("#flaske2").removeEventListener("click", clickPlastic);
    document.querySelector("#straw_left").removeEventListener("click", clickPlastic);
    document.querySelector("#strawyellow_left").removeEventListener("click", clickPlastic);
    document.querySelector("#strawyellow_right").removeEventListener("click", clickPlastic);

    document.querySelector("#brandmand_left1").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left2").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left3").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left4").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left5").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_left6").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right1").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right2").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right3").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right4").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right5").removeEventListener("click", clickBrandmand);
    document.querySelector("#brandmand_right6").removeEventListener("click", clickBrandmand);


    document.querySelector("#tandboerste").classList.add("hide");
    document.querySelector("#tandboerste2").classList.add("hide");
    document.querySelector("#bag_left").classList.add("hide");
    document.querySelector("#bag_left2").classList.add("hide");
    document.querySelector("#bag_right").classList.add("hide");
    document.querySelector("#bubble_big").classList.add("hide");
    document.querySelector("#bubble_big2").classList.add("hide");
    document.querySelector("#bubble_small").classList.add("hide");
    document.querySelector("#bubble_small2").classList.add("hide");
    document.querySelector("#flaske").classList.add("hide");
    document.querySelector("#flaske2").classList.add("hide");
    document.querySelector("#straw_left").classList.add("hide");
    document.querySelector("#strawyellow_left").classList.add("hide");
    document.querySelector("#strawyellow_right").classList.add("hide");

    document.querySelector("#brandmand_left1").classList.add("hide");
    document.querySelector("#brandmand_left2").classList.add("hide");
    document.querySelector("#brandmand_left3").classList.add("hide");
    document.querySelector("#brandmand_left4").classList.add("hide");
    document.querySelector("#brandmand_left5").classList.add("hide");
    document.querySelector("#brandmand_left6").classList.add("hide");
    document.querySelector("#brandmand_right1").classList.add("hide");
    document.querySelector("#brandmand_right2").classList.add("hide");
    document.querySelector("#brandmand_right3").classList.add("hide");
    document.querySelector("#brandmand_right4").classList.add("hide");
    document.querySelector("#brandmand_right5").classList.add("hide");
    document.querySelector("#brandmand_right6").classList.add("hide");

    document.querySelector("#levelcomplete").classList.remove("hide");
}
