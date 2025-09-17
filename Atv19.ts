class Carro{
    private _velocidade:number=0;

    get velocidade():number {
        return this.velocidade;
    }
    set velocidade (valor: number){
        if(valor >=200){
            this.acelerar();       
        }

        this.velocidade = valor;
    }
    acelerar(): void{
        console.log("Está Acelerando!");
       }

    frear(): void{
        console.log("Está Freando");
    }

}

const c1 = new Carro;
c1.acelerar();
c1.frear();