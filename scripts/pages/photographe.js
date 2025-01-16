import { getMediaByPhotographer, photographerById } from "../utils/api.js";
import { header } from "../components/header.js";
import { photographe, dropDown } from "../components/pagePhotographe.js";
import { modal, modalDisplay } from "../components/modal.js";
import { lightBox, lightboxOpen, lightboxNext, lightboxPrevious, lightboxClose } from "../utils/lightbox.js";

const displayData = (mediaByPhotographer, photographeById) => {
    const body = document.querySelector("body");
    body.innerHTML = `
        ${lightBox()}
        <div class="container">
            <div class="header__baniere">
                ${header()}
            </div>
            ${photographe(mediaByPhotographer, photographeById)}
        </div>
        ${modal(photographeById)}
    `;

    dropDown();
    modalDisplay();
    lightboxOpen();
    lightboxNext(mediaByPhotographer, photographeById);
    lightboxPrevious(mediaByPhotographer, photographeById);
    lightboxClose();
}

(async () => {
    const mediaByPhotographer = await getMediaByPhotographer();
    const photographeById = await photographerById();
    displayData(mediaByPhotographer, photographeById);
})()