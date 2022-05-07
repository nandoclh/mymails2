const totalMessages     = document.querySelector(".total_messages");
const poubelle          = document.querySelectorAll(".trash");
const btnAdd            = document.querySelector(".btnAdd");
const inputNewMessage   = document.querySelector("#new_message");

function updateMessage () {
    totalMessages.textContent = document.querySelectorAll(".un_message").length;   
};

updateMessage();
// Elements de nouveau message


// let nombreMessages  = message.length;

// Supprimer les messages

for(let i = 0 ; i < poubelle.length ; i++) {
poubelle[i].addEventListener("click", function () {
        this.parentNode.remove();
        updateMessage();
    })
}

// Ajouter un message

    btnAdd.addEventListener("click", function () {

    if(inputNewMessage.value == "") {

    } 

    else {

        const newRow                = document.createElement("div");
        newRow.className            = "row";
        document.querySelector(".messageContainer").appendChild(newRow);

        const newStyleDiv           = document.createElement("div");
        newStyleDiv.className       = "un_message bordure border-top-0 d-flex bg-white align-items-center col-12 col-lg-10 offset-lg-1";
        newRow.appendChild(newStyleDiv);

        const newImgAvatar           = document.createElement("img");
        newImgAvatar.src             = "/medias/avatar-2.jpg";
        newImgAvatar.alt             = "avatar 1";
        newImgAvatar.className       = "rounded-circle avatar";
        newStyleDiv.appendChild(newImgAvatar);

        const newDivContenu         = document.createElement('div');
        newDivContenu.className     = 'texte';
        newStyleDiv.appendChild(newDivContenu);

        const newH5                 = document.createElement("h5");
        newH5.textContent           = "Elise Watson";
        newDivContenu.appendChild(newH5);

        let newParagraph            = document.createElement("p");
        newParagraph.textContent    = inputNewMessage.value;
        newDivContenu.appendChild(newParagraph);

        const newImgTrash           = document.createElement('img');
        newImgTrash.src             = "/medias/trash.png";
        newImgTrash.alt             = "trash";
        newImgTrash.className       = "trash";
        newStyleDiv.appendChild(newImgTrash);

        updateMessage();
    
        newImgTrash.addEventListener("click", function () {
                    this.parentNode.remove();
                    // nombreMessages--;
                    updateMessage();
                })
            }
})
