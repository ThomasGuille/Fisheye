export const lightBox = () => {
    return `
        <div class="lightbox__content">
            <i class="fa-solid fa-xmark close"></i>
            <i class="fa-solid fa-chevron-left previous"></i>
            <i class="fa-solid fa-chevron-right next"></i>
            <div class="lightbox">
                <div class="picture__lightbox"></div>
                <h2 class="lightbox__title"></h2>
            </div>
        </div>
    `;
}

let compteur = 0;

export const lightboxOpen = () => {
    const lightboxPicture = document.querySelector(".picture__lightbox");
    const listReal = document.querySelectorAll(".video, .realisation__picture");
    const lightboxOpening = document.querySelector(".lightbox__content");
    const lightboxTitle = document.querySelector(".lightbox__title");

    
    listReal.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            let pictureNode = elem.cloneNode(true);
            pictureNode.classList.add("lightbox__pic");
            pictureNode.classList.remove("realisation__picture", "video");
            pictureNode.setAttribute("controls", true);
            pictureNode.setAttribute("data-position", index);
            lightboxPicture.innerHTML = ``;
            lightboxPicture.appendChild(pictureNode);
        
            const title = elem.getAttribute("alt");
            lightboxTitle.innerText = title;
            lightboxOpening.classList.add("lightbox__display");
            compteur = index;
        })
    })
}

export const lightboxNext = (mediaByPhotographer, photographeById) => {
    const btnNext = document.querySelector(".next");
    const lightboxPicture = document.querySelector(".picture__lightbox");
    const lightboxTitle = document.querySelector(".lightbox__title");
    const arrayLength = mediaByPhotographer.length;
    const name = photographeById.name;
    
    btnNext.addEventListener("click", () => {
        compteur++;
        if(compteur > arrayLength - 1){compteur = 0};
        let typeIndex = mediaByPhotographer[compteur];
                    
        if(typeIndex.video){
            lightboxPicture.innerHTML = `<video data-type="video" data-position="${compteur}" class="video__lightbox current__picture lightbox__pic" alt="" controls autoplay muted loop><source src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[compteur].video}" type="video/mp4"></video>`;                       
        }else{
            lightboxPicture.innerHTML = `<img data-type="image" data-position="${compteur}" src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[compteur].image}" alt="" class="lightbox__picture current__picture lightbox__pic">`;
        };
        lightboxTitle.innerText = mediaByPhotographer[compteur].title;
    })
}

export const lightboxPrevious = (mediaByPhotographer, photographeById) => {
    const btnNext = document.querySelector(".previous");
    const lightboxPicture = document.querySelector(".picture__lightbox");
    const lightboxTitle = document.querySelector(".lightbox__title");
    const arrayLength = mediaByPhotographer.length;
    const name = photographeById.name;
    
    btnNext.addEventListener("click", () => {
        compteur--;
        if(compteur < 0){compteur = arrayLength - 1};
        let typeIndex = mediaByPhotographer[compteur];
                    
        if(typeIndex.video){
            lightboxPicture.innerHTML = `<video data-type="video" data-position="${compteur}" class="video__lightbox current__picture lightbox__pic" alt="" controls autoplay muted loop><source src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[compteur].video}" type="video/mp4"></video>`;                       
        }else{
            lightboxPicture.innerHTML = `<img data-type="image" data-position="${compteur}" src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[compteur].image}" alt="" class="lightbox__picture current__picture lightbox__pic">`;
        };
        lightboxTitle.innerText = mediaByPhotographer[compteur].title;
    })
}

export const lightboxClose = () => {
    const closeBtn = document.querySelector(".close");
    const lightboxOpening = document.querySelector(".lightbox__content");
    closeBtn.addEventListener("click", () => {
        lightboxOpening.classList.remove("lightbox__display");
        compteur = 0;
    })
}