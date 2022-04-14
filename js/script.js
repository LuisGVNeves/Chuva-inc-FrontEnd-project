window.addEventListener('load', function(){

  // # funcao mostrarParagrafos ao clicar, vai aparecer os paragrafos
  mostrarParagrafos();

  // # funcao ocultarParagrafos ao clicar, vai esconder os paragrafos
  ocultarParagrafos();

  // # Função de adicionar divs, ao clicar no botão criar tópico
  adicionarDiv();
})

// #  Texto ver mais
let verMais = document.querySelector('#verMais');

// # Todos os paragrafos
let paragrafos_ocultos = document.querySelector('#paragrafos-ocultos');

function mostrarParagrafos() {

  /*
    Palavra ver mais recebe um escutador, ao ser clicada, vai revelar 
    os paragrafos ocultos
  */
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

  // Diminuindo a borda da div que tem os paragrafos, ao ser clicada
  let container_resumo = document.querySelector('#container-resumo');
  container_resumo.style.height = '200px'; 

  
}


// Função para adicionar a div ao botão criar Topico ser clicado

/*
  - Objetivo: Adicionar uma <ul> toda vez que o botão criar tópico
  for clicado, fazer desaparecer a area de fotos em discussões, e 
  surgir uma div editavel, pro usuario digitar.
  - Quando usuário digitar, deve ir pro <li> que mostra o que o usuário digitou
  - Assim que ele apertar enviar, o botão de enviar novo topico deve surgir
  - e ao mesmo tempo essa <ul> com <li> dentro deve ficar embaixo da outra div
*/

