
const reloadtButton = document.querySelector("#reload");
function reload() {
    reload = location.reload();


}
// Event listeners for reload.
reloadtButton.addEventListener("click", reload, false);

function diceRoll() {

    var randomNumber1 = 6 * Math.random();
    var number1 = Math.ceil(randomNumber1);
    var randomNumber2 = 6 * Math.random();
    var number2 = Math.ceil(randomNumber2);

    var image1 = "dice" + number1 + ".png";
    image1 = "./" + image1;
    document.querySelectorAll("img")[0].setAttribute("src", image1);

    var image2 = "dice" + number2 + ".png";
    image2 = "./" + image2;
    document.querySelectorAll("img")[1].setAttribute("src", image2);


    if (number1 > number2) {
        document.querySelector("h2").innerHTML = "&#9996 Player '1' Win";
        document.querySelector(".number1 h3").innerHTML = "Player 1 &#128513";
        document.querySelector(".number2 h3").innerHTML = "Player 2 &#128524";
    }
    else if (number1 < number2) {
        document.querySelector("h2").innerHTML = "&#128075 Player '2' Win";
        document.querySelector(".number1 h3").innerHTML = "Player 1 &#128544";
        document.querySelector(".number2 h3").innerHTML = "Player 2 &#128541";
    }
    else {
        document.querySelector("h2").innerHTML = "&#128513  Match Tie";
        document.querySelector(".number1 h3").innerHTML = "Player 1 &#128562";
        document.querySelector(".number2 h3").innerHTML = "Player 2 &#128562";
    }
}
diceRoll();
