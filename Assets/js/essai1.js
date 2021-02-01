// /********* Boîtes par défaut *********/
// // Affichage boîte d'alerte
// document.getElementById('alert-box').addEventListener('click', function() {
//     alert('Je suis une boîte d\'alerte !');
// });

// // Affichage boîte de confirmation
// document.getElementById('confirm-box').addEventListener('click', function() {
//     if (confirm('Je suis une boîte de confirmation !')) {
//         console.log('Confirmé !')
//     } else {
//         console.log('Annulé !');
//     }
// });

// // Affichage boîte de dialogue
// document.getElementById('prompt-box').addEventListener('click', function() {
//     var text = prompt('Je suis une boîte de confirmation !\nQuel est votre prénom ?');

//     if (text === null) {
//         console.log('L\'utilisateur a cliqué sur "Annuler".');
//     } else if (text === "") {
//         console.log('L\'utilisateur n\'a saisi aucune valeur.');
//     } else {
//         console.log('Bonjour ' + text + ' !');
//     }
// });

/********* Boîtes personnalisées *********/
var modalContainer = document.createElement('div');
modalContainer.setAttribute('id', 'modal');

var customBox = document.createElement('div');
customBox.className = 'custom-box';

// Affichage boîte d'alerte
document.getElementById('custom-alert-box-button').addEventListener('click', function() {
    customBox.innerHTML = <div id="maModale"></div>;
    customBox.innerHTML += '<button id="modal-close">OK</button>';
    modalShow();
});


// ?????????????????????????????????
// Affichage boîte d'alerte
// document.getElementById('custom-alert-box-button').addEventListener('click', function() {
//     customBox.innerHTML = '<p>Je suis une boîte d\'alerte customisée !</p>';
//     customBox.innerHTML += '<button id="modal-close">OK</button>';
//     modalShow();
// });
// ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿


// // Affichage boîte de confirmation
// document.getElementById('custom-confirm-box-button').addEventListener('click', function() {
//     customBox.innerHTML = '<p>Je suis une boîte de confirmation customisée !</p>';
//     customBox.innerHTML += '<button id="modal-confirm">Confirmer</button>';
//     customBox.innerHTML += '<button id="modal-close">Annuler</button>';
//     modalShow();
// });

// // Affichage boîte de dialogue
// document.getElementById('custom-prompt-box-button').addEventListener('click', function() {
//     customBox.innerHTML = '<p>Je suis une boîte de dialogue customisée !</p>';
//     customBox.innerHTML += '<input type="text" id="modal-prompt" placeholder="Votre nom"/><br/>'
//     customBox.innerHTML += '<button id="modal-submit">Valider</button>';
//     customBox.innerHTML += '<button id="modal-close">Annuler</button>';
//     modalShow();
// });

function modalShow() {
    modalContainer.appendChild(customBox);
    document.body.appendChild(modalContainer);

    document.getElementById('modal-close').addEventListener('click', function() {
        modalClose();
    });

    if (document.getElementById('modal-confirm')) {
        document.getElementById('modal-confirm').addEventListener('click', function () {
           console.log('Confirmé !');
           modalClose();
        });
    } else if (document.getElementById('modal-submit')) {
        document.getElementById('modal-submit').addEventListener('click', function () {
            console.log(document.getElementById('modal-prompt').value);
            modalClose();
        });
    }
}

function modalClose() {
    while (modalContainer.hasChildNodes()) {
        modalContainer.removeChild(modalContainer.firstChild);
    }
    document.body.removeChild(modalContainer);
}