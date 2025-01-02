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
        })
    })
}

let compteur = 0;
let indexation = 0;
let position = -1;

export const lightboxNext = (mediaByPhotographer, photographeById) => {
    const btnNext = document.querySelector(".next");
    const lightboxPicture = document.querySelector(".picture__lightbox");
    const lightboxTitle = document.querySelector(".lightbox__title");
    const arrayLength = mediaByPhotographer.length;
    const name = photographeById.name;
    
    btnNext.addEventListener("click", () => {
        const picPosition = document.querySelector(".lightbox__pic");
        const currentPosition = parseInt(picPosition.getAttribute("data-position"));
        
        compteur++;
        indexation = currentPosition + compteur;
        if(indexation < arrayLength){
            let typeIndex = mediaByPhotographer[indexation];
                    
            if(typeIndex.video){
                lightboxPicture.innerHTML = `<video data-type="video" data-position="${currentPosition}" class="video__lightbox current__picture lightbox__pic" alt="" controls autoplay muted loop><source src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[indexation].video}" type="video/mp4"></video>`;                       
            }else{
                lightboxPicture.innerHTML = `<img data-type="image" data-position="${currentPosition}" src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[indexation].image}" alt="" class="lightbox__picture current__picture lightbox__pic">`;
            }
            lightboxTitle.innerText = mediaByPhotographer[indexation].title;
        }else{
            position++;
            if(position >= arrayLength){
                position = 0
            }
            let typePosition = mediaByPhotographer[position];
            if(typePosition.video){
                lightboxPicture.innerHTML = `<video data-type="video" data-position="${currentPosition}" class="video__lightbox current__picture lightbox__pic" alt="" controls autoplay muted loop><source src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[position].video}" type="video/mp4"></video>`;                       
            }else{
                lightboxPicture.innerHTML = `<img data-type="image" data-position="${currentPosition}" src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[position].image}" alt="" class="lightbox__picture current__picture lightbox__pic">`;
            }
            lightboxTitle.innerText = mediaByPhotographer[position].title;
        }
        // console.log("c " + compteur);
        // console.log("i " + indexation);
        // console.log("p " + position);
        // console.log("stop");
        
    })
}

export const lightboxPrevious = (mediaByPhotographer, photographeById) => {
    const btnPrevious = document.querySelector(".previous");
    const lightboxPicture = document.querySelector(".picture__lightbox");
    const lightboxTitle = document.querySelector(".lightbox__title");
    const arrayLength = mediaByPhotographer.length;
    const name = photographeById.name;
    
    btnPrevious.addEventListener("click", () => {
        const picPosition = document.querySelector(".lightbox__pic");
        const currentPosition = parseInt(picPosition.getAttribute("data-position"));

        if(position <= 0){
            position = arrayLength;
        }
        
        compteur++;
        indexation = currentPosition - compteur;
        if(indexation >= 0){
            let typeIndex = mediaByPhotographer[indexation];
                    
            if(typeIndex.video){
                lightboxPicture.innerHTML = `<video data-type="video" data-position="${currentPosition}" class="video__lightbox current__picture lightbox__pic" alt="" controls autoplay muted loop><source src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[indexation].video}" type="video/mp4"></video>`;
            }else{
                lightboxPicture.innerHTML = `<img data-type="image" data-position="${currentPosition}" src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[indexation].image}" alt="" class="lightbox__picture current__picture lightbox__pic">`;
            }
            lightboxTitle.innerText = mediaByPhotographer[indexation].title;
        }else{
            position--;
            let typePosition = mediaByPhotographer[position];
            if(typePosition.video){
                lightboxPicture.innerHTML = `<video data-type="video" data-position="${currentPosition}" class="video__lightbox current__picture lightbox__pic" alt="" controls autoplay muted loop><source src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[position].video}" type="video/mp4"></video>`;    
            }else{
                lightboxPicture.innerHTML = `<img data-type="image" data-position="${currentPosition}" src="assets/images/photographers/samplePhotos-Small/${name}/${mediaByPhotographer[position].image}" alt="" class="lightbox__picture current__picture lightbox__pic">`;
            }
            lightboxTitle.innerText = mediaByPhotographer[position].title;
        }
        // console.log("c " + compteur);
        // console.log("i " + indexation);
        // console.log("p " + position);
        // console.log("stop");
        
    })
}

export const lightboxClose = () => {
    const closeBtn = document.querySelector(".close");
    const lightboxOpening = document.querySelector(".lightbox__content");
    closeBtn.addEventListener("click", () => {
        lightboxOpening.classList.remove("lightbox__display");
        compteur = 0;
        indexation = 0;
        position = -1;
    })
}