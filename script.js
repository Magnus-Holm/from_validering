window.addEventListener("load", function () {
    document.getElementById("bestillingInfo").onsubmit = Valider;
});

function Valider() {
    var AntalFejl = 0;
    var FejlBeskedNavn = "";

    if (document.getElementById('forNavn').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('navn').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('efterNavn').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('aaTal').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('maaned').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('dag').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('sex').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('adresse').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('vejNr').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('postNr').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('by').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('land').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('tlfNr').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('eMail').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('adresse2').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('vejNr2').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
            AntalFejl += 1;
            FejlBeskedNavn = "Navnet er ikke gyldig";
        }
    }
    if (document.getElementById('').value === "") {
        AntalFejl += 1;
        FejlBeskedNavn = "Dit navn mangler";
    } else {
        var regexpnavn = /^[a-zA-ZÆØÅæøå]+[\s]*[a-zA-ZÆØÅæøå]*[\s]*[a-zA-ZÆØÅæøå]*$/;
        if (!regexpnavn.test(document.getElementById('').value)) {
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