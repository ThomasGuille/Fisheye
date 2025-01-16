export const photographe = (mediaByPhotographer, photographeById) => {
    let realisations = ``;
    let likes = 0;
    mediaByPhotographer.forEach((real, index) => {
        if(real.video){
            realisations += `
                <figure class="photographe__card">
                    <div class="picture">
                        <div class="realistation__link">
                            <video data-type="video" data-position="${index}" class="video" alt="${real.title}" autoplay muted loop>
                                <source src="assets/images/photographers/samplePhotos-Small/${photographeById.name}/${real.video}" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <figcaption class="realisation__details">
                        <p class="realisation__title">${real.title}</p>
                        <p class="realisation__like">${real.likes} <i class="fa-solid fa-heart"></i></p>
                    </figcaption>
                </figure>
                    `;
        }else{
            realisations += `
                <figure class="photographe__card">
                    <div class="picture">
                        <div class="realistation__link">
                            <img data-type="image" data-position="${index}" src="assets/images/photographers/samplePhotos-Small/${photographeById.name}/${real.image}" alt="${real.title}" class="realisation__picture">
                        </div>
                    </div>
                    <figcaption class="realisation__details">
                        <p class="realisation__title">${real.title}</p>
                        <p class="realisation__like">${real.likes} <i class="fa-solid fa-heart"></i></p>
                    </figcaption>
                </figure>
            `;
        }

        likes += real.likes;
    });
    const querystring = window.location.search;
    const urlParams = new URLSearchParams(querystring);
    const sort = urlParams.get("sort");

    return `
        <main class="main__photographe">
            <div class="photographe__banner">
                <div class="photographe__details">
                    <p class="photographe__name">${photographeById.name}</p>
                    <p class="photographe__location">${photographeById.city}, ${photographeById.country}</p>
                    <p class="photographe__tagline">${photographeById.tagline}</p>
                </div>
                <p data-id="${photographeById.id}" class="photographe__contact">Contactez-moi</p>
                <div class="portrait__content">
                    <img src="assets/images/photographers/thumbnails/${photographeById.portrait}" alt="" class="portrait">
                </div>
            </div>

            <div class="photographe__main">
                <div class="sortBy">
                    <label for="sortBy__menu" class="sortBy__title">Trier par </label>
                    <div class="dropdown">
                        <div class="dropdown__menu btn__dropdown">
                            <p data-sort="popularite" class="btn__drop__text dropdown__menu__option">${sort ? sort : "Popularite"}</p>
                            <i class="fa-solid fa-chevron-down drop__chevron"></i>
                        </div>
                        <a href="photographe.html?id=${photographeById.id}&sort=${sort == "Date" ? "Popularite" : "Date"}" class="dropdown__menu dropdown__menu__option">${sort == "Date" ? "Popularite" : "Date"}</a>
                        <a href="photographe.html?id=${photographeById.id}&sort=${sort == "Titre" ? "Popularite" : "Titre"}" class="dropdown__menu dropdown__menu__option">${sort == "Titre" ? "Popularite" : "Titre"}</a>
                    </div>
                </div>
                <div class="photographe__realisations">
                    ${realisations}
                </div>
                <div class="likesTarif">
                    <p class="nbLikes">${likes} <i class="fa-solid fa-heart"></i></p>
                    <p class="tarifpagephoto">${photographeById.price}€ / jour</p>
                </div>
            </div>
        </main>
    `;
}

export const dropDown = () => {
    const dropdownMenu = document.querySelector(".dropdown");
    const btnDrop = document.querySelector(".btn__dropdown");
    const chevron = document.querySelector(".drop__chevron");
    btnDrop.addEventListener("click", () => {
        dropdownMenu.classList.toggle("dropdown__display");
        chevron.classList.toggle("fa-rotate-180");
    })
}