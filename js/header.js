const buttonEl = document.getElementById("button_menu");
const hamLine1El = document.getElementById("ham_line_1");
const hamLine2El = document.getElementById("ham_line_2");
const headerMenuEl = document.getElementById("header_menu");
const buttonSocialMediaEl = document.getElementById("button_social_media");
const socialMediaContainerEl = document.getElementById("social_media_container");


buttonEl.addEventListener("click", myFunction);
buttonSocialMediaEl.addEventListener("click", onSocialButtonClick);

function myFunction() {
    if (hamLine1El.classList.value.includes('close-line1')) {
        hamLine1El.classList.remove("close-line1")
        hamLine2El.classList.remove("close-line2")
        buttonEl.classList.remove("header-button-active")
        headerMenuEl.classList.remove("header-menu-active")
    } else {
        hamLine1El.classList.add("close-line1")
        hamLine2El.classList.add("close-line2")
        buttonEl.classList.add("header-button-active")
        headerMenuEl.classList.add("header-menu-active")
    }
}

function onSocialButtonClick() {
    if (socialMediaContainerEl.offsetWidth === 0) {
        if (screen.width < 750 ) {
            socialMediaContainerEl.style.width = '9rem'
        } else {
            socialMediaContainerEl.style.width = '42rem'
        }
    } else {
        socialMediaContainerEl.style.width = '0'
    }
}