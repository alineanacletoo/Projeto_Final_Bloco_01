import { Produtos } from "./Produtos";

export class Tecidos extends Produtos{

    private _roupas: string;


	constructor(id: number, nome: string, valor: number, tipo: number, estoque: number, roupas: string) {
        super(id, nome, valor, tipo, estoque)
		this._roupas = roupas;
	}

	public get roupas(): string {
		return this._roupas;
	}

	public set roupas(value: string) {
		this._roupas = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`  Seguimento do cosmetico: ${this._roupas}`);
    }


}