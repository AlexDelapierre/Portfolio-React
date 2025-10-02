import VintagoMobile from "../assets/img/Vintago_mobile.PNG";
import VintagoDesktop from "../assets/img/Vintago_desktop.PNG";
import RestaurantMobile from "../assets/img/Restaurant_mobile.PNG";
import RestaurantDesktop from "../assets/img/Restaurant_desktop.PNG";
import RecettesMobile from "../assets/img/Recettes_mobile.PNG";
import RecettesDesktop from "../assets/img/Recettes_desktop.PNG";
import SymfonyShopMobile from "../assets/img/SymfonyShop_mobile.PNG";
import SymfonyShopDesktop from "../assets/img/SymfonyShop_desktop.PNG";
import BookeoMobile from "../assets/img/Bookeo_mobile.PNG";
import BookeoDesktop from "../assets/img/Bookeo_desktop.PNG";
import PortfolioMobile from "../assets/img/Portfolio_mobile.PNG";
import PortfolioDesktop from "../assets/img/Portfolio_desktop.PNG";

const projectsData = [
  {
      imageMobile: PortfolioMobile, 
      imageDesktop: PortfolioDesktop,
      title: "Portfolio",
      tags: ["React","JavaScript","CSS","Responsive Design","Mobile First"],
      description: "Projet réalisé pour présenter mes compétences en frontend. Conception d’un site interactif et responsive, avec animations et navigation fluide. Développement d’une interface moderne avec React et optimisation de l’expérience utilisateur.",
      liveLink: "#",
      codeLink: "https://github.com/AlexDelapierre/Portfolio-React"
    },
    {
      imageMobile: VintagoMobile, 
      imageDesktop: VintagoDesktop,
      title: "Vintago",
      tags: ["React","TypeScript","Node.js","Express.js","MongoDB","JWT","Multer"],
      description: "Application web de vente d’occasion avec interface intuitive pour publier et gérer ses annonces. Une API sécurisée avec tokens JWT assure l’authentification des utilisateurs, la protection des routes et la gestion des images, offrant une expérience fluide et fiable côté serveur.",
      liveLink: "#",
      codeLink: "https://github.com/AlexDelapierre/Vintago"
    },
    {
      imageMobile: RestaurantMobile, 
      imageDesktop: RestaurantDesktop,
      title: "Le Quai Antique",
      tags: ["PHP","Symfony","Doctrine","MySQL","JavaScript"],
      description: "Site web pour restaurant avec gestion des menus et des réservations via un back-office sécurisé. Formulaire de réservation dynamique avec créneaux horaires et comptes utilisateurs. Design responsive, optimisé pour mobile et desktop.",
      liveLink: "https://le-quai-antique.alexdelapierre.fr/",
      codeLink: "https://github.com/AlexDelapierre/Le-Quai-Antique"
    },
    {
      imageMobile: RecettesMobile,
      imageDesktop: RecettesDesktop,
      title: "Cuisinea",
      description: "Application web de recettes avec espace membre permettant de créer, modifier et supprimer ses propres recettes. Gestion des comptes utilisateurs et expérience fluide grâce à un design responsive pour mobile et desktop.",
      tags: ["HTML","CSS","Bootstrap","PHP", "MySQL" ],
      liveLink: "https://cuisinea.alexdelapierre.fr/",
      codeLink: "https://github.com/AlexDelapierre/Cuisinea"
    },
    {
      imageMobile: SymfonyShopMobile,
      imageDesktop: SymfonyShopDesktop,
      title: "SymfonyShop",
      description: "Site e-commerce avec interface d’administration sécurisée et gestion complète des produits et commandes. Fonctionnalités avancées côté serveur : authentification des utilisateurs et gestion sécurisée des sessions via tokens JWT, réinitialisation des mots de passe et gestion d’images.",
      tags: ["PHP", "Symfony", "Doctrine", "MySQL", "JavaScript","Bootstrap"],
      liveLink: "https://site-e-commerce.alexdelapierre.fr/",
      codeLink: "https://github.com/AlexDelapierre/SymfonyShop"
    },
    {
      imageMobile: BookeoMobile,
      imageDesktop: BookeoDesktop,
      title: "Bookeo",
      description: "Plateforme pour gérer une collection de BD et Manga avec interface d’administration sécurisée. Possibilité d’ajouter, modifier ou supprimer des articles, et carrousel dynamique pour parcourir les visuels de manière fluide. Design responsive, mobile-first.",
      tags: ["PHP", "MySQL","JavaScript","HTML", "CSS", "Bootstrap"],
      liveLink: "https://bookeo.alexdelapierre.fr/",
      codeLink: "https://github.com/AlexDelapierre/Bookeo"
    }
  ];
  
  export default projectsData;