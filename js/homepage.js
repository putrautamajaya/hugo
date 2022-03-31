const dotsEl = document.getElementsByClassName("dot")
const slideContentsEl = document.getElementsByClassName("featured-content")
const enterpriseArticleEl = document.getElementById("enterprise")
const developerArticleEl = document.getElementById("developer")
const creatorArticleEl = document.getElementById("creator")
const newsArticleEl = document.getElementById("news")
const teztalksArticleEl = document.getElementById("teztalks")
const resourcesArticleEl = document.getElementById("resources")
const articlesEl = document.getElementsByClassName("article-slide")
const articlesSlideEl = Array.from(articlesEl)

let featuredIndex = 0

dotsEl[0].style.backgroundColor = "#2e2d38"
slideContentsEl[0].style.display = "block"


let articleItemWidth = document.getElementsByClassName("enterprise-count")[0].offsetWidth + 20
let articleSlideWidth = document.getElementById("article_slide_container").offsetWidth

let enterpriseSlidePosition = 0
let enterpriseItemCount = document.getElementsByClassName("enterprise-count").length

let developerSlidePosition = 0
let developerItemCount = document.getElementsByClassName("developer-count").length

let creatorSlidePosition = 0
let creatorItemCount = document.getElementsByClassName("creator-count").length

let newsSlidePosition = 0
let newsItemCount = document.getElementsByClassName("news-count").length

let teztalksSlidePosition = 0
let teztalksItemCount = document.getElementsByClassName("teztalks-count").length

let resourcesSlidePosition = 0
let resourcesItemCount = document.getElementsByClassName("resources-count").length

// footer
    let footerEl = null
    setTimeout(() => {
        footerEl = document.getElementsByClassName("footer-slide")[0]
        onScrollPage()
    }, 1000);
//---------------------------------------------------------------------

function onDotClick(dotIndex) {
    setupDisplay(dotIndex)
}

function next() {
    if (featuredIndex < slideContentsEl.length - 1) {
        featuredIndex = featuredIndex + 1
    } else if (featuredIndex === slideContentsEl.length - 1) {
        console.log('aaa')
        featuredIndex = 0
    }

    setupDisplay(featuredIndex)
}

function back() {
    if (featuredIndex === 0) {
        featuredIndex = slideContentsEl.length - 1
    } else {
        featuredIndex = featuredIndex - 1
    }

    setupDisplay(featuredIndex)
}

function setupDisplay(inputIndex) {
    for (let [index, el] of Array.from(dotsEl).entries()) {
        if (index === parseInt(inputIndex)) {
            dotsEl[index].style.backgroundColor = "#2e2d38"
            slideContentsEl[index].style.display = "block"
        } else {
            dotsEl[index].style.backgroundColor = "transparent"
            slideContentsEl[index].style.display = "none"
        }
    } 
}

function articleNext(id) {
    let totalSlideableWidth = 0
    const totalItemCanBeShown = Math.floor(articleSlideWidth / articleItemWidth)
    switch (id) {
        case 'enterprise':
            totalSlideableWidth = (enterpriseItemCount - totalItemCanBeShown) * articleItemWidth;
            if (enterpriseSlidePosition > 0 - totalSlideableWidth) {
                enterpriseSlidePosition = enterpriseSlidePosition - articleItemWidth
                enterpriseArticleEl.style.left = enterpriseSlidePosition + 'px'
            }
            break;

        case 'developer':
            totalSlideableWidth = (developerItemCount - totalItemCanBeShown) * articleItemWidth;
            if (developerSlidePosition > 0 - totalSlideableWidth) {
                developerSlidePosition = developerSlidePosition - articleItemWidth
                developerArticleEl.style.left = developerSlidePosition + 'px'
            }
            break;

        case 'creator':
            totalSlideableWidth = (creatorItemCount - totalItemCanBeShown) * articleItemWidth;
            if (creatorSlidePosition > 0 - totalSlideableWidth) {
                creatorSlidePosition = creatorSlidePosition - articleItemWidth
                creatorArticleEl.style.left = creatorSlidePosition + 'px'
            }
            break;

        case 'news':
            totalSlideableWidth = (newsItemCount - totalItemCanBeShown) * articleItemWidth;
            if (newsSlidePosition > 0 - totalSlideableWidth) {
                newsSlidePosition = newsSlidePosition - articleItemWidth
                newsArticleEl.style.left = newsSlidePosition + 'px'
            }
            break;

        case 'teztalks':
            totalSlideableWidth = (teztalksItemCount - totalItemCanBeShown) * articleItemWidth;
            if (teztalksSlidePosition > 0 - totalSlideableWidth) {
                teztalksSlidePosition = teztalksSlidePosition - articleItemWidth
                teztalksArticleEl.style.left = teztalksSlidePosition + 'px'
            }
            break;

        case 'resources':
            totalSlideableWidth = (resourcesItemCount - totalItemCanBeShown) * articleItemWidth;
            if (resourcesSlidePosition > 0 - totalSlideableWidth) {
                resourcesSlidePosition = resourcesSlidePosition - articleItemWidth
                resourcesArticleEl.style.left = resourcesSlidePosition + 'px'
            }
            break;
    
        default:
            break;
    }
}

