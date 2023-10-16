let dialog = document.querySelector(".dialog"); //open dialog
let btnClose = document.querySelector(".close");
btnClose.addEventListener("click", () => {
    dialog.close();
})
//dialog.showModal();