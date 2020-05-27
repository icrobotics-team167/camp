let init = false;
let eHeadText;
function activate() {
  if (init) return;
  init = true;
  document.getElementById('wrapper').classList.add('active');
  const eHead = document.getElementById('header-text');
  while (eHead.firstChild) eHead.firstChild.remove();
  eHeadText = document.createElement('div');
  eHeadText.setAttribute('id', 'header-text-only');
  eHead.appendChild(eHeadText);
}

const eNavLeft = document.getElementById('nav-left');
const eNavRight = document.getElementById('nav-right');
const eSwapper = document.getElementById('swap-wrapper');
const ePageLeft = document.getElementById('page-left');
const ePageRight = document.getElementById('page-right');
function showL() {
  activate();
  eHeadText.innerHTML = 'LEGO\u00ae Robotics';
  eNavLeft.classList.remove('active');
  eNavRight.classList.add('active');
  eSwapper.style.left = '0';
  ePageRight.classList.remove('active');
  ePageLeft.classList.add('active');
}

function showR() {
  activate();
  eHeadText.innerText = 'Python Programming';
  eNavLeft.classList.add('active');
  eNavRight.classList.remove('active');
  eSwapper.style.left = '-100vw';
  ePageLeft.classList.remove('active');
  ePageRight.classList.add('active');
}

document.getElementById('header-left').onclick = showL;
document.getElementById('nav-left').onclick = showL;
document.getElementById('header-right').onclick = showR;
document.getElementById('nav-right').onclick = showR;

window.onwheel = event => {
  if (!init && event.deltaY > 0) {
    showL();
  }
};

// Detect gestures on mobile since window.onwheel doesn't work
const wrapper = document.getElementById('wrapper');
let touchStartX = 0;
let touchStartY = 0;
let touchEndX = 0;
let touchEndY = 0;

wrapper.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].screenX;
  touchStartY = event.changedTouches[0].screenY;
}, false);
wrapper.addEventListener('touchend', event => {
  touchEndX = event.changedTouches[0].screenX;
  touchEndY = event.changedTouches[0].screenY;
  handleGesture();
}, false);

const {width, height} = wrapper.getBoundingClientRect();
function handleGesture() {
  const deltaX = touchEndX - touchStartX;
  const deltaY = touchEndY - touchStartY;
  const ratioX = deltaX / width;
  const ratioY = deltaY / height;

  if (deltaX > deltaY && ratioX > 0.1 && !init) { // Right
    showL();
  } else if (deltaY > deltaX && ratioY > 0.1) { // Down
  } else if (deltaX < deltaY && ratioX < -0.1 && !init) { // Left
    showR();
  } else if (deltaY < deltaX && ratioY < -0.1 && !init) { // Up
    showL()
  }
}

document.getElementById('copyright').innerHTML = `© ${new Date().getFullYear()} Iowa City Robotics`;
alert('Attention!\n\nJunior Bots 2020 has been canceled due to the COVID-19 pandemic. Scroll down to join our email list for next year!');
