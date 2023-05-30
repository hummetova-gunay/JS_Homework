let nav=document.querySelector('nav')
let menuIcon=document.querySelector('.menu-icon')
let  ul=document.querySelector('ul')
menuIcon.addEventListener('click',function(){
    nav.classList.toggle('new-nav')
    ul.classList.add('new-ul')
})
// const darkModeIcon = document.querySelector('.dark-mode');
// const isDarkMode = localStorage.getItem('darkMode') === 'true';
// if (isDarkMode) {
//   document.body.classList.add('dark-mode');
// }
// darkModeIcon.addEventListener('click', function() {
//   const isDarkMode = document.body.classList.contains('dark-mode');
//   if (isDarkMode) {
//     document.body.classList.remove('body-darkmode');
//     localStorage.setItem('darkMode', 'false');
//   } else {
//     document.body.classList.add('body-darkmode');
//     localStorage.setItem('darkMode', 'true');
//   }
// });
const darkModeIcon = document.querySelector('.dark-mode');
const prefersDarkMode = localStorage.getItem('darkMode') === 'true';
if (prefersDarkMode) {
  document.body.classList.add('dark-mode');
}
darkModeIcon.addEventListener('click', function() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  } else {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  }
});
