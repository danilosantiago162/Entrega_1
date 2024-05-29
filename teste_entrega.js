class Funcionário{
    constructor(ID_unico,nome_usuario,cpf,email,senha) {
        this.ID_unico=ID_unico;
        this.nome_usuario=nome_usuario;
        this.cpf=cpf;
        this.email=email;
        this.senha=senha;
    }
    ver_meus_dados() {
        console.log(this.ID_unico);
        console.log(this.nome_usuario);
        console.log(this.cpf);
        console.log(this.email);
        console.log(this.senha);
    }
    modificar_meus_dados() {
        var requisição = require("readline-sync");
        var número = requisição.question("Se desejas alterar, \n seu nome de usuario digite 1 \n seu cpf digite 2 \n seu email digite 3 \n sua senha digite 4 \n");
        if (número == 1) {
            var requisição = require("readline-sync");
            var novonome = requisição.question("Insira novo nome de usuario desejado\n");
            Funcionário.nome_usuario = novonome
            console.log("Mudado com sucesso para: ", novonome);
        }
        if (número == 2) {
            var requisição = require("readline-sync");
            var novocpf = requisição.question("Insira novo cpf sem traços\n");
            Funcionário.cpf = novocpf
            console.log("Mudado com sucesso para: ", novocpf);
        }
        if (número == 3) {
            var requisição = require("readline-sync");
            var novoemail = requisição.question("Insira novo email desejado\n");
            Funcionário.email = novoemail
            console.log("Mudado com sucesso para: ", novoemail);
        }
        if (número == 4) {
            var requisição = require("readline-sync");
            var novasenha = requisição.question("Insira nova senha desejada\n");
            Funcionário.senha = novasenha
            console.log("Mudado com sucesso para: ", novasenha);
        }
    }
}
class Funcionário_logado extends Funcionário {
    
}

let Danilo = new Funcionário_logado("78890876","militar_dorminhoco","39749468880","danilo.santiago@gmail.com","54789dan")
Danilo.modificar_meus_dados();