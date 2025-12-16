// Script para gerenciar a Landing Page do Portfólio

document.addEventListener('DOMContentLoaded', function() {
  // Navbar ativa ao fazer scroll
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Fechar menu mobile ao clicar em um link
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        const toggler = document.querySelector('.navbar-toggler');
        toggler.click();
      }
    });
  });

  // Formulário de contato
  const formContato = document.querySelector('form');
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;

      // Aqui você pode adicionar a lógica para enviar o formulário
      // Por exemplo, usar fetch para chamar uma API
      console.log('Formulário submetido:', { nome, email, mensagem });

      // Limpar formulário
      formContato.reset();
      
      // Mostrar mensagem de sucesso
      alert('Obrigado pela mensagem! Vou responder em breve.');
    });
  }

  // Efeito de fade-in nos cards ao scroll
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeIn 0.5s ease-in';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Observar cards de projeto
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });

  // Função para carregar projetos dinamicamente (opcional)
  // Você pode usar isso para integrar com a pasta 'projects'
  loadProjects();
});

/**
 * Carrega os projetos dinamicamente
 * Esta função pode ser estendida para buscar dados de um arquivo JSON ou API
 */
function loadProjects() {
  // Exemplo de dados de projetos (você pode substituir por dados reais)
  const projects = [
    {
      id: 1,
      titulo: 'Projeto 1',
      descricao: 'Descrição do projeto. Adicione suas tecnologias e detalhes aqui.',
      imagem: 'https://via.placeholder.com/300x200',
      url: 'pages/projeto1.html',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 2,
      titulo: 'Projeto 2',
      descricao: 'Descrição do projeto. Adicione suas tecnologias e detalhes aqui.',
      imagem: 'https://via.placeholder.com/300x200',
      url: 'pages/projeto2.html',
      tags: ['React', 'Bootstrap', 'API']
    },
    {
      id: 3,
      titulo: 'Projeto 3',
      descricao: 'Descrição do projeto. Adicione suas tecnologias e detalhes aqui.',
      imagem: 'https://via.placeholder.com/300x200',
      url: 'pages/projeto3.html',
      tags: ['Node.js', 'MongoDB', 'Express']
    }
  ];

  // Você pode usar este array para renderizar os projetos dinamicamente
  console.log('Projetos carregados:', projects);
}

/**
 * Função para enviar o formulário para um servidor
 * Exemplo de integração com uma API
 */
async function enviarFormulario(dados) {
  try {
    const response = await fetch('/api/contato', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados)
    });

    if (response.ok) {
      console.log('Mensagem enviada com sucesso!');
    } else {
      console.error('Erro ao enviar mensagem');
    }
  } catch (error) {
    console.error('Erro:', error);
  }
}

/**
 * Função auxiliar para animar números
 * Útil para estatísticas
 */
function animarNumero(elemento, final, duracao = 2000) {
  let inicio = 0;
  const incremento = final / (duracao / 16);
  
  const timer = setInterval(() => {
    inicio += incremento;
    if (inicio >= final) {
      elemento.textContent = final;
      clearInterval(timer);
    } else {
      elemento.textContent = Math.floor(inicio);
    }
  }, 16);
}

// Exportar funções para uso externo
window.portfolioUtils = {
  loadProjects,
  enviarFormulario,
  animarNumero
};
