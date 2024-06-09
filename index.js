"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Motor_1 = __importDefault(require("./vehiculo/Motor"));
const Vehiculo_1 = __importDefault(require("./vehiculo/Vehiculo"));
// Crear un motor
const motor = new Motor_1.default('Diesel');
// Crear un vehículo con el motor creado
const vehiculo = new Vehiculo_1.default('Toyota', 'Corolla', motor);
// Operaciones con el vehículo
vehiculo.encenderMotor();
vehiculo.acelerar();
vehiculo.frenar();
vehiculo.apagarMotor();
