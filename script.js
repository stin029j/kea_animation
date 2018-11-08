window.addEventListener("load", sidenVises);


"use strict";
let timeLeft = 10;
let score = 0;
let life = 3;

let showSettingsEffektSound = true;
let showSettingsMusic = true;

let tilfaeldigttal


function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);

    console.log("spil intro musik");
    document.querySelector("#oceansound").play();
}

function showStart() {
    console.log("showStart");

    document.querySelector("#play_btn").classList.remove("hide");
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play_btn").classList.add("pulse");

    document.querySelector("#play_btn").addEventListener("click", hideStart);
    document.querySelector("#settings_btn").addEventListener("click", showSetting);

    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);


    console.log("spil musik");
    document.querySelector("musik").play();
}


function showSetting() {
    console.log("showSettings");
    document.querySelector("#settings").classList.toggle('hide');
    document.querySelector("#back").classList.toggle("hide");
    document.querySelector("#back").addEventListener("click", hideSetting);


}

function hideSetting() {
    console.log("hideSettings");
    document.querySelector("#back").removeEventListener("click", hideSetting);


    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#sfx").classList.add("hide");
    document.querySelector("#music").classList.add("hide");

    document.querySelector("#back").classList.add("hide");
}

function toggleSounds() {
    console.log("showSettingsEffektSound function" + showSettingsEffektSound);


    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        document.querySelector("#sfx_sprite").classList.add("off_on");
        document.querySelector("#sfx_sprite").classList.remove("off");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#sfx_sprite").classList.add("on_off");
        document.querySelector("#sfx_sprite").classList.remove("on");
        document.querySelector("#sfx_sprite").addEventListener("animationend", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#sfx_sprite").classList.remove("on_off");
    document.querySelector("#sfx_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#hapshaps").muted = true;
    document.querySelector("#prut1").muted = true;

}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#sfx_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#sfx_sprite").classList.remove("off_on");
    document.querySelector("#sfx_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#hapshaps").muted = false;
    document.querySelector("#prut1").muted = false;
}

function toggleMusic() {
    console.log("showSettingsMusic function" + showSettingsMusic);
    if (showSettingsMusic == false) {
        //her klikker vi lyden på
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
        //        musicOn();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
        //        musicOff();
    }
}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");
    //    her slukkes for musikken

    document.querySelector("#musik").pause();
}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);
    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");
    //    her tændes for musikken

    document.querySelector("#musik").play();
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
    document.querySelector("#plastik1").addEventListener("click", clickPlastic);
    document.querySelector("#plastik2").addEventListener("click", clickPlastic);
    document.querySelector("#plastik3").addEventListener("click", clickPlastic);
    document.querySelector("#plastik4").addEventListener("click", clickPlastic);
    document.querySelector("#plastik5").addEventListener("click", clickPlastic);
    document.querySelector("#plastik6").addEventListener("click", clickPlastic);
    document.querySelector("#plastik7").addEventListener("click", clickPlastic);
    document.querySelector("#plastik8").addEventListener("click", clickPlastic);
    document.querySelector("#plastik9").addEventListener("click", clickPlastic);
    document.querySelector("#plastik10").addEventListener("click", clickPlastic);
    document.querySelector("#plastik11").addEventListener("click", clickPlastic);
    document.querySelector("#plastik12").addEventListener("click", clickPlastic);
    document.querySelector("#plastik13").addEventListener("click", clickPlastic);
    document.querySelector("#plastik14").addEventListener("click", clickPlastic);

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
    myNumber();

    console.log(this);
    this.classList.add("hide");

    //    this.addEventListener("animationend", myNumber);

    gameStatus();


}


function clickBrandmand() {
    console.log("clickBrandmand");

    if (this.classList.contains("brandmand")) {
        console.log("life");

        console.log(this);
        this.classList.add("hide");
        myNumber();

        document.querySelector("#heart" + life).classList.add("hide");
        life--;


        gameStatus();
    }
}

//Her får Plastic og Bubbles ny position
function myNumber() {
    console.log("myNumber");

    document.querySelector("#plastik" + myRandom()).classList.add("plastic");
}

function myRandom() {
    let tilfaeldigttal = Math.floor(Math.random() * 14) + 1;
    return tilfaeldigttal;

}


//Her mister jeg liv og får point
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

    document.querySelector("#plastik1").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik2").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik3").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik4").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik5").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik6").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik7").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik8").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik9").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik10").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik11").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik12").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik13").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik14").removeEventListener("click", clickPlastic);

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


    document.querySelector("#plastik1").classList.add("hide");
    document.querySelector("#plastik2").classList.add("hide");
    document.querySelector("#plastik3").classList.add("hide");
    document.querySelector("#plastik4").classList.add("hide");
    document.querySelector("#plastik5").classList.add("hide");
    document.querySelector("#plastik6").classList.add("hide");
    document.querySelector("#plastik7").classList.add("hide");
    document.querySelector("#plastik8").classList.add("hide");
    document.querySelector("#plastik9").classList.add("hide");
    document.querySelector("#plastik10").classList.add("hide");
    document.querySelector("#plastik11").classList.add("hide");
    document.querySelector("#plastik12").classList.add("hide");
    document.querySelector("#plastik13").classList.add("hide");
    document.querySelector("#plastik14").classList.add("hide");

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

    document.querySelector("#plastik1").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik2").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik3").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik4").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik5").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik6").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik7").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik8").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik9").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik10").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik11").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik12").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik13").removeEventListener("click", clickPlastic);
    document.querySelector("#plastik14").removeEventListener("click", clickPlastic);

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


    document.querySelector("#plastik1").classList.add("hide");
    document.querySelector("#plastik2").classList.add("hide");
    document.querySelector("#plastik3").classList.add("hide");
    document.querySelector("#plastik4").classList.add("hide");
    document.querySelector("#plastik5").classList.add("hide");
    document.querySelector("#plastik6").classList.add("hide");
    document.querySelector("#plastik7").classList.add("hide");
    document.querySelector("#plastik8").classList.add("hide");
    document.querySelector("#plastik9").classList.add("hide");
    document.querySelector("#plastik10").classList.add("hide");
    document.querySelector("#plastik11").classList.add("hide");
    document.querySelector("#plastik12").classList.add("hide");
    document.querySelector("#plastik13").classList.add("hide");
    document.querySelector("#plastik14").classList.add("hide");

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
