class Discente{
    private _nota : number=0;

    get nota(): number{
        return this.nota;
    }

    set nota(valor : number){
        if(valor>=0 && valor<=10){
            console.log(" Valor aceit0!");
            return;
        }

        this.nota = valor;
    }


}

const n = new Discente;
n.nota=10;
console.log("n.nota");
n.nota= -5;
