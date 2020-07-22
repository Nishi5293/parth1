
const navbtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');

navbtn.addEventListener('click', function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener("click", function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener("click", function(event){
   if(event.target === modal)
   {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
   }
});