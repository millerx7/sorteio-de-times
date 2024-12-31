function convertTextToList() { 
    let texto1 = document.getElementById('textarea1').value; 
    let texto2 = document.getElementById('textarea2').value; 
    let texto3 = document.getElementById('textarea3').value; 
    let texto4 = document.getElementById('textarea4').value; 
    
    let jogadores1 = texto1.split(',');
    let jogadores2 = texto2.split(',');
    let jogadores3 = texto3.split(',');
    let jogadores4 = texto4.split(',');

    jogadores=[jogadores1,jogadores2,jogadores3,jogadores4]

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Inicializar listas para os grupos
    let grupo1 = [];
    let grupo2 = [];
    let grupo3 = [];
    let grupo4 = [];

    // Distribuir jogadores em grupos com um de cada linha
    jogadores.forEach(linha => {
        shuffleArray(linha);
        grupo1.push(linha[0]);
        grupo2.push(linha[1]);
        grupo3.push(linha[2]);
        grupo4.push(linha[3]);
    });

    // Armazenar os grupos no localStorage
    localStorage.setItem('grupo1', JSON.stringify(grupo1));
    localStorage.setItem('grupo2', JSON.stringify(grupo2));
    localStorage.setItem('grupo3', JSON.stringify(grupo3));
    localStorage.setItem('grupo4', JSON.stringify(grupo4));

    // Redirecionar para a página resultado.html
    window.location.href = 'result.html';
}