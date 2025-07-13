const carrossel = document.getElementById('carrossel-imagens');
const imgs = carrossel.children;
const imgLargura = 516; // 500px + 16px gap
let indice = 0;

function moverCarrossel(dir) {
  indice = (indice + dir + imgs.length) % imgs.length;
  carrossel.scrollTo({ left: indice * imgLargura, behavior: 'smooth' });
}

document.querySelectorAll('.carrossel-imagens img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modal-img').src = img.src;
    document.getElementById('modal').style.display = 'flex';
  });
});

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
}
