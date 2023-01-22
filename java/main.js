console.log('JavaScript is running!');

const vectorGraphic = document.querySelector('.object-border');

function logThisId() {
    console.log('clicked on this element:', this.class);
}


vectorGraphic.addEventListener('click', logThisId);
