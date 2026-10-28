function updateCarrossel() {
    // <div> .carrossel
    const carrossel = document.querySelector('.carrossel');
    // <div> .container
    const container = document.querySelector('.container');

    // Pega o tamanho do carrossel e divide pelo tamanho do container,
    // arredonda pra cima para não ter fração
    // Como limpamos todos os elementos do .carrossel na próxima linha
    // adicionamos +1 para repor o container original
    const cloneTimes = Math.ceil(carrossel.clientWidth / container.clientWidth) + 1;

    carrossel.innerHTML = '';

    // Cria um array com o número de elementos igual
    // ao resultado da operação (cloneTimes)
    const clones = [...new Array(cloneTimes)]
        // Para cada item do array, cria um clone do container e...
        .map(() => container.cloneNode(true))
        // ... adiciona ao carrossel
        .map(clone => carrossel.appendChild(clone));
}

// Executa a função assim que carrega a página
updateCarrossel();

// Coloca um event listener que fica "ouvindo"
// toda vez que há um redimensionamento de tela
// e executa a função para recalcular o total de containers
window.addEventListener('resize', (event) => {
    updateCarrossel();
});