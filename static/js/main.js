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

window.onscroll = event => {
  if (!init) {
    showL();
  }
};
