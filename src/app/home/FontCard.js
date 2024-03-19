/*
Public Font Curation
Created by Mario Ferrera

Public Font Curation is a single-page library of hand-picked Google Fonts—and others. 
Its purpose is to give developers and designers easy access to a list of great free fonts for their projects.

This website was created using only vanilla HTML, CSS, and JavaScript! 

Credits:
https://developers.google.com/fonts
*/

const template = document.createElement('template');
template.innerHTML = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="src/css/FontCard.css">
  <div class="wrapper">
  <div class="font-card fontCard-container grid-fontCard">
    <div class="fontCard-icon">
      <img src="images/Font Icon_01_@0.5x.png" alt="brand font icon" width="23px">
    </div>
    <div class="fontCard-title">
      <img alt="font card title">
    </div>
    <div class="fontCard-tags">
      <div class="fontCard-tags-main"></div>
    </div>
    <div class="fontCard-open">
      <span tabindex="0">
        <img src="images/Chevron Icon.png" alt="dropdown chevron icon">
      </span>
    </div>
  </div>
  <div class="info-card infoCard-container">
    <div class="infoCard-body">
      <div class="infoCard-desc">
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem numquam vitae beatae aspernatur, aliquam minus molestias amet temporibus quo ab?</p>
      </div>
      <div class="infoCard-info">
          <h2>Information</h2>
          <table class="info-table">
              <tr>
                <td class="info-table-header">License</td>
                <td class="info-table-body license">Open-Source</td>
              </tr>
              <tr>
                <td class="info-table-header">Source</td>
                <td class="info-table-body source">Google Fonts</td>
              </tr>
              <tr>
                <td class="info-table-header">Category</td>
                <td class="info-table-body category">Serif</td>
              </tr>
              <tr>
                <td class="info-table-header">Rating</td>
                <td class="info-table-body rating"><img src="./images/Star Rating_3.png" alt="star rating of three out of five" width="90px"></td>
              </tr>
          </table>
        </div>
        <div class="infoCard-link1">
        <a href="" target="_blank" title="Font Page"><button class="btn-primary">Font Page</button></a>
        </div>
      </div>
    </div>
  </div>
