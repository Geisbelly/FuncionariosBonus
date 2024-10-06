export class FuncionraiosComuns {
    private nome: string;
    private tempo_empresa: number;
    private salario: number;

    constructor(nome: string, tempo: number, salario: number){
        this.nome = nome
        this.tempo_empresa = tempo;
        this.salario = salario;
    }

    getTempo_empresa(){
        return this.tempo_empresa;
    }

    getSalario(){
        return this.salario;
    }

    getNome(){
        return this.nome;
    }

    setTempoEmpresa(t: number){
        this.tempo_empresa = t;
    }

    setSalario(s: number){
        this.salario = s;
    }

    setNome(n: string){
        this.nome = n;
    }

    
    calcularBonus(){
        return this.salario * 0.1;
    }

    getFuncionario(){
        return `Tempo de Empresa: ${this.tempo_empresa} anos \nCargo: Funcionario Comum\nSalário: R$${this.salario}\nBônus: R$${this.calcularBonus()}`
    }



}

export  class Gerente extends FuncionraiosComuns{
    constructor(nome: string,tempo: number, salario: number){
        super(nome, tempo,salario)
    }

    calcularBonus() {
        return this.getSalario()*0.2
    }

    getFuncionario(){
        return `Tempo de Empresa: ${super.getTempo_empresa()} anos \nCargo: Gerente\nSalário: R$${super.getSalario}\nBônus: R$${this.calcularBonus()}`
    }

}

export  class Diretor extends FuncionraiosComuns{
    constructor(nome: string,tempo: number, salario: number){
        super(nome, tempo,salario )
    }

    calcularBonus() {
        return this.getSalario()*0.3
    }

    getFuncionario(){
        return `Tempo de Empresa: ${super.getTempo_empresa()} anos \nCargo: Diretor\nSalário: R$${super.getSalario}\nBônus: R$${this.calcularBonus()}`
    }


}