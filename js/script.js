// Variáveis globais


// Container das respostas que vão sendo criadas precisam ficar rebaixado
let container_divs = document.querySelector('#container-divs');

// Container que guarda "Seu topico foi enviado com sucesso" 
let topico_enviado_container = document.querySelector('#topico-enviado-container');

// Feedback que aparece após enviar tópico
let aguardo_feedback = document.getElementById('aguardo-feedback');


/*
  Toda vez que o browser carregar, ele vai chamar essas três funções, caso elas
  sejam invocadas, e vai "ocultar" o feedback que é gerado quando o usuário
  aperta no botão de enviar Tópico.
  - Essa funcionalidade de ocultar tópico está aqui, por que toda vez que o HTML
  carregava, como esse elemento está com posição absolute, ele ficava no meio da tela
  atrapalhando o layout, então eu ocultei ele ao carregar o HTML;
*/
window.addEventListener('load', function(){
  // # funcao mostrarParagrafos ao clicar, vai aparecer os paragrafos
  mostrarParagrafos();

  // # funcao ocultarParagrafos ao clicar, vai esconder os paragrafos
  ocultarParagrafos();

  // # Função de adicionar divs, ao clicar no botão criar tópico
  adicionarDiv();
  
  // Escondendo div de feedback após usuario enviar topico
  aguardo_feedback.style.display = 'none';
})


/*
  Essa variável basicamente é quando o usuário clica no parágrafo verMais que
  está localizado na div Resumo.
  - Quando essa variável é clicada, vai mostrar o resto dos paragrafos pela função
  mostrarParagrafos() 
*/
let verMais = document.querySelector('#verMais');

/*
  Paragrafos ocultos são paragrafos que estão  ou vão ser ocultos, 
  depende da função  mostrarParagrafos() ou ocultarParagrafos(),
  toda  vez que uma delas é executada, o display dos paragrafos ocultos 
  vai pro valor none
*/
let paragrafos_ocultos = document.querySelector('#paragrafos-ocultos');

/*
  # Função principal: tirar display none dos paragrafos, o resto é só acompanhamento de CSS
  para não quebrar layout
*/
function mostrarParagrafos() {

  verMais.addEventListener('click', function(e){
    paragrafos_ocultos.style.display = 'block';

    // # Acompanhando com o CSS, para não quebrar o layout com essa lógica

    // Aumentando a borda da div que tem os paragrafos, ao ser clicada
    let container_resumo = document.querySelector('#container-resumo');
    container_resumo.style.height = '650px'; 

    // Adicionando a classe containerDivVerMais pro container de respostas descer
    container_divs.id = 'container-divsVerMais';

    //Adicionando topico_enviado_container pro container de topico enviado descer
    topico_enviado_container.style.top = '160%';

    // Escondendo div de feedback após usuario enviar topico
    aguardo_feedback.style.display = 'none';
    
    // Parando a propagação de eventos - Essa função tava chamando outro evento | Parei com esse método
    e.stopPropagation();
  });

}

