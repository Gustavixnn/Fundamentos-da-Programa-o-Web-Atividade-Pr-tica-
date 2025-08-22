document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');
  const feedback = document.getElementById('feedback');

  form.addEventListener('submit', function (e) {
    e.preventDefault();  // evitar recarregar a página

    let erros = [];

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome.length < 2) {
      erros.push('Por favor, insira um nome válido com pelo menos 2 caracteres.');
    }
    if (!emailRegex.test(email)) {
      erros.push('Por favor, insira um endereço de e-mail válido.');
    }
    if (mensagem.length === 0) {
      erros.push('Por favor, escreva uma mensagem.');
    }

    if (erros.length > 0) {
      feedback.style.color = 'red';
      feedback.textContent = erros.join(' ');
    } else {
      feedback.style.color = 'green';
      feedback.textContent = 'Enviado com sucesso.';
      form.reset();  // Limpar o formulário após envio bem sucedido
    }
  });
});document.addEventListener('DOMContentLoaded', function () {
  // Carrossel cursos
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  const slideWidth = slides[0].getBoundingClientRect().width;

  // Dispor os slides lado a lado
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
  };

  nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    if(!nextSlide) nextSlide = slides[0]; // ciclo
    moveToSlide(track, currentSlide, nextSlide);
  });

  prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    if(!prevSlide) prevSlide = slides[slides.length - 1]; // ciclo
    moveToSlide(track, currentSlide, prevSlide);
  });
});

