import { galleryItems } from './gallery-items.js';


// Change code below this line

console.log(galleryItems);

const galleryMenu = document.querySelector('.gallery');


const galleryMarkUP = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
console.log(galleryMarkUP);

galleryMenu.insertAdjacentHTML("beforeend", galleryMarkUP);


const createBigImage = (event) => {
    event.preventDefault();  
    
    if (event.target.nodeName !== "IMG") {
        return
    }
        
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}"         
        >
    </div>
`)
    instance.show(event.target);
    
    
}



// function onEscKeyPress(event) {
//     if (event.code === 'Escape') {
        
//     }
// }
    
galleryMenu.addEventListener('click', createBigImage)

// window.addEventListener("keydown", onEscKeyPress)

// const openModalBtnEl = document.querySelector('.js-modal-open');
// const backdropEl = document.querySelector('.js-backdrop');
// const closeModalBtnEl = document.querySelector('.js-modal-close');

// const closeModal = () => {
//   backdropEl.classList.remove('is-open');

//   document.removeEventListener('keydown', onDocumentKeyDown);
// };

// const onOpenModalBtnClick = () => {
//   backdropEl.classList.add('is-open');

//   document.addEventListener('keydown', onDocumentKeyDown);
// };

// const onCloseModalBtnClick = () => {
//   closeModal();
// };

// const onDocumentKeyDown = event => {
//   console.log(event.code);

//   if (event.code === 'Escape') {
//     closeModal();
//   }
// };

// openModalBtnEl.addEventListener('click', onOpenModalBtnClick);
// closeModalBtnEl.addEventListener('click', onCloseModalBtnClick);