function adicionarDiv(){
  let btn_criar_topico = document.getElementById('btn-criar-topico');

  btn_criar_topico.addEventListener('click', function(e){

    // Area que precisa desaparecer quando botão de criar tópico for criado
    let compartilhe_ideias = document.querySelector("#compartilhe-ideias");
    let imagens_autores = document.querySelector("#imagens-autores");
    let paragrafo_discussao = document.querySelector("#paragrafo-discussao");

    // Desaparecendo com a área
    compartilhe_ideias.style.display = 'none';
    imagens_autores.style.display = 'none';
    paragrafo_discussao.style.display = 'none';
    btn_criar_topico.style.display = 'none';


    // # Áreas que precisam aparecer
    
    // Esse container vai servir apenas para colocar as tags criadas
    let discussoes_container = document.querySelector('#discussoes-container');

    // Container das respostas que vão sendo criadas precisam ficar rebaixado
    let container_divs = document.querySelector('#container-divs');
    container_divs.style.marginTop = '25%';

    // Paragrafo adicionado
    let p = document.createElement('p');
    p.innerText = 'Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!';
    p.style.position = 'absolute';
    p.style.marginTop = '3%';
    discussoes_container.appendChild(p);

    // H3 Assunto adicionado
    let h3 = document.createElement('h3');
    h3.innerText = 'Assunto';
    h3.style.position = 'absolute';
    h3.style.marginTop = '5%';
    h3.style.marginLeft = '-61%';
    h3.style.color = '#ED7839';
    discussoes_container.appendChild(h3);


    // SPAN sobre assunto a ser enviado
    let spanAssunto = document.createElement('span');
    spanAssunto.style.width = '1090px';
    spanAssunto.style.height = '39px';
    spanAssunto.style.border = '1px solid #CCC';
    spanAssunto.style.marginTop = '7%';
    spanAssunto.style.position = 'absolute';
    spanAssunto.innerText = 'Defina um tópico para notificas os autores..';
    spanAssunto.style.color = "#4D4D4D";
    spanAssunto.contentEditable = 'true';
    spanAssunto.style.textAlign = 'start';
    spanAssunto.style.lineHeight = '39px';
    spanAssunto.style.fontWeight = '500';
    spanAssunto.style.fontSize = '14px';
    spanAssunto.style.paddingLeft = '22px';
    discussoes_container.appendChild(spanAssunto);

    // H3 Palavra escrita conteudo adicionado
    let h3_conteudo = document.createElement('h3');
    h3_conteudo.innerText = 'Conteúdo';
    h3_conteudo.style.position = 'absolute';
    h3_conteudo.style.marginTop = '10.2%';
    h3_conteudo.style.marginLeft = '-61%';
    h3_conteudo.style.color = '#ED7839';
    discussoes_container.appendChild(h3_conteudo);

    // SPAN sobre assunto {Input} a ser enviado
    let spanConteudo = document.createElement('span');
    spanConteudo.style.width = '1090px';
    spanConteudo.style.height = '113px';
    spanConteudo.style.border = '1px solid #CCC';
    spanConteudo.style.marginTop = '12%';
    spanConteudo.style.position = 'absolute';
    spanConteudo.style.color = '#4D4D4D';
    spanConteudo.contentEditable = 'true';
    spanConteudo.style.textAlign = 'start';
    spanConteudo.style.lineHeight = '39px';
    spanConteudo.style.fontWeight = '500';
    spanConteudo.style.fontSize = '14px';
    spanConteudo.style.paddingLeft = '22px';
    // Remover borda do input quando clicado
    spanConteudo.style.outline = '0px';

      // Criando span pra acoplar as imagens B de bold
      let bSpan = document.createElement('span');
      
      // Tag <img> que vai receber a imagem de bold
      let imgBold = document.createElement('img');
      imgBold.setAttribute('src','/img/bold.png')

      // Adicionando a tag <imgBold> que já tem a imagem bold, dentro da tag span
      bSpan.appendChild(imgBold)

      // # Setei o background de span e alinhei ele pra ficar certinho dentro do discussões container
      bSpan.style.background = '#EAF1F2';
      bSpan.style.marginTop = '16.8%';
      bSpan.style.position = 'absolute';
      bSpan.style.left = '27.6%';
      bSpan.style.width = '884.9px';
      bSpan.style.height = '31px';
      bSpan.style.lineHeight = '36px';
      
      /*
      - Alinhei a imagem bold pra ficar no lado esquerdo e coloquei um escutador para que 
      quando fosse clicado, o texto do input ficasse bold
      */
     imgBold.style.marginLeft = '-780px';
     imgBold.style.cursor = 'pointer';
     imgBold.style.paddingRight = '3%'
      imgBold.addEventListener('click', function(){
        spanConteudo.style.fontWeight = 'bold';
      })

      
      
      
      // Vou adicionar agora a <img> italico
      let imgItalico = document.createElement('img');
      imgItalico.setAttribute('src','/img/italic.png')
      
      // Adicionando a tag <imgItalico> que já tem a imagem italico, dentro da tag span
      bSpan.appendChild(imgItalico);

      // Adicionando efeito de cursor no italic
      imgItalico.style.cursor = 'pointer';

      // # Fazer o mesmo processo de escutar a tag italico e adicionar efeito italico
      imgItalico.addEventListener('click', function(){
        spanConteudo.style.fontStyle = 'italic';
      })


    // Adicionei o {input} que o usuário vai digitar dentro do container  
    discussoes_container.appendChild(spanConteudo);
    
    // Adicionei a tag <span> que contém <img Bold e Italic> dentro do discussões container
    discussoes_container.appendChild(bSpan);



    // Criação do botão para enviar o tópico
    let buttonEnviarTopico = document.createElement('button');
    buttonEnviarTopico.innerText = 'Enviar';
    buttonEnviarTopico.style.textAlign = 'center';
    buttonEnviarTopico.style.background = 'linear-gradient(#FEB154, #F1833E)';
    buttonEnviarTopico.style.position = 'absolute';
    buttonEnviarTopico.style.top = '135%';
    buttonEnviarTopico.style.left = '80.7%';
    buttonEnviarTopico.style.width = '205px';
    buttonEnviarTopico.style.height = '31px';
    buttonEnviarTopico.style.border = 'none';
    buttonEnviarTopico.style.color = '#FFF';
    buttonEnviarTopico.style.backgroundHover = '#000';
    buttonEnviarTopico.style.cursor = 'pointer';

    discussoes_container.appendChild(buttonEnviarTopico);
  

    // # Ao clicar no botão de enviar, os elementos precisam ser criados
    buttonEnviarTopico.addEventListener('click', function(e){
      let contadorClick = e.target.value;

      for(let i=0; i <= contadorClick; i++){
        // A cada clique do botão enviar, vai ser criado a estrutura

        // # Criação do <ul>
        let ul = document.createElement('ul');

        // # Adicionando a classe ul na tag <ul> para pegar a estilização
        ul.classList.add('ul');

        // # Criando <li> pra guardar o titulo do assunto do usuário
        let li_Assunto = document.createElement('li');


        // # Adicionando id #assunto-pergunta 
        li_Assunto.id = 'assunto-pergunta';
        

        // # Guardando o valor do input do usuário dentro da minha li
        li_Assunto.innerText += spanAssunto.innerText; 


        // # Criando <li> para guardar o autor da mensagem
        let li_autor = document.createElement('li');
        li_autor.id = 'autor';
        /*
          Como eu não tenho um campo para o valor do autor do texto, vou criar um autor aleatorio
          com a biblioteca matematica
        */
        li_autor.innerHTML += `UsuarioAnonimo ${Math.floor(Math.random() * 100)}`;
        


        // # Criando <li> para colocar o comecinho da pergunta
        let li_comecinhoPergunta = document.createElement('li');

        // ID que vai ficar o comecinho da pergunta
        let comecinho_Pergunta = document.querySelector('#comecinho-Pergunta');

        // Limpando comecinho_Pergunta
        comecinho_Pergunta.innerText = '';

        // Vou colocar o começo do assunto que o usuário escreve
        comecinho_Pergunta.innerText += spanConteudo.innerText;


        // Agora vou adicionar na tag <li>
        li_comecinhoPergunta.append(comecinho_Pergunta);


        // Montando toda a estrutura 
        ul.appendChild(li_Assunto);
        ul.appendChild(li_autor);
        ul.appendChild(li_comecinhoPergunta);

        console.log(ul);
       
      }

    })
  
  



  })
  
}

/*

  <li>
    <p>Comecinho da pergunta aparece aqui resente relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo...</p>
  </li>

  <li>
    <ul id="likes-respostas">
      <li><img src="./img/list.png" alt="list icon" id="list-icon"></li>
      <li><img src="./img/heart.png" alt="heart icon"></li>
      <li>1 like</li>
      <li>1 resposta</li>
    </ul>
  </li>

*/








