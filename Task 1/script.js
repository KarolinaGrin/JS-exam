/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function kiloweightConvert(valNum) {
    document.getElementById("Svarai").innerHTML = valNum * 2.2046;
    document.getElementById("Uncijos").innerHTML = valNum * 35.274;
    document.getElementById("Gramai").innerHTML = valNum * 1000;
}






/* function weightConverter(valNum) {
    // document.getElementById("outputGramai").innerHTML = valNum / 0.0010000;
}
function weightConverter(valNum) {
    document.getElementById("outputUncijos").innerHTML = valNum * 35.274;
}
function weightConverter(valNum) {
    document.getElementById("outputSvarai").innerHTML = valNum * 2.2046;
}

function outputGramai() {
    document.getElementById('convert').innerHTML =
        (document.getElementById('kilogramai').value / 0.0010000 + "g");