/*
  # Função principal: colocar display none dos paragrafos, o resto é só acompanhamento de CSS
  para não quebrar layout
*/
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

  // Adicionando a classe containerDivVerMais pro container de respostas descer
  container_divs.id = 'container-divs';

  //Adicionando topico_enviado_container pro container de topico enviado descer
  topico_enviado_container.style.top = '110.5%';
  
}


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

    /*
      1 Parte
      - Ao clicar no botão Criar Tópico, toda a área discussões que contém as frases
        "compartilhe suas ideias ou dúvidas com autores"
        "Sabia que o maior estimulo .. "
        imagens referentes ao post
        e o próprio botão de criar tópico precisa desaparecer.
    */ 
    let compartilhe_ideias = document.querySelector("#compartilhe-ideias");
    let imagens_autores = document.querySelector("#imagens-autores");
    let paragrafo_discussao = document.querySelector("#paragrafo-discussao");
    compartilhe_ideias.style.display = 'none';
    imagens_autores.style.display = 'none';
    paragrafo_discussao.style.display = 'none';
    btn_criar_topico.style.display = 'none';


    /*
      2 parte
      - Assim que desaparecer, algumas áreas precisam apararecer como o paragrafo:
      "Tem uma dúvida ou sugestão?"
      "Assunto" com input
      "Conteúdo" com input
      bold + italic
      botão de enviar
    */
    
    // Esse container vai servir apenas para colocar as tags criadas
    let discussoes_container = document.querySelector('#discussoes-container');

   

    // Paragrafo Tem uma dúvida ou sugestão? 
    let paragrafoSugestao = document.createElement('p');
    paragrafoSugestao.innerText = 'Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!';
    paragrafoSugestao.id = 'paragrafoSugestao';
    discussoes_container.appendChild(paragrafoSugestao);

    // H3 Assunto 
    let h3Assunto = document.createElement('h3');
    h3Assunto.innerText = 'Assunto';
    h3Assunto.id = 'h3Assunto';
    discussoes_container.appendChild(h3Assunto);


    // INPUT sobre assunto a ser enviado
    let inputAssunto = document.createElement('input');
    inputAssunto.value = 'Defina um tópico para notificar os autores..';
    inputAssunto.id = 'inputAssunto';
    discussoes_container.appendChild(inputAssunto);

    // ###  Assim que o input assunto for clicado, quero limpar o input
    inputAssunto.addEventListener('click', () =>{
      inputAssunto.value = '';
    })


    // H3 Palavra escrita conteudo 
    let h3_conteudo = document.createElement('h3');
    h3_conteudo.innerText = 'Conteúdo';
    h3_conteudo.id = 'h3_conteudo';
    discussoes_container.appendChild(h3_conteudo);
    
    

    // INPUT sobre CONTEUDO a ser enviado
    let inputConteudo = document.getElementById('inputConteudo');
    inputConteudo.classList.remove('hidden');
    inputConteudo.id = 'inputConteudo';
    inputConteudo.contentEditable = 'true';


    // Bold
    let bold = document.getElementById('bold');
    bold.classList.remove('hidden');
    bold.addEventListener('click', function(){
      inputConteudo.style.fontWeight = 'bold';
    })
    
    // Italic
    let italic = document.getElementById('italic');
    italic.classList.remove('hidden');
    italic.addEventListener('click', function(){
      inputConteudo.style.fontStyle = 'italic';
    })

    // Div com background cinza que fica sobre bold e italic
    let divCinza = document.getElementById('cinza');
    divCinza.classList.remove('hidden');


    // botão de enviar
    let buttonEnviar = document.getElementById('buttonEnviar');
    buttonEnviar.id = 'buttonEnviar';
    buttonEnviar.classList.remove('hidden');





    // # Ao clicar no botão de enviar, os elementos precisam ser criados
    buttonEnviar.addEventListener('click', function(e){

      // For bem rápido só pra ter uma estrutura pra criar
      for(let i=0; i < 1; i++){

        // # Criação do <ul>
        let ul = document.createElement('ul');

        // # Adicionando a classe ul na tag <ul> para pegar a estilização
        ul.classList.add('ul');

        // # Criando <li> pra guardar o titulo do assunto do usuário
        let li_Assunto = document.createElement('li');

        // # Adicionando id #assunto-pergunta 
        li_Assunto.id = 'assunto-pergunta';
        

        // # Guardando o valor do input do usuário dentro da minha li
        li_Assunto.innerText += inputAssunto.value; 


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
        comecinho_Pergunta.innerText += inputConteudo.innerText;


        // Agora vou adicionar na tag <li>
        li_comecinhoPergunta.appendChild(comecinho_Pergunta);


        // Última <li> pra colocar na <ul> principal
        let li_icons = document.createElement('li');

        // Esta lista é responsável por agrupar os <li's> que tem imagens do coração e de lista, e de like
        let ul_likes = document.createElement('ul');
        ul_likes.id = 'likes-respostas';


        // Icone de lista
        let imgList = document.createElement('img');
        imgList.setAttribute('src','/img/list.png');
        imgList.id = 'list-icon';

        // Adicionando dentro de <li> a imagem com icone
        let li_imgList = document.createElement('li');
        li_imgList.appendChild(imgList)


        // Adicionando dentro do <ul> likes
        ul_likes.appendChild(imgList);


        // <li> principal pegando o <ul> que carrega os icones
        li_icons.appendChild(ul_likes);


        // # Criando Coração da lista
        let coracaoImg = document.createElement('img');
        coracaoImg.setAttribute('src','/img/heart.png');

        // Adicionando dentro de <li> a imagem com coracao
        let li_imgCoracao = document.createElement('li');
        li_imgCoracao.appendChild(coracaoImg)


        // Adicionando dentro do <ul> likes
        ul_likes.appendChild(coracaoImg);


        // # Botões de like e resposta
        let like = document.getElementById('like');
        let liLike = document.createElement('li');
        liLike.appendChild(like);
        
        // Adicionando dentro do <ul> likes
        ul_likes.appendChild(liLike);



        // Montando a estrutura do <ul> colocando o Assunto, o autor, o começo da pergunta, e os icones 
        ul.appendChild(li_Assunto);
        ul.appendChild(li_autor);
        ul.appendChild(li_comecinhoPergunta);
        ul.appendChild(li_icons);


        // Adicionando o <ul> dentro dos containers
        container_divs.appendChild(ul);


        
        /*
          3 Parte:
          - Quando o botão de enviar for clicado, eu vou esconder as divs de:
          Assunto && input Assunto
          Conteudo && input Conteudo
          paragrafo: "Tem uma dúvida ou sugestão?" && o botão de enviar
        */
        h3_conteudo.classList.add('hidden');
        inputConteudo.classList.add('hidden');
        inputAssunto.classList.add('hidden');
        h3Assunto.classList.add('hidden');
        paragrafoSugestao.classList.add('hidden');
        bold.classList.add('hidden');
        italic.classList.add('hidden');
        divCinza.classList.add('hidden');
        container_divs.classList.add('blur');

        /*
          4 Parte:
          - Vou colocar a div feedback em cima do blur
        */
        aguardo_feedback.style.display = 'block';



        /*
          5 Parte:
          - Mostrar o span que  o tópico foi enviado com sucesso
          - Mostrar o paragrafo que agradece a contribuição
          - Mostrar o span que mostra Descubra outros  trabalhos!
          - Mostrar o botão criar novo tópico
          - Assim  que esse botão for criado, ele vai mostrar todos os itens
          que eu coloquei a classe hidden, e adicionar eles de volta
        */
        let topico_enviado_container = document.getElementById('topico-enviado-container');
        topico_enviado_container.style.display = 'block';
       
        let topicoSucesso = document.getElementById('topicoSucesso');
        topicoSucesso.id = 'topicoSucesso';

        /*
          Assim que o botão criar novo tópico for clicado,
          o container que carrega:
            Assunto && input Assunto
            Conteudo && input Conteudo
            paragrafo: "Tem uma dúvida ou sugestão?" && o botão de enviar
          vai aparecer, para que o usuário digite novamente no  input
        */
        let botaoCriarNovoTopico = document.querySelector('#topico-enviado-container button');
        
        botaoCriarNovoTopico.addEventListener('click', ()=>{

          h3_conteudo.classList.remove('hidden');
          inputConteudo.classList.remove('hidden');
          inputAssunto.classList.remove('hidden');
          h3Assunto.classList.remove('hidden');
          paragrafoSugestao.classList.remove('hidden');
          bold.classList.remove('hidden');
          italic.classList.remove('hidden');
          divCinza.classList.remove('hidden');

          // O container informando que o topico foi enviado vai sumir
          topico_enviado_container.style.display = 'none';
          
          // Tirando o efeito de blur dos containers, quando botão  criar novo topico for clicado
          container_divs.classList.remove('blur');

          // Ocultando feedback
          aguardo_feedback.style.display = 'none';


        })

      }   

    })
  })
}








