

    
     let compraSupermercado = [6.99, 9.50, 23.50, 2.00, 5.99];


       function adicionarProdutosCompra(compraSupermercado, novoProduto){//array
        compraSupermercado.push(novoProduto); //chama o array
         return compraSupermercado;
       }

       function removerProdutoCompraPop (compraSupermercado){// array
         compraSupermercado.pop();//chama o array
         return compraSupermercado;
       }
        

        function removerProdutoCompraFilter (compraSupermercado, valorRemocao){
            let compraSupermercadoRemovido  = compraSupermercado.filter(produto => {
               return produto !== valorRemocao;
            });
             return compraSupermercadoRemovido;
        }

        function valorCompra(compraSupermercado){
            let valorTotal = 0;
            compraSupermercado.forEach(produto => {
                valorTotal += produto
            });
            return valorTotal 
        
        }
        
           console.log(adicionarProdutosCompra (compraSupermercado, 7.00));
           console.log(removerProdutoCompraPop (compraSupermercado, 21.00));
           console.log(removerProdutoCompraFilter (compraSupermercado, 9.50));
           console.log(valorCompra (compraSupermercado));
           