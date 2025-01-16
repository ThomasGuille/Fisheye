const BaseURL = "datas/photographers.json";

export const getData = async () => {
    try{
        const response = await fetch(BaseURL);
        return response.json();
    }catch{
        return new Error("Bummer!");
    }
}

export const getPhotographers = async () => {
    const data = await getData();
    return data.photographers;
}

export const getMedias = async () => {
    const medias = await getData();
    return medias.media;
}

const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
const id = urlParams.get("id");
const sort = urlParams.get("sort");

export const photographerById = async () => {
    const photographe = await getPhotographers();

    const photographer = photographe.filter(gens => {
        if(gens.id == id){
            return gens;
        }
    })
    return photographer[0];
}

export const getMediaByPhotographer = async () => {
    const medias = await getMedias();

    

    const oeuvre = medias.filter(media => {
        if(media.photographerId == id){
            return media;
        }
    })

    switch(sort){
        case "Popularité":
            oeuvre.sort((a, b) => b.likes - a.likes);
        break;
        case "Date":
            oeuvre.sort((a, b) => a.date.localeCompare(b.date));
        break;
        case "Titre":
            oeuvre.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return oeuvre;
}