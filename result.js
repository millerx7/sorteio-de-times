// Recuperar os dados dos grupos do localStorage 
const grupo1 = JSON.parse(localStorage.getItem('grupo1')); 
const grupo2 = JSON.parse(localStorage.getItem('grupo2')); 
const grupo3 = JSON.parse(localStorage.getItem('grupo3')); 
const grupo4 = JSON.parse(localStorage.getItem('grupo4')); 
// Função para criar e retornar um parágrafo com o conteúdo do grupo 
function criarParagrafo(grupo) {
let lista = document.createElement("ul");
grupo.forEach(jogador => {
    let item = document.createElement("li");
    item.textContent = jogador;
    item.style.color = "white";
    lista.appendChild(item);
});
return lista;
}


    // Exibir os grupos no HTML 
    document.getElementById('grupo1').appendChild(criarParagrafo(grupo1)); 
    document.getElementById('grupo2').appendChild(criarParagrafo(grupo2)); 
    document.getElementById('grupo3').appendChild(criarParagrafo(grupo3)); 
    document.getElementById('grupo4').appendChild(criarParagrafo(grupo4)); 

    // Limpar localStorage 
    localStorage.removeItem('grupo1'); 
    localStorage.removeItem('grupo2'); 
    localStorage.removeItem('grupo3'); 
    localStorage.removeItem('grupo4'); 

    function redirectToPage() { window.location.href = "."; }

   