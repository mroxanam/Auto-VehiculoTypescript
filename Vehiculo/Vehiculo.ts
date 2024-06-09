import Motor from './Motor';

class Vehiculo {
    marca: string;
    modelo: string;
    motor: Motor;

    constructor(marca: string, modelo: string, motor: Motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }

    acelerar(): void {
        console.log(`Acelerando ${this.marca} ${this.modelo}`);
    }

    frenar(): void {
        console.log(`Frenando ${this.marca} ${this.modelo}`);
    }

    encenderMotor(): void {
        this.motor.encender();
    }

    apagarMotor(): void {
        this.motor.apagar();
    }
}

export default Vehiculo;
