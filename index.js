const btnShare = document.getElementById('btn-share');
const elShare = document.getElementById('article-share');

btnShare.addEventListener('click', () => {
  elShare.classList.toggle('active');
})
