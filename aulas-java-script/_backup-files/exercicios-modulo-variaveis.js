// ----- Variable declaration class exercises

// 1 Declara uma variavel de nome width

let weigth;

// 2 De que tipo de dado é a variavel a cima

console.log(typeof weigth);

// 3 

const studant_name = 'Miguel';
const age = 19;
const stars = 7.8;
const isSubscribed = true;

// 4 

const studant = {
    name: studant_name,
    age: age,
    stars: stars,
    weigth: 73.05,
    isSubscribed: isSubscribed,
};

console.log(`O ${studant.name} de idade ${studant.age} pesa ${studant.weigth} Kg`);

// 5

let studants = [];

// 6

studants = [
    studant
];

// 7

console.log(studants[0]);

// 8 

const studant2 = {
    name: 'Ricardo',
    age: 18,
    stars: 7.8,
    weigth: 61.1,
    isSubscribed: true,
}

studants[1] = studant2;


// ----- Exercicios extras -----


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