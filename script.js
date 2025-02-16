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
    