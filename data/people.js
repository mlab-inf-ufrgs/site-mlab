
const PEOPLE = [
  {
    name: "Mariana Recamonde-Mendoza",
    role: "coordination",
    roleLabel: "coordinator",
    image: "img/team/mariana.jpeg",
    tags: [],
    tagLabels: [],
    links: {
      linkedin: "#",
      scholar: "https://scholar.google.com.br/citations?user=nyMTIdoAAAAJ&hl=pt-BR&oi=ao",
      email: "[EMAIL_ADDRESS]",
      lattes: "https://www.inf.ufrgs.br/~mrmendoza/research.html"
    }
  },
  {
    name: "Luiz Fernando Rodrigues Jr.",
    role: "postdoc",
    roleLabel: "postdoc",
    image: "img/team/LuizFernando.jpeg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Renan Andrades",
    role: "phd",
    roleLabel: "PhD Student",
    image: "img/team/Renan.jpg",
    tags: ["genomic", "trust"],
    tagLabels: ["Genomics & Networks", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Bianca Matos",
    role: "phd",
    roleLabel: "PhD Student",
    image: "img/team/Bianca.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Daniel Arnold",
    role: "phd",
    roleLabel: "PhD Student",
    image: "img/team/Daniel-Arnold.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Laura Speggiorin",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Laura.jpg",
    tags: ["genomic", "predictive"],
    tagLabels: ["Genomics & Networks", "Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Edmar Bevilaqua",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Edmar.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Felipe Alves",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Felipe.jpeg",
    tags: ["multimodal", "predictive"],
    tagLabels: ["Multimodal Data", "Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Guilherme Malta",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Guilherme Malta.jpeg",
    tags: ["surveillance"],
    tagLabels: ["Health Surveillance"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Silmara Barnabé",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Silmara.jpeg",
    tags: ["surveillance"],
    tagLabels: ["Health Surveillance"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Mateus Balda",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Mateus.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Luciano Farias",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Luciano.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Ana Carolina Ferreira",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Ana Ferreira.jpeg",
    tags: ["genomic", "trust"],
    tagLabels: ["Genomics & Networks", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Henrique Sanchez",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/HenriqueSanchez.jpg",
    tags: ["trust"],
    tagLabels: ["Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Ana Laura Schardosim",
    role: "masters",
    roleLabel: "MSc Student",
    image: "img/team/Ana Schardosim.jpg",
    tags: ["genomic"],
    tagLabels: ["Genomics & Networks"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Kamille Konarzewski",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Kamille.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Maximus Borges",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Maximus.jpg",
    tags: ["surveillance", "predictive"],
    tagLabels: ["Health Surveillance", "Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Caroline Bauman",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Carol.jpg",
    tags: ["trust"],
    tagLabels: ["Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Eduarda Tessari",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Eduarda.PNG",
    tags: ["predictive"],
    tagLabels: ["Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Lucca Claus",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Lucca.jpeg",
    tags: ["genomic"],
    tagLabels: ["Genomics & Networks"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Luis Coelho",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Luis.jpeg",
    tags: ["genomic"],
    tagLabels: ["Genomics & Networks"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Vinicius Piacini",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Vinicius.jpeg",
    tags: ["trust"],
    tagLabels: ["Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Paulo Ceccato",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Paulo_Ceccato.jpeg",
    tags: ["predictive"],
    tagLabels: ["Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Déborah Ribeiro",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Deborah.jpg",
    tags: ["predictive"],
    tagLabels: ["Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Leonardo Gasparote",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Leonardo.jpg",
    tags: ["predictive"],
    tagLabels: ["Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Alice Varella",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Alice Varella.jpg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Maria Eduarda da Silveira",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/MariaEduarda.png",
    tags: ["predictive"],
    tagLabels: ["Predictive Models"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  },
  {
    name: "Gabriela Rublescki",
    role: "undergrad",
    roleLabel: "Undergrad",
    image: "img/team/Gabriela Rublescki.jpeg",
    tags: ["predictive", "trust"],
    tagLabels: ["Predictive Models", "Trustworthy AI"],
    links: { linkedin: "#", scholar: "#", email: "[EMAIL_ADDRESS]", lattes: "#" }
  }
];
