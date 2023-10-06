/* Süha Tanrıverdi. September, 2023 */
const images = document.querySelectorAll('#galleryPic');
const pitures = document.querySelector('#pitures');
const preview = document.querySelector('#preview');
const emailSection = document.querySelector('#message-sent');
const body = document.body;
let flag = true;

for (const image of images) {
    image.addEventListener('click', () => {
        handleClick(image);
    });
}

body.addEventListener('click', (e) => {
    if (e.target.id !== 'galleryPic') {
        pitures.style.display = 'flex';
        preview.style.display = 'none';
        flag = !flag;
    }
});

emailSection.addEventListener('submit', (e) => {
    emailSection.style.display = 'flex'
});

function handleClick(image) {
    if (flag) {
        pitures.style.display = 'none';
        preview.children[0].src = image.src;
        preview.style.display = 'flex';
    } else {
        pitures.style.display = 'flex';
        preview.style.display = 'none';
    }
    flag = !flag;
}