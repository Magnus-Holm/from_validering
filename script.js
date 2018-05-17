window.addEventListener("load", function () {
    document.getElementById("bestillingInfo").onsubmit = Valider;
});

function Valider() {
    var AntalFejl = 0;
    var FejlBeskedNavn = "";

    if (document.getElementById('navn').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('navn').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (AntalFejl === 0) {
        return true;
    } else {
        document.getElementById('fejlBeskedNavn').innerHTML = FejlBeskedNavn;
        return false;
    }

}