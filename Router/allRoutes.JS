import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/connexion", "Connexion", "/pages/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/inscription.html"),
    new Route("/moncompte", "Mon compte", "/pages/moncompte.html"),
    new Route("/editpassword", "Changer de mot de passe", "/pages/editpassword.html")];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";