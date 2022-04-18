function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto=document.getElementById("mais");
    var leiaMais=document.getElementById("leiaMais");


    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        leiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="inline";
        leiaMais.innerHTML="Leia Menos";
    }
}

function criarTopico(){
    var itens = document.getElementById("itens");
    var form = document.getElementById("form");
    var criarTopico = document.getElementById("criarTopico");

    if(itens.style.display === "none"){
        itens.style.display="inline";
        form.style.display="none";

    }else{
        itens.style.display="none";
        form.style.display="inline";
    }
}

let assunto = document.querySelector('#assunto')
let conteudo = document.querySelector('#conteudo')
let assuntoOk = false
let conteudoOk = false


function validarAssunto(){
    let txtAssunto= document.querySelector('#txtAssunto')

    if(assunto.value.length < 3){
        txtAssunto.innerHTML= 'Não pode ter menos de três caracteres'
    }else{
        assuntoOk= 'true'
        txtAssunto.innerHTML='Ok'
    }
}

function validarConteudo(){
    let txtConteudo= document.querySelector('#txtConteudo')

    if (conteudo.value.length >= 150){
        txtConteudo.innerHTML= 'O texto ultrapassou o limite de caracteres'
    }else{
        conteudoOk= 'true'
        txtConteudo.innerHTML= 'Ok'
    }
}

function enviar(){
    var form=document.getElementById("form");
    var itens = document.getElementById("itens");
    var topicoEnviado=document.getElementById("topicoEnviado");
    if (conteudoOk==true){
        topicoEnviado.style.display = "inline";
        form.style.display = "none";
    }else{
        alert('Preencha corretamente!');
    }
}

function expandirResp(){
    var respostas=document.getElementById("respostas");

    if(respostas.style.display==="none"){
        respostas.style.display = "inline";
    }else{
        respostas.style.display="none";
    }
}