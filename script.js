function sortear() {
    // Importando jogadores Bons
    var player1Bom = document.getElementById("team1-player1Bom").value;
    var player2Bom = document.getElementById("team1-player2Bom").value;
    var player3Bom = document.getElementById("team1-player3Bom").value;
    var player4Bom = document.getElementById("team1-player4Bom").value;

    // Importando Jogadores Intermediários
    var player1Medio = document.getElementById("team2-player1Medio").value;
    var player2Medio = document.getElementById("team2-player2Medio").value;
    var player3Medio = document.getElementById("team2-player3Medio").value;
    var player4Medio = document.getElementById("team2-player4Medio").value;

    // Importando Jogadores Ruins
    var player1Ruim = document.getElementById("team3-player1Ruim").value;
    var player2Ruim = document.getElementById("team3-player2Ruim").value;
    var player3Ruim = document.getElementById("team3-player3Ruim").value;
    var player4Ruim = document.getElementById("team3-player4Ruim").value;

    // Importando Jogadores Convidados
    var player1Convidado = document.getElementById("team4-player1Convidado").value;
    var player2Convidado = document.getElementById("team4-player2Convidado").value;
    var player3Convidado = document.getElementById("team4-player3Convidado").value;
    var player4Convidado = document.getElementById("team4-player4Convidado").value;

    // Criando listas com os valores dos jogadores
    var jogadores = [
        [player1Bom, player2Bom, player3Bom, player4Bom],
        [player1Medio, player2Medio, player3Medio, player4Medio],
        [player1Ruim, player2Ruim, player3Ruim, player4Ruim],
        [player1Convidado, player2Convidado, player3Convidado, player4Convidado]
    ];

    // Função para embaralhar uma lista
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

document.getElementById("sortear").addEventListener("click", sortear);

