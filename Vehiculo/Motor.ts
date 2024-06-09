class Motor {
    tipo: string;

    constructor(tipo: string) {
        this.tipo = tipo;
    }

    encender(): void {
        console.log(`Encendiendo motor ${this.tipo}`);
    }

    apagar(): void {
        console.log(`Apagando motor ${this.tipo}`);
    }
}

export default Motor;
