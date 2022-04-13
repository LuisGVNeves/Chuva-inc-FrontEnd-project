window.addEventListener('load', function(){

  // # funcao mostrarParagrafos ao clicar, vai aparecer os paragrafos
  mostrarParagrafos();

  // # funcao ocultarParagrafos ao clicar, vai esconder os paragrafos
  ocultarParagrafos();
})

// #  Texto ver mais
let verMais = document.querySelector('#verMais');

// # Todos os paragrafos
let paragrafos_ocultos = document.querySelector('#paragrafos-ocultos');

function mostrarParagrafos() {

  verMais.addEventListener('click', function(e){
    paragrafos_ocultos.style.display = 'block';


    // Aumentando a borda da div que tem os paragrafos, ao ser clicada
    let container_resumo = document.querySelector('#container-resumo');
    container_resumo.style.height = '650px'; 
  
    // Parando a propagação de eventos
    e.stopPropagation();
  })

}

function ocultarParagrafos(){
  // # Todos os paragrafos
  let paragrafos_resumo_noticia = document.querySelector('#paragrafos-resumo-noticia');

  // # Assim que a área da div que tem os paragrafos forem clicados, ela vai desaparecer
  paragrafos_resumo_noticia.addEventListener('click', function(e){
    paragrafos_ocultos.style.display = 'none';
  })

}











let container_resumo = document.querySelector('#container-resumo');
container_resumo.addEventListener('click', function(){
  paragrafos_ocultos = document.querySelector('#paragrafos-ocultos');
  paragrafos_ocultos.style.display = 'none';
})



