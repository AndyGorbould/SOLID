"use strict";
class Engine {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this._miles = 0;
        this._status = false;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get fuel() {
        return this._fuel;
    }
    get miles() {
        return this._miles;
    }
    addFuel(fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
    get status() {
        return this._status;
    }
    turnEngineOn() {
        this._status = true;
    }
    turnEngineOff() {
        this._status = false;
    }
    drive() {
        if (this.status === false || this._fuel <= 0) {
            return;
        }
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}
