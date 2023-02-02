/* -------- Main JavaScript File.
 ============================================================================== */

/* =====================================
   || Sidebar
   ===================================== */
const hamMenu = document.querySelector('.hamburger-menu');
const hamImg = hamMenu.querySelector('img');
const sidebar = document.querySelector('.sidebar-container');
const blanket = document.querySelector('.sidebar-blanket');

function toggleSidebar(){
  if(sidebar.classList.contains('isClosed')){
    sidebar.classList.remove('isClosed')
    blanket.classList.remove('transparent')
    hamImg.classList.remove('hamDefault')
    sidebar.classList.add('isOpen')
    blanket.classList.add('translucent');
    hamImg.classList.add('hamActive');
  }
  else {
    sidebar.classList.remove('isOpen')
    blanket.classList.remove('translucent')
    hamImg.classList.remove('hamActive')
    sidebar.classList.add('isClosed')
    blanket.classList.add('transparent');
    hamImg.classList.add('hamDefault');
  }
}
function toggleBlanket(){
  if(blanket.classList.contains('translucent')){
    blanket.classList.remove('translucent')
    hamImg.classList.remove('hamActive')
    blanket.classList.add('transparent')
    sidebar.classList.add('isClosed');
    hamImg.classList.add('hamDefault');
  }
}

hamMenu.addEventListener('click', toggleSidebar);
blanket.addEventListener('click', toggleBlanket);

/* =====================================
   || Sidebar Filter Functionality
   ===================================== */
const buttonSubmit = document.querySelector('#sidebar-submit');
const buttonReset = document.querySelector('#sidebar-reset');
let categoryInputs = document.querySelector('#sidebar-categories').querySelectorAll('input');
let ratingInputs = document.querySelector('#sidebar-ratings').querySelectorAll('input');

buttonSubmit.addEventListener('mouseup', filterCards);
function filterCards(){
  // Compare input data and return "checked" values.
  let cInputChecked = '';
  let rInputChecked = '';
  for(let i = 0; i < categoryInputs.length; i++){
    if(categoryInputs[i].checked === true){
      cInputChecked = categoryInputs[i].value;
    }
  };
  for(let i = 0; i < ratingInputs.length; i++){
    if(ratingInputs[i].checked === true){
      rInputChecked = ratingInputs[i].value;
    }
  };
  // Set fontCards to show/hide based on filter conditions.
  let fontCards = document.querySelectorAll('font-card');
  fontCards.forEach((card) => {
    if(card.getAttribute('category') != cInputChecked || card.getAttribute('rating') != rInputChecked){
      card.classList.remove('cardActive')
      card.classList.add('cardInactive');
    };
    if(card.getAttribute('category') == cInputChecked && card.getAttribute('rating') == rInputChecked){
      card.classList.remove('cardInactive')
      card.classList.add('cardActive');
    };
    if(cInputChecked == 'all' && card.getAttribute('rating') == rInputChecked){
      card.classList.remove('cardInactive')
      card.classList.add('cardActive');
    }
    if(rInputChecked == 'any' && card.getAttribute('category') == cInputChecked){
      card.classList.remove('cardInactive')
      card.classList.add('cardActive');
    }
    if(cInputChecked == 'all' && rInputChecked == 'any'){
      card.classList.remove('cardInactive')
      card.classList.add('cardActive');
    }
  });

  buttonReset.addEventListener('mouseup', resetCards);
  function resetCards(){
    let fontCards = document.querySelectorAll('font-card');
    fontCards.forEach((item) => {
      item.classList.remove('cardInactive')
      item.classList.add('cardActive');
    })
      categoryInputs[0].checked = true;
      ratingInputs[0].checked = true;
  };

}