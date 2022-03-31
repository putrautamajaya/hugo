let footersEl = null
let iframeEl = null
let resourceEl = null
const storage = localStorage.getItem('resource')

setTimeout(() => {
    footersEl = document.getElementsByClassName("footerBlack-slide")
    iframeEl = document.getElementsByTagName("iframe")[0]
    resourceEl = document.getElementById("resource")

    if (footersEl) {
        onScrollPage()
    }

    if (storage.includes(resourceEl.innerText)) {
        const el = document.getElementsByTagName('form')[0]
        el.style.display = 'none'
    
        const downloadEl = document.getElementById('download_pdf')
        downloadEl.style.display = 'flex'
    }    
}, 1000);


function onScrollPage() {
    const heightToTrigger = screen.height - 100;
    // footer
    if (footersEl) {
        for (let el of Array.from(footersEl)) {
            if (el && !el.classList.contains("slide") && el.getBoundingClientRect().top < heightToTrigger) {
                el.classList.add("slide")
            }
        }
    }
    //---------------------------------------------------------------------
}

function submitForm() {
    console.log(resourceEl.innerText)
    if (storage) {
        localStorage.setItem('resource', storage + ', ' + resourceEl.innerText)
    } else {
        localStorage.setItem('resource', resourceEl.innerText)
    }
}