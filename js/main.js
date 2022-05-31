//  window.addEventListener("load",function() {
//     const menuIcon = document.querySelector('.menu-icon');
//     const menu = document.querySelector('.menu');
    
//     menuIcon.addEventListener("click",showMenu);
//     function showMenu() {
//         menu.classList.add('is-show');
//     }

//     document.addEventListener('click',closeMenu);
//     function closeMenu(e) {
//         if (e.target.matches(".menu-icon") || e.target.matches(".menu, .menu *"))
//             return;
//         menu && menu.classList.remove('is-show');
//     }
//  });