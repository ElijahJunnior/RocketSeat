
/*  Exercicios de loop

    *** For ***

    // Varivale i vai iniciar com zero e ser incrementada até 10 de 1 em 1
    for (let i = 0; i <= 10; i++) {

        // Quando i for 5 pula pra proxima repetição
        if( i == 5) {
            continue;
        }

        // quando o i for 5 não será executado
        console.log(`O valor de i é: ${i}`);

    }


    *** While ***

    let list = new Array('Carla', 'Cassiane', 'Juliana');

    // executa até que o array não tenha nenhum elemento
    while (list.length > 0) {
        // remove e exibe o ultimo elemento do array
        console.log(list.pop())
    }


    *** For Of ***

    let list = new Array('Fernanda', 'Carol', 'Thais');

    // Sera executado uma vez para cada item da lista
    for (let item of list) {
        // vai imprimir o item que será um elemento da lista a cara repetição
        console.log(item);
    }


    *** For In ***

    const user = {
        name: 'marcelo',
        age: 59,
        email: 'marcelinho@exemple.com',
    }

    // Vai repetir o bloco uma vez para cada propriedade do objeto
    for (let property in user) {
        // vai imprimir o nome da propriedade atual
        console.log(property);
        // vai imprimir o valor da propriedade atual
        console.log(user[property]);
    }

*/