const carrossel = document.getElementById('carrossel-imagens'); //guardando variável
const imgs = carrossel.children; // pega todos os filhos diretos de carrossel (as imagens) e guarda em imgs
const imgLargura = 516; // 500px + 16px gap
let indice = 0;

function moverCarrossel(dir) {
  indice = (indice + dir + imgs.length) % imgs.length;
  carrossel.scrollTo({ left: indice * imgLargura, behavior: 'smooth' });
}
/*
Dir é a direção desejada;
Atualiza o índice da imagem;
% imgs.length garante que o índice volte ao começo ou ao final (fica circular / loop);
scrollTo({ ... }) faz o container carrossel rolar horizontalmente;
*/

//abrir imagem do carrossel
document.querySelectorAll('.carrossel-imagens img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modal-img').src = img.src;
    document.getElementById('modal').style.display = 'flex';
  });
});

//abrir imagem na parte de fanart
document.querySelectorAll('.galeria .card img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('modal-img').src = img.src;
    document.getElementById('modal').style.display = 'flex';
  });
});

function fecharModal() { 
  document.getElementById('modal').style.display = 'none';
}
//esconde o modal quando chamado