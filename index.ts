import Motor from './vehiculo/Motor';
import Vehiculo from './vehiculo/Vehiculo';

// Crear un motor
const motor = new Motor('Diesel');

// Crear un vehículo con el motor creado
const vehiculo = new Vehiculo('Toyota', 'Corolla', motor);

// Operaciones con el vehículo
vehiculo.encenderMotor();
vehiculo.acelerar();
vehiculo.frenar();
vehiculo.apagarMotor();
