import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", []),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", ["disconnected"], "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", ["disconnected"], "/js/auth/inscription.js"),
    new Route("/moncompte", "Mon compte", "/pages/auth/moncompte.html", []),
    new Route("/editpassword", "Changer de mot de passe", "/pages/auth/editpassword.html", []),
    new Route("/reservation", "Réservation", "/pages/reservation/reservation.html", []),
    new Route("/reserver", "Réserver", "/pages/reservation/reserver.html", [])];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";