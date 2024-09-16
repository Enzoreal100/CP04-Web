// Seleciona todos os botões do HTML
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const id = parseInt(button.id);
        let nome;
        let valor;
        let quantidade;

        switch (id) {
            case 1:
                nome = 'Camiseta';
                valor = 29.99;
                quantidade = 2;
                break;
            case 2:
                nome = 'Calça Jeans';
                valor = 99.90;
                quantidade = 1;
                break;
            case 3:
                nome = 'Tênis';
                valor = 149.90;
                quantidade = 1;
                break;
            default:
                return;
        };
        adicionarProduto(id, nome, valor, quantidade)
    })
})
// Função para adicionar um produto ao carrinho
function adicionarProduto(id, nome, valor, quantidade) {
    // Obter os produtos do localStorage ou criar um novo array vazio
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adicionar o novo produto ao array
    carrinho.push({ id, nome, valor, quantidade });

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}
// Função para remover um produto do carrinho
function removerProduto(id) {
    // Obter os produtos do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    // Filtrar os produtos, removendo o produto com o id especificado
    carrinho = carrinho.filter(produto => produto.id !== id);

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}
// Função para exibir os produtos do carrinho
function exibirCarrinho() {
    // Obter os produtos do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho'));

    // Verificar se o carrinho está vazio
    if (carrinho && carrinho.length > 0) {
        // Exibir os produtos em um elemento HTML (ajuste conforme sua estrutura HTML)
        const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = '';

        carrinho.forEach(produto => {
            const li = document.createElement('li');
            li.textContent = `${produto.nome} - Quantidade: ${produto.quantidade} - Valor: R$ ${produto.valor.toFixed(2)}`;
            listaProdutos.appendChild(li);
        });
    } else {
        // Exibir a mensagem de carrinho vazio
        const listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML = 'O carrinho está vazio!';
    }

}

// Inicialização da aplicação: verificar se há produtos no carrinho e exibi-los
exibirCarrinho();

// elemento de estilização do carrinho


