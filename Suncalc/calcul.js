function calculateZenith() {
    // Récupération des valeurs saisies par l'utilisateur
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;

    // Récupération de la date actuelle
    var date = new Date();
    // Calcul de l'angle zénithal
    var sunPosition = suncalc.getPosition(date, latitude, longitude);
    var zenith = 90 - sunPosition.altitude;

    // Affichage du résultat
    document.getElementById("result").innerHTML = "L'angle zénithal est de " + zenith + " degrés.";
}
