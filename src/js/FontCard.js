/*
Google Fonts Curation
Created by Mario Ferrera

Google Fonts Curation is a single-page library of hand-picked Google Fonts. 
Its purpose is to give developers and designers easy access to a list of great free fonts for their projects.

This website was created using vanilla HTML, CSS, and JavaScript! Additionally, we make use of the Google Fonts API
and custom web components to create reusable and reactive font cards for each unique font.

Credits:
https://developers.google.com/fonts
*/


const template = document.createElement('template'); //Creating template element for component.
template.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="/src/css/FontCard.css">
  <div class="wrapper">
  <div class="font-card fontCard-container grid-fontCard">
    <div class="fontCard-icon">
      <img src="/images/Font Icon_01_@0.5x.png" alt="generic font icon" width="22px">
    </div>
    <div class="fontCard-title">
      <h2></h2>
    </div>
    <div class="fontCard-open">
      <img src="/images/chevron icon.png" alt="dropdown chevron">
    </div>
    <div class="fontCard-tags">
    </div>
  </div>
  <div class="info-card infoCard-container">
    <div class="infoCard-desc">
      <h2>Description</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam vitae beatae aspernatur, aliquam minus molestias amet temporibus quo ab?</p>
    </div>
    <div class="infoCard-preview">
      <h2>Preview</h2>
      <p contenteditable>The Black, leather-bound tome seemed to emit a sinister aura. Whatever it was, it was certainly no ordinary book. Oddly enough, I found myself attracted to it; I was mesmerized by its abberant nature.</p>
    </div>
    <div class="infoCard-styles">
      <h3>Font Styles</h3>
      <hr>
        <div class="infoCard-styles-caption">
          <h5>400 (R)</h5>
          <h5>500 (M)</h5>
          <h5>600 (B)</h5>
        </div>
        <div class="infoCard-styles-font">
          <h3 class="fw-400">Font</h3>
          <h3 class="fw-500">Font</h3>
          <h3 class="fw-600">Font</h3>
        </div>
    </div>
    <div class="infoCard-link1">
      <button class="btn-primary"><i class="fa-solid fa-copy"></i> Code Link</button>
    </div>
    <div class="infoCard-link2">
      <button class="btn-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Font Page</button>
    </div>
  </div>
  </div>
`

class FontCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open', delegatesFocus: true});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    // HERE: Trying to figure out how to get font to show for each unique card's preview paragraph. Some are borked and some are not; confusing.
    let famURL = this.getAttribute('family').replace(/ /g, '+');
    let gFontsLink = `<link href="https://fonts.googleapis.com/css2?family=${famURL}:wght@400;500;600&display=swap" rel="stylesheet">`
    const api_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBlCbY4y9TxhzadqLQnO6bWE38Hua73Mb4';
    const chevronDD = this.shadowRoot.querySelector('.fontCard-open').querySelector('img');
    const descHolder = this.shadowRoot.querySelector('.infoCard-desc').querySelector('p');
    const familyHolder = this.shadowRoot.querySelector('.fontCard-title').querySelector('h2');
    const infoCard = this.shadowRoot.querySelector('.info-card');
    let attDesc = '';
    let attFamily = '';
    let attTags = '';
    let fontData = [];
    // Fetch Google Fonts Data.
    fetch(api_url)
    .then((response) => response.json())
    .then((response) => {
      fontData = response.items;
      attFamily = this.getAttribute('family');
      let fontSelect = fontData.find(({family}) => family === attFamily);
      familyHolder.innerText = fontSelect.family;
    }) .catch((error) => console.error(`ERROR: ${error}`));

    // Get 'desc' attribute value and inject it into card description.
    if (this.getAttribute('desc')) {
      attDesc = this.getAttribute('desc');
      descHolder.innerText = attDesc;
    } else {descHolder.innerText = 'No description given.'};

    // Get 'tags' attribute value and inject it into card tags.
    if (this.getAttribute('tags') != '') {
      attTags = this.getAttribute('tags');
      attTags = attTags.split(' ');
      attTags.forEach((tag) => {
        let fontTag = document.createElement('button')
        fontTag.classList.add('btn-tag')
        fontTag.innerText = tag;
        this.shadowRoot.querySelector('.fontCard-tags').appendChild(fontTag);
      })
    } else {console.log(`${this.getAttribute('family')} card contains no tags!`);}
    

    // Toggle Info Card with Event Listener.
    chevronDD.addEventListener('click', () => {
      if (infoCard.classList.contains('grid-infoCard')) {
        infoCard.classList.remove('grid-infoCard')
        chevronDD.classList.remove('active-dd')
      } else {
        infoCard.classList.add('grid-infoCard')
        chevronDD.classList.add('active-dd')
        
      }
    });
  }
  // END
}

window.customElements.define('font-card', FontCard)
