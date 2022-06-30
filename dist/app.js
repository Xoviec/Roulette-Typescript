console.log("Dobraaa ezz");
const container = document.querySelector(".game-cointainer");
const btn = document.getElementById('spin');
let obrot = Math.floor(Math.random() * 359) + 1;
let licznik = obrot;
let number = obrot + 3240;
let liczba = 0;
const winings = [5, 4, 3, 2, 1, 0, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5];
const messageWinner = document.getElementById('winner');
const czerwony = "czerwony";
const czarny = "czarny";
const zielony = "zielony";
let win = 0;
let reszta = 0;
let betAmmount = 0;
let moneyGot = 0;
let choosedNumber = 0;
let balance = document.getElementById("balance");
let display = document.getElementById('display');
let displayNumber = parseInt(display.value);
let wartosc = 0;
const buttons = Array.from(document.getElementsByClassName('change-box'));
let displayLicznik = 0;
const betSet = document.getElementById("bet-set");
const betRed = document.getElementById("bet-Red");
const betGreen = document.getElementById("bet-Green");
const betBlack = document.getElementById("bet-Black");
const redBeted = document.getElementById("redBeted");
const greenBeted = document.getElementById("greenBeted");
const blackBeted = document.getElementById("blackBeted");
let betColor = [];
let isBetedRed = false;
let isBetedBlack = false;
let isBetedGreen = false;
const crashClick = document.getElementById("crash");
const betAlert = document.getElementById("betAlert");
const timer = document.getElementById("timer");
let stupidCounter = 0;
let userName = "User";
let betUserName = (document.getElementById("betUserName"));
;
let betUserAmmount = document.querySelectorAll('#betUserAmmount');
let betAmmountRed = 0;
let betAmmountGreen = 0;
let betAmmountBlack = 0;
const login = document.getElementById("login");
const sumbitButton = document.getElementById("sumbit-button");
const nickInput = document.getElementById("nick-input");
const escLogin = document.getElementById("login-esc");
const preWindow = document.getElementById("pre-window");
let mySet = [];
let delayDeleting = setTimeout(deleteClasses, 7000);
login.addEventListener("click", loginWindow);
betRed.addEventListener("click", betFunctionRed);
betBlack.addEventListener("click", betFunctionBlack);
betGreen.addEventListener("click", betFunctionGreen);
redBeted.addEventListener("click", cancelRedBet);
blackBeted.addEventListener("click", cancelBlackBet);
greenBeted.addEventListener("click", cancelGreenBet);
sumbitButton.addEventListener("click", setUserName);
escLogin.addEventListener("click", loginEsc);
//                           LOGOWANIE
function loginEsc() {
    preWindow.classList.add("invisible");
}
function setUserName() {
    (nickInput.value) = (nickInput.value);
    userName = (nickInput.value);
    betUserName.innerText = userName;
    preWindow.classList.add("invisible");
}
function loginWindow() {
    preWindow.classList.remove("invisible");
}
//                           BETOWANIE
function betFunctionRed() {
    if ((Number(display.value) > 0) && (Number(display.value) <= Number(balance.innerText))) {
        betAmmountRed += parseInt(display.value);
        balance.innerText = String(Number(balance.innerText) - Number(display.value));
        console.log(betAmmountRed);
        redBeted.classList.remove("invisible");
        (betUserAmmount[0].innerText) = betAmmountRed;
        isBetedRed = true;
    }
    else {
        popUpAlert();
    }
}
function betFunctionBlack() {
    if ((Number(display.value) > 0) && (Number(display.value) <= Number(balance.innerText))) {
        betAmmountBlack += parseInt(display.value);
        balance.innerText = String(Number(balance.innerText) - Number(display.value));
        console.log(betAmmountBlack);
        blackBeted.classList.remove("invisible");
        (betUserAmmount[2].innerText) = betAmmountBlack;
        isBetedBlack = true;
    }
    else {
        popUpAlert();
    }
}
function betFunctionGreen() {
    if ((Number(display.value) > 0) && (Number(display.value) <= Number(balance.innerText))) {
        betAmmountGreen += parseInt(display.value);
        balance.innerText = String(Number(balance.innerText) - Number(display.value));
        console.log(betAmmountGreen);
        greenBeted.classList.remove("invisible");
        (betUserAmmount[1].innerText) = betAmmountGreen;
        isBetedGreen = true;
    }
    else {
        popUpAlert();
    }
}
//              Popup zły bet
function popUpAlert() {
    if (betAlert.classList.contains('invisible')) {
        animationTime();
        betAlert.classList.add("show-in");
        timer.classList.add("timer");
        betAlert.classList.remove("invisible");
    }
}
function animationTime() {
    delayDeleting = setTimeout(deleteClasses, 7000);
}
function deleteClasses() {
    betAlert.classList.remove("show-in");
    timer.classList.remove("timer");
    betAlert.classList.add("invisible");
}
function skipAlert() {
    deleteClasses();
    cancelDeletingClasses();
}
function cancelDeletingClasses() {
    clearTimeout(delayDeleting);
}
//           CANCELOWANIE BETÓW
function cancelRedBet() {
    redBeted.classList.add("invisible");
    balance.innerText = String(Number(balance.innerText) + Number(betAmmountRed));
    betAmmountRed = 0;
}
function cancelBlackBet() {
    blackBeted.classList.add("invisible");
    balance.innerText = String(Number(balance.innerText) + Number(betAmmountBlack));
    betAmmountBlack = 0;
}
function cancelGreenBet() {
    greenBeted.classList.add("invisible");
    balance.innerText = String(Number(balance.innerText) + Number(betAmmountGreen));
    betAmmountGreen = 0;
}
function resetBetAmmount() {
    redBeted.classList.add("invisible");
    blackBeted.classList.add("invisible");
    greenBeted.classList.add("invisible");
    betAmmountBlack = 0;
    betAmmountRed = 0;
    betAmmountGreen = 0;
    isBetedBlack = false;
    isBetedGreen = false;
    isBetedRed = false;
}
function redWin() {
    if (isBetedRed == true) {
        win = (betAmmountRed * 2);
        moneyGot = +Number(balance.innerText) + +win;
        // reszta = Number(balance.innerText)
        // console.log("reszta: " + reszta)           xDDD ale gównokod
        // reszta = +reszta + +win
        // balance.innerText = String(reszta)
        balance.innerText = String(moneyGot);
        betAmmount = 0;
    }
    resetBetAmmount();
}
function blackWin() {
    if (isBetedBlack == true) {
        win = (betAmmountBlack * 2);
        moneyGot = +Number(balance.innerText) + +win;
        balance.innerText = String(moneyGot);
        betAmmount = 0;
    }
    resetBetAmmount();
}
function greenWin() {
    if (isBetedGreen == true) {
        win = (betAmmountGreen * 2);
        moneyGot = +Number(balance.innerText) + +win;
        balance.innerText = String(moneyGot);
        betAmmount = 0;
    }
    resetBetAmmount();
}
//                                       Klikanie przycisków + i -
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        wartosc = Number(e.target.innerText);
        display.value = String(Number(display.value) + Number(wartosc));
    });
});
function spin() {
    document.querySelector(".game-cointainer").style.transform = "rotate(" + number + "deg)";
    wygrana();
    newRandom();
}
function wygrana() {
    obrotReset();
    liczba = (Math.round(licznik / 24));
    setTimeout(() => {
        console.log("stopnie obrotu: " + licznik);
        console.log("która liczba?: " + liczba);
        console.log('wygrała liczba' + winings[liczba]);
        choosedNumber = winings[liczba];
        console.log(messageWinner);
        winnerUpdate();
    }, 12000);
}
function newRandom() {
    obrot = Math.floor(Math.random() * 359) + 1;
    number = +number + +obrot + 3240;
    licznik += obrot;
}
function obrotReset() {
    if (licznik > 360) {
        licznik = licznik - 360;
    }
}
function winnerUpdate() {
    if (choosedNumber == 0) {
        document.getElementById('winner').textContent = ("Wygrany: " + zielony + " " + choosedNumber);
        greenWin();
    }
    else if (Number(choosedNumber) % 2 == 0) {
        document.getElementById('winner').textContent = ("Wygrany: " + czerwony + " " + choosedNumber);
        console.log("halo kurwa czerwony test");
        redWin();
    }
    else if (Number(choosedNumber) % 2 != 0) {
        document.getElementById('winner').textContent = ("Wygrany: " + czarny + " " + choosedNumber);
        blackWin();
    }
}
