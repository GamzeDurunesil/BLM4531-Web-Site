const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const loginbuttonpopup = document.querySelector('.Loginbtnnav');
const closebutton = document.querySelector('.close');

registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');

});
loginlink.addEventListener('click', () => {
    wrapper.classList.remove('active');

});
loginbuttonpopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');

});
closebutton.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');

});

