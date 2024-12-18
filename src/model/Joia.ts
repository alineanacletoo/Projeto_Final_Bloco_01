import { Produtos } from "./Produtos";

export class Joia extends Produtos{

    private _acessorio: string;


	constructor(id: number, nome: string, valor: number, tipo: number, estoque: number, acessorio: string) {
		super(id, nome, valor, tipo, estoque)
        this._acessorio = acessorio;
	}

	public get acessorio(): string {
		return this._acessorio;
	}

	public set acessorio(value: string) {
		this._acessorio = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`  tipo de joia: ${this._acessorio}`);
    }
}