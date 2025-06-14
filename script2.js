

/* Mads https://www.w3schools.com/jsref/met_element_getboundingclientrect.asp */
addEventListener("scroll", onScroll)

let falsk = false

function onScroll() {
    let offsets
    if (document.URL.includes("index.html") ) {
        offsets = document.getElementById('brun__boks').getBoundingClientRect();
    }
    if (document.URL.includes("produkter.html")) {
        offsets = document.getElementById('indenfor').getBoundingClientRect();
    }
    if (document.URL.includes("omproduktet.html")) {
        offsets = document.getElementById('omproduktet__ttk__knap').getBoundingClientRect();
    }
    if (window.scrollY >= offsets.bottom && falsk == false) {
        falsk = true
        produkterFremkald()
    }
    console.log("scrolling")
}

const produkterSynlighed = [
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
]

const produkterSynlighedTiming = {
  duration: 1000,
  iterations: 1,
}

function produkterFremkald() {
    let produkt = document.getElementsByClassName("produkt__wrapper")
    for (let i = 0; i < produkt.length; i++) {
        produkt[i].animate (produkterSynlighed, produkterSynlighedTiming)
    }
    opacitySetEn()
}

function opacitySetEn() {
    let produkt = document.getElementsByClassName("produkt__wrapper")
    for (let i = 0; i < produkt.length; i++) {
        produkt[i].style.opacity = 1
    }
}
