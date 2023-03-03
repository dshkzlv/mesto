let editProfile = document.querySelector('.profile__edit-button');
let editPopup = document.querySelector('.popup_edit');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupClose = document.querySelector('.popup__btn-close');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let nameInput = popupForm.querySelector('.popup__input_edit_name');
let descriptionInput = popupForm.querySelector('.popup__input_edit_description');
let submitBtn = popupForm.querySelector('.popup__btn-submit');

editProfile.onclick = function closePopup() {
    popup.style.display = "block";
    nameInput.value = profileTitle.textContent;
    descriptionInput.value = profileSubtitle.textContent;
}

function closePopup() {
    popup.style.display = "none";
}

popupClose.onclick = () => {
    closePopup();
}

function displayPopup () {
    openPopup();
}

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value,
    profileSubtitle.textContent = descriptionInput.value,
    closePopup();
}

popupForm.addEventListener('submit', handleFormSubmit); 



function changeLike(num) {
    let liked = document.getElementById(`heart_${num}`);

    if(liked.className === "element__like_off") {
        liked.className = "element__like-on";
    } else {
        liked.className = "element__like-off";
    }
}