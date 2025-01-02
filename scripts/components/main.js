export const main = (photographers) => {
    
    let cards = ``;
    photographers.forEach(portrait => {
        cards += `
            <figure class="card">
                <a href="photographe.html?id=${portrait.id}" class="link__portrait">
                    <div class="portrait__content">
                        <img src="assets/images/photographers/thumbnails/${portrait.portrait}" alt="portrait du photographe" class="portrait">
                    </div>
                    <h2 class="portrait__name">${portrait.name}</h2>
                </a>
                <figurecaption class="portrait__legend">
                    <p class="location">${portrait.city} ,${portrait.country}</p>
                    <p class="description">${portrait.tagline}</p>
                    <p class="tarif">${portrait.price}€/jour</p>
                </figurecaption>
            </figure>
        `;
    });

    return `
        <main class="main">
            ${cards}
        </main>
    `;
}