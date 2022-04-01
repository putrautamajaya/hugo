let url = window.location.href.split('/')
url.pop()
url = url.pop()

const titleEl = document.getElementById("title")
const subtitleEl = document.getElementById("subtitle")
const articlesEl = document.getElementsByClassName("item-article")


// footer
let footerEl = null
setTimeout(() => {
    footerEl = document.getElementsByClassName("footer-slide")[0]
    onScrollPage()
}, 1000);
//---------------------------------------------------------------------

if (window.location.href.includes('content-hub')) {
    const el = document.getElementById('all')
    el.style.borderBottom = '2px solid white'
}

if (window.location.href.includes('enterprise')) {
    const el = document.getElementById('enterprise')
    if (el) el.style.borderBottom = '2px solid white'
    titleEl.innerHTML = "Enterprise"
    subtitleEl.innerHTML = "Discover a range of stories and resources for enterprises considering adopting Tezos, read success stories, and learn more about how Tezos can help your business."
}

if (window.location.href.includes('developer')) {
    const el = document.getElementById('developer')
    el.style.borderBottom = '2px solid white'
    titleEl.innerHTML = "Developer"
    subtitleEl.innerHTML = "Take a deep dive on Tezos. Learn what it will take to get your blockchain project to the next level,  and read the stories of fellow developers from across Asia Pacific doing the same."
}

if (window.location.href.includes('creator')) {
    const el = document.getElementById('creator')
    el.style.borderBottom = '2px solid white'
    titleEl.innerHTML = "Creator"
    subtitleEl.innerHTML = "Discover how blockchain technology is taking the arts, gaming, and sports worlds by storm. Hear from creators and inspiring innovators embracing NFTs, the metaverse and more."
}

if (window.location.href.includes('news')) {
    const el = document.getElementById('news')
    el.style.borderBottom = '2px solid white'
    titleEl.innerHTML = "News"
    subtitleEl.innerHTML = "Get the latest news on Tezos projects, announcements, events, and innovations from across the region and worldwide."
}

if (window.location.href.includes('teztalks')) {
    const el = document.getElementById('teztalks')
    el.style.borderBottom = '2px solid white'
    titleEl.innerHTML = "Teztalks"
    subtitleEl.innerHTML = "Twice monthly, we bring inspiring insights and stories from the top thinkers, creators and developers in the Tezos ecosystem. Tune in online or wherever you catch your podcasts."
}

if (window.location.href.includes('resources')) {
    const el = document.getElementById('resources')
    el.style.borderBottom = '2px solid white'
    titleEl.innerHTML = "Resources"
    subtitleEl.innerHTML = "Twice monthly, we bring inspiring insights and stories from the top thinkers, creators and developers in the Tezos ecosystem. Tune in online or wherever you catch your podcasts."
}

if (window.location.href.includes('search')) {
    const params = (new URL(document.location)).searchParams;
    const query = params.get("query").toLowerCase();
    let remove = []

    console.log(articlesEl)

    for (let el of articlesEl) {
        if (!el.lastElementChild.innerText.toLowerCase().includes(query.toString())) {
            remove.push(el)
        }
    }

    for (let el of remove) {
        el.remove()
    }
}

function onScrollPage() {
    const heightToTrigger = screen.height - 100;

    for (let el of articlesEl) {
        if (!el.classList.contains("slide") && el.getBoundingClientRect().top < heightToTrigger) {
            el.classList.add("slide")
        }
    }

    // footer
    if (footerEl && !footerEl.classList.contains("slide") && footerEl.getBoundingClientRect().top < heightToTrigger) {
        footerEl.classList.add("slide")
    }
    //---------------------------------------------------------------------

    if (screen.width > 1000) {
        for (let [i, el] of Array.from(articlesEl).entries()) {
            if (i % 2 === 1) {
                el.style.marginTop = '8rem'
            }
        }
    }
}

function onSearch() {
    const el = document.getElementById("input_search")

    if (el.value !== '') {
        window.location.href = '/search?query=' + el.value;
    }
}