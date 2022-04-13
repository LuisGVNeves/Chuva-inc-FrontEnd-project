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


    // # Descendo a div Discussões quando o paragrafo diminuir
    let discussoes_container = document.querySelector('#discussoes-container');
    discussoes_container.style.top = '160%';
  

    /*
      - Ao clicar na frase "ver mais", a div é esticada porém come toda a div
      que contém os likes e respostas do usuário, então preciso ajustar a altura
    */
    let container_divs = document.querySelector('#container-divs');
    container_divs.style.top = '193%'


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

  // Diminuindo a borda da div que tem os paragrafos, ao ser clicada
  let container_resumo = document.querySelector('#container-resumo');
  container_resumo.style.height = '200px'; 


  // # Subindo a div Discussões quando o paragrafo diminuir
  let discussoes_container = document.querySelector('#discussoes-container');
  discussoes_container.style.top = '110%';


    /*
      - Ao clicar na frase "ver mais", a div é esticada porém come toda a div
      que contém os likes e respostas do usuário, então preciso ajustar a altura
    
      - Dessa vez, quando a div recolhe, o container de divs que tem os likes e respostas
      dos usuários, fica lá embaixo, então preciso subir
  */
  let container_divs = document.querySelector('#container-divs');
  container_divs.style.top = '143%'

}











let container_resumo = document.querySelector('#container-resumo');
container_resumo.addEventListener('click', function(){
  paragrafos_ocultos = document.querySelector('#paragrafos-ocultos');
  paragrafos_ocultos.style.display = 'none';
})



