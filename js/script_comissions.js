function addPWD() {
    var pwd = PwdSaisi();
    pwd.pushPWD();
}

function addLine() {
    addPWD();
    var table = document.getElementById("tabBody");
    var newLine = document.createElement("tr");
    var civilite = document.createElement("td");
    var nom = document.createElement("td");
    var prenom = document.createElement("td");
    var mail = document.createElement("td");
    var description = document.createElement("td");
    var type = document.createElement("td");

    mesPWDs.forEach(function (item) {
        civilite.textContent = item.civilite;
        nom.textContent = item.nom;
        prenom.textContent = item.prenom;
        mail.textContent = item.mail;
        description.textContent = item.description;
        type.textContent = item.type;
        console.log(item.printPWD);


        newLine.classList.add("line");
        newLine.append(civilite, nom, prenom, mail, description, type);

        table.appendChild(newLine);
    });
}


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('#addPWD').addEventListener('submit', function (e) {

        console.log("test");
        addLine();

    });
});

function supprimer() {
    if (confirm("Confirmez-vous la suppression de la dernière comission ? ")) {
        let tbody = document.getElementById("tabBody");

        tbody.removeChild(tbody.lastChild);

    }
}

function PwdSaisi(pwd) {
    var monformulaire = document.forms.ajoutPWD;
    var civilite = "";

    if (monformulaire.elements["Madame"].checked) {
        civilite = "Madame";
    } else if (monformulaire.elements["Monsieur"].checked) {
        civilite = "Monsieur";
    }

    const NewPwd = new PWD(civilite, monformulaire.elements["nom"].value, monformulaire.elements["prenom"].value, monformulaire.elements["mail"].value, monformulaire.elements["description"].value, monformulaire.elements["type"].value)

    NewPwd.printPWD();
    return NewPwd;
}

var mesPWDs = [];
var sizeTable = 0;
class PWD {
    constructor(civilite, nom, prenom, mail, description, type) {
        this.civilite = civilite;
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.description = description;
        this.type = type;
    }

    printPWD() {
        console.log('Civilité saisi : ' + this.civilite);
        console.log('Nom saisi : ' + this.nom);
        console.log('Prénom saisi : ' + this.prenom);
        console.log('Adresse mail saisi : ' + this.mail);
        console.log('Description courte : ' + this.description);
        console.log('Type de projet : ' + this.type);
    }

    pushPWD() {
        mesPWDs[sizeTable] = (this);
        sizeTable++;
        console.log(sizeTable);
    }
}
