/* -------- Main JavaScript File.
 ============================================================================== */

/* =====================================
   || Sidebar
   ===================================== */
let hamMenu = document.querySelector('.hamburger-menu');
let sidebar = document.querySelector('.sidebar-container');

let toggleSidebar = () => {
  if (sidebar.style.left === '-2000px') {
    sidebar.style.left = '0px';
  }
  else {
    sidebar.style.left = '-2000px';
  }
};
hamMenu.addEventListener('click', toggleSidebar);