class CaixaDaLanchonete {

    cardapio = {
        'cafe': 3.00,
        'chantily': 1.50,
        'suco': 6.20,
        'sanduiche': 6.50,
        'queijo': 2.00,
        'salgado': 7.25,
        'combo1': 9.50,
        'combo2': 7.50
    };

    carrinhoDeCompras = {};
    
    pagamento = {
        'dinheiro' : 0.95,
        'debito' : 1.0, 
        'credito' : 1.03
    };

    calcularValorDaCompra(metodoDePagamento, itens) {

        let valorTotalDaCompra = 0;

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!'
        }

        for (const item of itens) {
            let [codigo, quantidade] = item.split(',');
            quantidade = parseInt(quantidade, 10);

            if (!this.cardapio[codigo]) {
                return 'Item inválido!';
            }
            if (quantidade === 0) {
                return 'Quantidade inválida!';
            }

            this.carrinhoDeCompras[codigo] = quantidade;

            valorTotalDaCompra += this.cardapio[codigo] * quantidade;
        }

        if (this.carrinhoDeCompras['queijo'] && !this.carrinhoDeCompras['sanduiche'] || 
            this.carrinhoDeCompras['chantily'] && !this.carrinhoDeCompras['cafe']) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        if (!this.pagamento[metodoDePagamento]) {
            return 'Forma de pagamento inválida!'
        }

        valorTotalDaCompra *= this.pagamento[metodoDePagamento]

        return 'R$ ' + valorTotalDaCompra.toFixed(2).replace('.', ',');
    }
}
export { CaixaDaLanchonete };