`
//Creates new HTML Element called FontCard and attaches a shadow root to each instance of FontCard.
class FontCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open', delegatesFocus: true});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  
  connectedCallback() {
    let famURL = this.getAttribute('family').replace(/ /g, '+');
    let gFontsLink = `<link href="https://fonts.googleapis.com/css2?family=${famURL}:wght@400;500;600&display=swap" rel="stylesheet">`
    const api_url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBlCbY4y9TxhzadqLQnO6bWE38Hua73Mb4';
    const chevronDD = this.shadowRoot.querySelector('.fontCard-open').querySelector('span');
    const infoCard = this.shadowRoot.querySelector('.info-card');
    const fontCard = this.shadowRoot.querySelector('.font-card');
    const familyHolder = this.shadowRoot.querySelector('.fontCard-title').querySelector('img');
    const tagsHolder = this.shadowRoot.querySelector('.fontCard-tags');
    const tagsMainHolder = this.shadowRoot.querySelector('.fontCard-tags').querySelector('.fontCard-tags-main');
    const descHolder = this.shadowRoot.querySelector('.infoCard-desc').querySelector('p');
    const linkHolder = this.shadowRoot.querySelector('.infoCard-link1').querySelector('a');
    const licenseHolder = this.shadowRoot.querySelector('.info-table').querySelector('.license');
    const sourceHolder = this.shadowRoot.querySelector('.info-table').querySelector('.source');
    const categoryHolder = this.shadowRoot.querySelector('.info-table').querySelector('.category');
    const ratingHolder = this.shadowRoot.querySelector('.info-table').querySelector('.rating').querySelector('img');
    let attFamily = '';
    let attTags = '';
    let attLink = '';
    let attDesc = '';
    let attLicense = '';
    let attSource = '';
    let attCategory = '';
    let attRating = '';
    // Fetch Google Fonts Data. Deprecated.
    // fetch(api_url)
    // .then((response) => response.json())
    // .then((response) => {
    //   fontData = response.items;
    //   attFamily = this.getAttribute('family');
    //   let fontSelect = fontData.find(({family}) => family === attFamily);
    //   familyHolder.innerText = fontSelect.family;
    // }) .catch((error) => console.error(`ERROR: ${error}`));

    // Get 'family' attribute value and inject it into card title as image. 
    if(this.getAttribute('family')) {
      attFamily = this.getAttribute('family');
      familyHolder.setAttribute('src', `./images/font/webp/${attFamily}.webp`)
    };

    // Get 'tags' attribute values and inject them into card.
    if(this.getAttribute('tags') != '') {
      attTags = this.getAttribute('tags');
      attTags = attTags.split(' ');
        attTags.forEach((item) => {
          let tag = document.createElement('span');
          switch (item){
            case 'sans-serif':
              tag.classList.add('tag-sans')
              break;
            case 'serif':
              tag.classList.add('tag-serif')
              break;
            default:
              tag.classList.add('tag')
          }
          tag.innerText = item;
          if(tagsMainHolder.childElementCount < 3){
            tagsMainHolder.appendChild(tag);
          }
        });
     
      } else {console.log(`${this.getAttribute('family')} card contains no tags!`);
    };

    // Create tooltip for font card with 4+ tags
    let ttToggle = document.createElement('div');
    ttToggle.classList.add('tooltip-toggle');
    let ttToggleSymbol = document.createElement('p');
    // ttToggleSymbol.setAttribute('tabindex', '0');
    ttToggleSymbol.innerText = '...'
    ttToggle.appendChild(ttToggleSymbol);

    let tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    attTags.forEach((item) => {
      let ttTag = document.createElement('span')
      switch (item){
        case 'sans-serif': 
          ttTag.classList.add('tag-sans')
          break;
        case 'serif': 
          ttTag.classList.add('tag-serif')
          break;
        default:
          ttTag.classList.add('tag')
      }
      ttTag.innerText = item;
      tooltip.appendChild(ttTag);
    });

    setTimeout(() => {
      ttToggle.appendChild(tooltip);
    }, 1000);

    if(attTags.length > 3){
      tagsHolder.appendChild(ttToggle)
    }

    // Get 'link' attribute value and inject it into card links.
    if (this.getAttribute('link')) {
      attLink = this.getAttribute('link');
      linkHolder.setAttribute('href', attLink);
    } else {console.log(`No link provided for ${this.getAttribute('family')}`)};

    // Get 'desc' attribute value and inject it into card description.
    if (this.getAttribute('desc')) {
      attDesc = this.getAttribute('desc');
      descHolder.innerText = attDesc;
    } else {descHolder.innerText = 'No description given.'};

    // Get 'license' attribute value and inject it into card table.
    if(this.getAttribute('license')){
      attLicense = this.getAttribute('license');
      licenseHolder.innerText = attLicense;
    } else {console.log(`No license attribute for ${this.getAttribute('family')}`);}

    // Get 'source' attribute value and inject it into card table.
    if(this.getAttribute('source')){
      attSource = this.getAttribute('source');
      sourceHolder.innerText = attSource;
    } else {console.log(`No source attribute for ${this.getAttribute('family')}`);}

    // Get 'category' attribute value and inject it into card table.
    if(this.getAttribute('category')){
      attCategory = this.getAttribute('category');
      // Converts first letter of string to uppercase.
      let textOne = attCategory.substring(0, 1);
      let textTwo = attCategory.substring(1);
      let textFinal = textOne.toUpperCase().concat(textTwo);
      categoryHolder.innerText = textFinal;
    } else {console.log(`No category attribute for ${this.getAttribute('family')}`);}

    // Get 'rating' attribute value and inject it into card table.
    if(this.getAttribute('rating')){
      attRating = this.getAttribute('rating');
      ratingHolder.setAttribute('src', `./images/Star Rating_${attRating}.png`);
    } else {console.log(`No category attribute for ${this.getAttribute('family')}`);}

    // Toggle Info Card with Event Listener.
    fontCard.addEventListener('click', () => {
      if (infoCard.classList.contains('active-infoCard')) {
        infoCard.classList.remove('active-infoCard')
        chevronDD.classList.remove('active-dd')
      } else {
        infoCard.classList.add('active-infoCard')
        chevronDD.classList.add('active-dd')
      }
    });
    
    // Reset dropdown when user clicks on "filter" and "Reset" button.
    let fontCardAll = document.querySelectorAll('font-card');
    const buttonSubmit = document.querySelector('#sidebar-submit');
    const buttonReset = document.querySelector('#sidebar-reset');

    function ddReset(){
      fontCardAll.forEach((card) => {
            infoCard.classList.remove('active-infoCard')
            chevronDD.classList.remove('active-dd');
      });
    }
    buttonSubmit.addEventListener('click', ddReset);
    buttonReset.addEventListener('click', ddReset);
  }
  // END
}

window.customElements.define('font-card', FontCard)
