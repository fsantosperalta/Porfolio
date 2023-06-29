$(document).ready(function() {
    // Affichage des cartes
    $('li').click(function(){
        // On affiche et cache la carte + texte
        $(this).toggleClass('view_face');
        $(this).find('p').toggleClass('view_text');
        // On ajoute de la transparence sur les autres cartes
        $('.grid li').removeClass('autre_carte');
        $('.control').removeClass('autre_carte');
        
        // On ferme la carte ouverte
        $(this).siblings('.carte').each(function() {
            $(this).removeClass('view_face');
            $(this).find('p').removeClass('view_text');
            $(this).addClass('autre_carte');
            $('.control').addClass('autre_carte');
        });
        
        // On retire la transparence si aucune cartes est affiche
        if (!$('.carte').is('.view_face')) {
            $('.grid li').removeClass('autre_carte');
            $('.control').removeClass('autre_carte');
        }
    });
    
    // Slide
    $('.bt').click(function(){
        $('.grid').toggleClass('grid2');
    });
});