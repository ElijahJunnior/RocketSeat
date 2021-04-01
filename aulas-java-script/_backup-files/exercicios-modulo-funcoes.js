function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

const thais = new User('Thais', 'thais@exemple.com', 'senhathais');

console.log(thais);