function articleBack(id) {
    switch (id) {
        case 'enterprise':
            if (enterpriseSlidePosition < 0) {
                enterpriseSlidePosition = enterpriseSlidePosition + articleItemWidth
                enterpriseArticleEl.style.left = enterpriseSlidePosition + 'px'
            }
            break;

        case 'developer':
            if (developerSlidePosition < 0) {
                developerSlidePosition = developerSlidePosition + articleItemWidth
                developerArticleEl.style.left = developerSlidePosition + 'px'
            }
            break;

        case 'creator':
            if (creatorSlidePosition < 0) {
                creatorSlidePosition = creatorSlidePosition + articleItemWidth
                creatorArticleEl.style.left = creatorSlidePosition + 'px'
            }
            break;

        case 'news':
            if (newsSlidePosition < 0) {
                newsSlidePosition = newsSlidePosition + articleItemWidth
                newsArticleEl.style.left = newsSlidePosition + 'px'
            }
            break;

        case 'teztalks':
            if (teztalksSlidePosition < 0) {
                teztalksSlidePosition = teztalksSlidePosition + articleItemWidth
                teztalksArticleEl.style.left = teztalksSlidePosition + 'px'
            }
            break;

        case 'resources':
            if (resourcesSlidePosition < 0) {
                resourcesSlidePosition = resourcesSlidePosition + articleItemWidth
                resourcesArticleEl.style.left = resourcesSlidePosition + 'px'
            }
            break;

        default:
            break;
    }
}

function onWidthChange() {
    if (screen.width > 750) {
        articleItemWidth = document.getElementsByClassName("enterprise-count")[0].offsetWidth + 40
    } else {
        articleItemWidth = document.getElementsByClassName("enterprise-count")[0].offsetWidth + 20
    }
    articleSlideWidth = document.getElementById("article_slide_container").offsetWidth
    enterpriseSlidePosition = 0
    enterpriseArticleEl.style.left = 0

    developerSlidePosition = 0
    developerArticleEl.style.left = 0

    creatorSlidePosition = 0
    creatorArticleEl.style.left = 0

    newsSlidePosition = 0
    newsArticleEl.style.left = 0

    teztalksSlidePosition = 0
    teztalksArticleEl.style.left = 0

    resourcesSlidePosition = 0
    resourcesArticleEl.style.left = 0
}

function onScrollPage() {
    console.log('b')
    const heightToTrigger = screen.height - 350;

    for (let el of articlesSlideEl) {
        if (!el.classList.contains("slide") && el.getBoundingClientRect().top < heightToTrigger) {
            el.classList.add("slide")
        }
    }

    // footer
    if (footerEl && !footerEl.classList.contains("slide") && footerEl.getBoundingClientRect().top < heightToTrigger) {
        footerEl.classList.add("slide")
    }
    //---------------------------------------------------------------------
}