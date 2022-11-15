const template = document.createElement('template'); //Creating template element for component.
template.innerHTML = `
<link rel="stylesheet" href="/src/css/FontCard.css">
  <div class="font-card fontCard-container grid-fontCard">
    <div class="fontCard-icon">
      <img src="/images/Font Icon_01_@0.5x.png" alt="generic font icon" width="22px">
    </div>
    <div class="fontCard-title">
      <h3></h3>
    </div>
    <div class="fontCard-open">
      <img src="/images/chevron icon.png" alt="dropdown chevron">
    </div>
    <div class="fontCard-tags">
      <button class="btn-tag"></button>
      <button class="btn-tag"></button>
      <button class="btn-tag"></button>
      <button class="btn-tag"></button>
    </div>
  </div>
  <div class="info-card infoCard-container grid-infoCard">
    <div class="infoCard-desc">
      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam vitae beatae aspernatur, aliquam minus molestias amet temporibus quo ab?</p>
    </div>
    <div class="infoCard-rating">
      <img src="/images/Star Icon.png" alt="star icon">
      <h4>5/5</h4>
    </div>
    <div class="infoCard-preview">
      <h3>Preview</h3>
      <p>The Black, leather-bound tome seemed to emit a sinister aura. Whatever it was, it was certainly no ordinary book. Oddly enough, I found myself attracted to it; I was mesmerized by its abberant nature.</p>
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
`

class FontCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open', delegatesFocus: true});
    let famURL = this.getAttribute('family').replace(/ /g, '+');
    const gFontsLink = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=${famURL}:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
    .infoCard-preview h4,
    .infoCard-preview p,
    .infoCard-styles-font h3 {
      font-family: '${this.getAttribute('family')}', 'public sans', sans-serif;
    }
    </style>
    `;
    this.shadowRoot.innerHTML += gFontsLink;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const api_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBlCbY4y9TxhzadqLQnO6bWE38Hua73Mb4';
    let fontData = [];
    let attFamily = '';
    let attRating = '';
    let attDesc = '';
    const familyHolder = this.shadowRoot.querySelector('.fontCard-title').querySelector('h3');
    const ratingHolder = this.shadowRoot.querySelector('.infoCard-rating').querySelector('h4');
    const descHolder = this.shadowRoot.querySelector('.infoCard-desc').querySelector('p');
    const infoCard = this.shadowRoot.querySelector('info-card');
    // HERE: Trying to get infocard to hide and show by pressing chevron.
    // if (infoCard.style.display === 'hidden') {
    //   infoCard.style.display = 'grid';
    // } else {infoCard.style.display = 'none'};
    
    // Fetch Google Fonts API Data and inject into card throughout.
    fetch(api_url)
    .then((response) => response.json())
    .then((response) => {
      fontData = response.items;
      attFamily = this.getAttribute('family');
      let fontSelect = fontData.find(({family}) => family === attFamily);
      familyHolder.innerText = fontSelect.family;
    }) .catch((error) => console.error(`ERROR: ${error}`));

    // Get rating attribute and inject it into info card.
    if (this.getAttribute('rating')) {
      attRating = this.getAttribute('rating');
      ratingHolder.innerText = `${attRating}/5`;
    } else {ratingHolder.innerText = '0/5'}

    if (this.getAttribute('desc')) {
      attDesc = this.getAttribute('desc');
      descHolder.innerText = attDesc;
    } else {descHolder.innerText = 'No description given.'}

  }
};

window.customElements.define('font-card', FontCard);
