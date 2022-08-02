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
        image1 = "./photos/" + image1;
        document.querySelectorAll("img")[0].setAttribute("src", image1);

        var image2 = "dice" + number2 + ".png";
        image2 = "./photos/" + image2;
        document.querySelectorAll("img")[1].setAttribute("src", image2);


        if (number1 > number2) {
            document.querySelector("h2").innerHTML = "Player '1' Win";
        }
        else if (number1 < number2) {
            document.querySelector("h2").innerHTML = "Player '2' Win";
        }
        else {
            document.querySelector("h2").innerHTML = "Match Tie";
        }
    }
    diceRoll();
