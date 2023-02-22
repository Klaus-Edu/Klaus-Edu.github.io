//Estilização do H1 na section firstView

document.getElementById("ola").addEventListener("mouseout", function(){
    var element = document.getElementById("ola");
    element.classList.add("fade");
    setTimeout(function() {
        element.innerHTML = "Olá! 👀";
        element.classList.remove("fade");
        element.style.paddingLeft = "0em";
    }, 250);
    
})

document.getElementById("ola").addEventListener("mouseover", function(){
    var element = document.getElementById("ola");
    element.classList.add("fade");
    setTimeout(function() {
        element.innerHTML = "Sobre mim";
        element.classList.remove("fade");
        element.style.paddingLeft = "0.5em";
    }, 250);
       
})

document.getElementById("meChamo").addEventListener("mouseout", function(){
    var element = document.getElementById("meChamo");
    element.classList.add("fade");
    setTimeout(function() {
        element.innerHTML = "Me chamo";
        element.classList.remove("fade");
        element.style.paddingLeft = "0em";
    }, 250);
})

document.getElementById("meChamo").addEventListener("mouseover", function(){
    var element = document.getElementById("meChamo");
    element.classList.add("fade");
    setTimeout(function() {
        element.innerHTML = "Projetos";
        element.classList.remove("fade");
        element.style.paddingLeft = "0.5em";
    }, 250);
})

document.getElementById("klaus").addEventListener("mouseout", function(){
    var element = document.getElementById("klaus");
    element.classList.add("fade");
    setTimeout(function() {
        element.innerHTML = "Klaus";
        element.classList.remove("fade");
        element.style.paddingLeft = "0em";
    }, 250);
})

document.getElementById("klaus").addEventListener("mouseover", function(){
    var element = document.getElementById("klaus");
    element.classList.add("fade");
    setTimeout(function() {
        element.innerHTML = "Estudos";
        element.classList.remove("fade");
        element.style.paddingLeft = "0.5em";
    }, 250);
})


//BOTOES DE REDES SOCIAIS


const link1 = document.getElementById('linkedin');

link1.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = link1.querySelector('a').href;
});

const link2 = document.getElementById('github');

link2.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = link2.querySelector('a').href; 
});

const link3 = document.getElementById('whats');

link3.addEventListener('click', function(event) {
  event.preventDefault(); 
  window.location.href = link3.querySelector('a').href;
});


//BOTAO VOLTAR AO TOPO


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}