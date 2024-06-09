"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Motor {
    constructor(tipo) {
        this.tipo = tipo;
    }
    encender() {
        console.log(`Encendiendo motor ${this.tipo}`);
    }
    apagar() {
        console.log(`Apagando motor ${this.tipo}`);
    }
}
exports.default = Motor;
