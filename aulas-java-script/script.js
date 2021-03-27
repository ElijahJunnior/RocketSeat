// Declarando objeto
const user = {
    name: 'Elias Junior',
    password: 'S3nh@123',
    email: 'email@exemple.com'
}

// Interpolando stings
console.log(`Nome: ${user.name}`);
console.log(`Email: ${user.email}`)

// Concatenando Strings
console.log('Senha: ' + user.password);


// Declarando uma arry e atribuindo valores 
const users = [
    {
        name: 'Marcos Josefino',
        password: 'S3nh@123',
        email: 'marcos.jose@exemple.com'
    },
    {
        name: 'Adauberto Farias',
        password: 'S3nh@321',
        email: 'ad.farias@exemple.com'
    }
]

// ----- Acessando a propriedade name do primeiro registro ----
console.log(users[0].name)

// ----- Acessando a propriedade email do segundo registro ----
console.log(users[1].email)