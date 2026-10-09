const translations = {
  pt: {
    navAbout:"Sobre", navProjects:"Projetos", navJourney:"Jornada", navContact:"Contato",
    available:"ESTUDANTE • EM BUSCA DE OPORTUNIDADE EM TECH",
    heroTitle:'Transformando<br><span class="outline">curiosidade</span> em<br>soluções.',
    heroIntro:"Sou Bruna Luísa, estudante de Ciência da Computação na UFRRJ. Exploro tecnologia por meio de dados, inteligência artificial e cibersegurança — aprendendo, construindo e compartilhando.",
    seeProjects:"Explorar projetos", heroLocation:"CIÊNCIA DA COMPUTAÇÃO · UFRRJ",
    aboutLabel:"QUEM SOU", aboutTitle:'Tecnologia com<br><span class="accent">intenção.</span>',
    aboutLead:"Gosto de entender como as coisas funcionam — e de transformar essa curiosidade em projetos que possam ajudar pessoas.",
    aboutBody:"Sou estudante de Ciência da Computação na Universidade Federal Rural do Rio de Janeiro (UFRRJ) e participo de uma iniciação científica voltada ao uso de dados e técnicas de aprendizado de máquina para apoiar a trajetória acadêmica de estudantes. Também desenvolvo projetos com Python e sigo aprofundando meus conhecimentos em bancos de dados, IA e segurança da informação.",
    workLabel:"TRABALHOS SELECIONADOS", projectsTitle:'Feito para<br><span class="accent">aprender fazendo.</span>',
    projectsNote:"Projetos acadêmicos e pessoais. Em evolução contínua — assim como eu.",
    researchTag:"INICIAÇÃO CIENTÍFICA", academicProject:"Pesquisa acadêmica · em desenvolvimento",
    botDescription:"Bot de apoio acadêmico para estudantes de Ciência da Computação da UFRRJ. O projeto explora dados acadêmicos e técnicas de aprendizado de máquina para apoiar orientações sobre disciplinas, pré-requisitos e planejamento da trajetória curricular.",
    personalProject:"PROJETO PESSOAL", calculatorTitle:"Calculadora em Python",
    calculatorDescription:"Aplicação de calculadora com interface gráfica construída com Tkinter, organizada em arquivos Python e com foco na prática de orientação a objetos e construção de interfaces.",
    learningProject:"Prática de programação", viewGithub:"Explorar GitHub ↗",
    dataTitle:"Análise de dados acadêmicos",
    dataDescription:"Etapa de pesquisa que envolve organização e limpeza de dados acadêmicos, exploração de médias por eixos curriculares e experimentação com algoritmos de aprendizado de máquina para investigar padrões de desempenho.",
    researchWork:"Pesquisa e experimentação",
    projectDisclaimer:"Nota: os links genéricos levam ao meu perfil do GitHub. Nem todos os trabalhos têm um repositório público; não compartilho dados acadêmicos pessoais ou bases restritas.",
    journeyLabel:"JORNADA", journeyTitle:'Aprendizado em<br><span class="accent">movimento.</span>',
    timelineResearch:"Iniciação científica · UFRRJ",
    timelineResearchBody:"Pesquisa aplicada a dados acadêmicos, aprendizado de máquina e apoio à trajetória universitária, com desenvolvimento de um bot em Python.",
    timelinePresentation:"RAIC / RAIDTec · UFRRJ",
    timelinePresentationBody:"Apresentação do projeto de iniciação científica na jornada acadêmica de pesquisa e inovação da universidade.",
    ongoing:"EM ANDAMENTO", timelineSecurity:"Estudos em cibersegurança",
    timelineSecurityBody:"Aprofundando conhecimentos por meio de cursos e plataformas práticas de aprendizagem em segurança da informação.",
    currentlyLearning:"APRENDENDO AGORA", contactLabel:"VAMOS CONVERSAR",
    contactTitle:'Boas ideias começam<br>com um <span class="accent">olá.</span>',
    contactText:"Estou em busca da minha primeira oportunidade em tecnologia e aberta a aprender, colaborar e contribuir com projetos desafiadores.",
    linkedinButton:"Encontrar no LinkedIn ↗",
    contactNote:"Adicione seu link direto do LinkedIn e e-mail profissional antes de divulgar o site.",
    footerNote:"Feito com curiosidade e café.", backTop:"Voltar ao topo ↑"
  },
  en: {
    navAbout:"About", navProjects:"Projects", navJourney:"Journey", navContact:"Contact",
    available:"COMPUTER SCIENCE STUDENT • OPEN TO TECH OPPORTUNITIES",
    heroTitle:'Turning<br><span class="outline">curiosity</span> into<br>solutions.',
    heroIntro:"I'm Bruna Luísa, a Computer Science student at UFRRJ. I explore technology through data, artificial intelligence, and cybersecurity — learning, building, and sharing along the way.",
    seeProjects:"Explore projects", heroLocation:"COMPUTER SCIENCE · UFRRJ",
    aboutLabel:"WHO I AM", aboutTitle:'Technology with<br><span class="accent">intention.</span>',
    aboutLead:"I like understanding how things work — and turning that curiosity into projects that can help people.",
    aboutBody:"I'm a Computer Science student at the Federal Rural University of Rio de Janeiro (UFRRJ), participating in an undergraduate research project focused on using data and machine learning techniques to support students' academic journeys. I also build Python projects and continue developing my knowledge of databases, AI, and information security.",
    workLabel:"SELECTED WORK", projectsTitle:'Built to<br><span class="accent">learn by doing.</span>',
    projectsNote:"Academic and personal projects. Always evolving — just like me.",
    researchTag:"UNDERGRADUATE RESEARCH", academicProject:"Academic research · in progress",
    botDescription:"An academic support bot for Computer Science students at UFRRJ. The project explores academic data and machine learning techniques to support guidance on courses, prerequisites, and curriculum planning.",
    personalProject:"PERSONAL PROJECT", calculatorTitle:"Python Calculator",
    calculatorDescription:"A graphical calculator application built with Tkinter, organized into Python files and focused on practicing object-oriented programming and interface development.",
    learningProject:"Programming practice", viewGithub:"Explore GitHub ↗",
    dataTitle:"Academic data analysis",
    dataDescription:"A research stage involving academic data organization and cleaning, exploration of averages across curriculum areas, and experiments with machine learning algorithms to investigate performance patterns.",
    researchWork:"Research & experimentation",
    projectDisclaimer:"Note: generic links lead to my GitHub profile. Not every project has a public repository; personal academic data and restricted datasets are not shared.",
    journeyLabel:"JOURNEY", journeyTitle:'Learning in<br><span class="accent">motion.</span>',
    timelineResearch:"Undergraduate research · UFRRJ",
    timelineResearchBody:"Applied research using academic data and machine learning to support university progression, including development of a Python bot.",
    timelinePresentation:"RAIC / RAIDTec · UFRRJ",
    timelinePresentationBody:"Presented the undergraduate research project at the university's research and innovation event.",
    ongoing:"ONGOING", timelineSecurity:"Cybersecurity studies",
    timelineSecurityBody:"Building knowledge through courses and hands-on learning platforms focused on information security.",
    currentlyLearning:"CURRENTLY LEARNING", contactLabel:"LET'S CONNECT",
    contactTitle:'Good ideas start<br>with a <span class="accent">hello.</span>',
    contactText:"I'm looking for my first opportunity in tech and eager to learn, collaborate, and contribute to challenging projects.",
    linkedinButton:"Find me on LinkedIn ↗",
    contactNote:"Add your direct LinkedIn profile URL and professional email before sharing the site.",
    footerNote:"Made with curiosity and coffee.", backTop:"Back to top ↑"
  }
};
let currentLanguage = "pt";
const toggle = document.getElementById("language-toggle");
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  toggle.innerHTML = language === "pt" ? 'EN <span>↗</span>' : 'PT <span>↗</span>';
  toggle.setAttribute("aria-label", language === "pt" ? "Switch to English" : "Mudar para português");
  try { localStorage.setItem("portfolio-language", language); } catch (_) {}
}
toggle.addEventListener("click", () => setLanguage(currentLanguage === "pt" ? "en" : "pt"));
document.getElementById("year").textContent = new Date().getFullYear();
try {
  const saved = localStorage.getItem("portfolio-language");
  if (saved === "en" || saved === "pt") setLanguage(saved);
} catch (_) {}
