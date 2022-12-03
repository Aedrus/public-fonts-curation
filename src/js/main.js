/* -------- Main JavaScript File.
 ============================================================================== */

/* =====================================
   || Sidebar
   ===================================== */
let hamMenu = document.querySelector('.hamburger-menu');
let sidebar = document.querySelector('.sidebar-container');


// element/variable.addEventListener('event', listener receiver());

let toggleSidebar = () => {
  if (sidebar.style.left === '-800px') {
    sidebar.style.left = '0px';
  }
  else {
    sidebar.style.left = '-800px'
  }
};

hamMenu.addEventListener('click', toggleSidebar);

/* =====================================
   || Font Card Custom Component
   ===================================== */
