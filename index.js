const menu = document.querySelector('#menu');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  $('#sd').toggle();
  }
});
