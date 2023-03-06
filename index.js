const content = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
// open modal function
function openModal(){
    console.log('modal is open');
    content.classList.add("active");
    overlay.classList.add("overlayactive");
}

// open modal function
function closeModal(){
    console.log('modal is close');
    content.classList.remove("active");
    overlay.classList.remove("overlayactive");
}