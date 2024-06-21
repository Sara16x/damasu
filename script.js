document.addEventListener("DOMContentLoaded", function() {
    var avviso = document.getElementById('avviso');

    // Funzione per mostrare l'avviso dopo 15 secondi
    function mostraAvviso() {
        console.log('Mostra avviso dopo 15 secondi');
        avviso.style.display = 'block';

        // Nascondi l'avviso dopo 5 secondi
        setTimeout(function() {
            console.log('Nascondi avviso dopo 5 secondi');
            avviso.style.display = 'none';
        }, 5000);
    }

    // Avvia la funzione dopo 15 secondi
    setTimeout(mostraAvviso, 15000);
});
