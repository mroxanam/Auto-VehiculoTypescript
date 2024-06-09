"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehiculo {
    constructor(marca, modelo, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
    }
    acelerar() {
        console.log(`Acelerando ${this.marca} ${this.modelo}`);
    }
    frenar() {
        console.log(`Frenando ${this.marca} ${this.modelo}`);
    }
    encenderMotor() {
        this.motor.encender();
    }
    apagarMotor() {
        this.motor.apagar();
    }
}
exports.default = Vehiculo;
