import { getPhotographers } from "../utils/api.js";
import { header } from "../components/header.js";
import { main } from "../components/main.js";

const displayData = (photographers) => {
    const body = document.querySelector("body");
    body.innerHTML = `
        <div class="container">
            <div class="header__baniere">
                ${header()}
                <h1 class="index__title">Nos photographes</h1>
            </div>
            ${main(photographers)}
        </div>
    `;
}

(async () => {
    const photographers = await getPhotographers();
    displayData(photographers);
})()