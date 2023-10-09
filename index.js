  
  //Faz uma cópia de array apartir do parâmetro selecionado, pode ser escolhido o inicio e fim.
  
  const produtos = ['maça', 'uva', 'melão', 'tomate']
   const compras = produtos.slice(1, 3);

   console.log(compras);
   

   //Adiciona sem precisar remover (escolho o índice que vai ser)

  //                0       1        2        
   const nome = ["Maria", "Araujo", "Marques"]
   nome.splice(1, 0,"Sprince")
   
   console.log(nome);

   // Inverte a ordem do array

  const num = [1,2,3,4,5,6,7,8,9,10]
  num.reverse(0);

  console.log(num);