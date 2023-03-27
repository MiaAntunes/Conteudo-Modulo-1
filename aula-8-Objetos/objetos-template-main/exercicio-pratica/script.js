const carrinho = {
    nome: "Camila",
    pagamento: [],
    endereco: "miau,SP"
}
carrinho.compras = [
    {nome: "item1", preco: 100, quantidade:1 },
    {nome: "item2", preco: 50, quantidade:2 },
    {nome: "item3", preco: 10, quantidade:1 }
]
console.log(carrinho);
//Imprima a quantidade de produtos dentro do array compras que existem no carrinho
console.log(carrinho.compras[0].quantidade+carrinho.compras[1].quantidade+carrinho.compras[2].quantidade); //??

//Crie uma copia:
const carrinhoPresente = {
    ...carrinho,
    nome: "Isa",
    pagamento: ["Cartão de Presente"]
};
console.log("Novo: ", carrinhoPresente)
