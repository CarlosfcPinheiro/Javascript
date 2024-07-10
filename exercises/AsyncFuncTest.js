// Fazendo busca em uma API via fetch, aplicando conceitos de funções assíncronas e await operation

// Função regular para retornar o valor da busca através do fetch
function getUser(id){

    return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(`Error: ${err}`));
}

// Criação de função assíncrona que não segue a ordem linear do código
async function showUserName(id){
    try{
        const user = await getUser(id); // Aguardando o retorno da função getUser para retomar a execução da função showUserName

        console.log(`User name: ${user.data.first_name}`);
        console.log(`User emailr: ${user.data.email}`);
    }catch(err){
        console.log(`Error locale: ${err}`);
    }
}

showUserName(3);