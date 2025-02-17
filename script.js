document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    // sélectionne tous les boutons voir les tâches, les seuls sur la page pour le moment
    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();//empêche le comportement par défaut du lien
            //trouve la card parente du bouton clické
            const card = button.closest('.card');
            //ajoute la classe "clicked" pour déclencher l'animation
            card.classList.add('clicked');
            //redirige vers la page des tâches après l'anim
            setTimeout(() =>{
                window.location.href = button.getAttribute('href');
             }, 500);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const sprintNav = document.getElementById('sprint-nav');

    // Ajouter un écouteur d'événement pour le clic sur l'icône hamburger
    hamburger.addEventListener('click', function () {
        sprintNav.classList.toggle('active');
    });

    // Masquer le menu lorsqu'on clique en dehors
    document.addEventListener('click', function (event) {
        if (!hamburger.contains(event.target) && !sprintNav.contains(event.target)) {
            sprintNav.classList.remove('active');
        }
    });
});