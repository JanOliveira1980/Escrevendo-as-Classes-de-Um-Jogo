class Hero {
    constructor(name, age, tipo, ataque){
        this.name = name
        this.age = age
        this.tipo = tipo
        this.ataque = ataque

    }

    atacar(){
          console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
    
}
const heroi1 = new Hero('Shiryu', 33, 'Guerreiro', 'espada')
const heroi2 = new Hero('Mizui', 40, 'Mago', 'magia')
const heroi3 = new Hero('Shezen', 70, 'Monge', 'artes marciais')
const heroi4 = new Hero('Jiraya', 50, 'Ninja', 'shuryken')

const prompt = require('prompt-sync')();
const nome = prompt('Digite o Nome do seu Herói:');

if(nome == heroi1.name){
    heroi1.atacar()
}else if(nome == heroi2.name){
    heroi2.atacar()
}else if(nome == heroi3.name){
    heroi3.atacar()
}else{
    heroi4.atacar()
}




