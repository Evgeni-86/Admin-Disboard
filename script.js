const btdMark = document.querySelectorAll(".favorit_btd, .eye_btd");

btdMark.forEach(element => {
    element.addEventListener( "click" , () => {
        element.classList.toggle("fa-regular");
        element.classList.toggle("fa-solid");
        console.log(element.classList);
    } );
});