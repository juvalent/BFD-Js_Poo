class Funcionario{
    private _salario : number = 0;

    constructor(public nome: string){}

    get salario(): number{
        return this.salario;
    }

    set salario(valor: number){
        if(valor <= 1518){
            console.log("Valor Inválido!");
            return;
        }
        this.salario = valor;
    }
}

const f = new Funcionario ("Julliane"); 
f.salario =1518;
console.log(f.salario);
f.salario= -1518;
