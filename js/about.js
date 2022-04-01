let footersEl = null
let textEl = null
let animationEl = document.getElementById("tzapac_animation")
let img1El = document.getElementById("img_1")
let img2El = document.getElementById("img_2")
let img3El = document.getElementById("img_3")
let bodyEl = document.getElementsByTagName("html")[0]
let lastScrollTop = null
let scrollPerTick = 0
let mainImagesEl = null
let imageContainerEl = document.getElementById("image_container")

setTimeout(() => {
    footersEl = document.getElementsByClassName("footer-slide")
    textEl = document.getElementById("about_text")
    scrollPerTick = screen.height / 100
    mainImagesEl = document.getElementsByClassName("main-image")
    onScrollPage()
}, 1000);

function onScrollPage() {
    const heightToTrigger = screen.height - 100;
    const movement = Math.abs(bodyEl.scrollTop - lastScrollTop)

    if (footersEl) {
        for (let el of footersEl) {
            if (!el.classList.contains("slide") && el.getBoundingClientRect().top < heightToTrigger) {
                el.classList.add("slide")
            }
        }
    }

    if (textEl && !textEl.classList.contains("slide") && textEl.getBoundingClientRect().top < heightToTrigger) {
        textEl.classList.add("slide")
    }

    if (animationEl && img2El.getBoundingClientRect().top <= screen.height - img2El.offsetHeight - 100) {
        if (bodyEl.scrollTop > lastScrollTop) {
            if (img2El.getBoundingClientRect().top <= (screen.height /2) - (img2El.offsetHeight / 2)) {
                img1El.style.top = `${img2El.offsetHeight}px`
                img3El.style.top = `-${img3El.offsetHeight}px`
            } else {
                if (img1El.getBoundingClientRect().top <= img2El.getBoundingClientRect().top) {
                    img1El.style.top = `${parseInt(img1El.style.top.replace('px', '')) + movement}px`;
                }
        
                if (img3El.getBoundingClientRect().top >= img2El.getBoundingClientRect().top) {
                    img3El.style.top = `${parseInt(img3El.style.top.replace('px', '')) - movement}px`;
                }
            }            
        }
        
        if (bodyEl.scrollTop < lastScrollTop) {
            if (img2El.getBoundingClientRect().top >= (screen.height /2) - (img2El.offsetHeight / 2)) {
                if (parseInt(img1El.style.top.replace('px', '')) >= 0) {
                    img1El.style.top = `${parseInt(img1El.style.top.replace('px', '')) - movement}px`;
                } else {
                    img1El.style.top = `0px`
                }
        
                if (parseInt(img3El.style.top.replace('px', '')) <= 0) {
                    img3El.style.top = `${parseInt(img3El.style.top.replace('px', '')) + movement}px`;
                } else {
                    img3El.style.top = `0px`
                }
            }
        }
    }

    if (mainImagesEl && imageContainerEl && imageContainerEl.getBoundingClientRect().top <= screen.height - img2El.offsetHeight - 100) {
        if (bodyEl.scrollTop > lastScrollTop) {
            for (let el of mainImagesEl) {
                if (parseInt(el.style.top.replace('px', '')) <= 30) {
                    el.style.top = `${parseInt(el.style.top.replace('px', '')) + 1}px`;
                }
            }
        }
        
        if (bodyEl.scrollTop < lastScrollTop) {
            for (let el of mainImagesEl) {
                if (parseInt(el.style.top.replace('px', '')) >= 0) {
                    el.style.top = `${parseInt(el.style.top.replace('px', '')) - 1}px`;
                }
            }
        }
    }

    lastScrollTop = bodyEl.scrollTop
}