export const modal = (photographeById) => {
    return `
        <div class="modal__back">
            <div class="modal">
                <div class="modal__head">
                    <h2 class="modal__title">Contactez-moi</h2>
                    <img class="modal__close" src="assets/icons/close.svg">
                </div>
                <h2 class="modal__name">${photographeById.name}</h2>
                <form action="" class="modal__form">
                    <label for="form__field__prenom" class="form__label">Prénom</label>
                    <input type="text" class="form__fiel__prenom form__field">

                    <label for="form__field__nom" class="form__label">Nom</label>
                    <input type="text" class="form__fiel__nom form__field">

                    <label for="form__field__mail" class="form__label">Email</label>
                    <input type="email" class="form__fiel__mail form__field">

                    <label for="form__field__message" class="form__label">Message</label>
                    <textarea name="message" id="textarea" class="form__field__message" rows="5"></textarea>

                    <button type="submit" class="modal__btn">Envoyer</button>
                </form>
            </div>
        </div>
    `;
}
export const modalDisplay = () => {
    const modalBtn = document.querySelector(".photographe__contact");
    const modal = document.querySelector(".modal__back");
    const modalAnim = document.querySelector(".modal");
    modalBtn.addEventListener("click", () => {
        modal.classList.add("modal__display");
        modalAnim.classList.remove("modal__anim__out");
        modalAnim.classList.add("modal__anim__in");
    })

    const modalClose = document.querySelector(".modal__close");
    modalClose.addEventListener("click", () => {
        modalAnim.classList.remove("modal__anim__in");
        modalAnim.classList.add("modal__anim__out");
        setTimeout(() => {
            modal.classList.remove("modal__display");
        }, 900)
    })
}