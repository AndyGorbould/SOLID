class Engine {

    private _fuel : number = 0;
    private _miles : number = 0;
    private _status: boolean = false;

    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }


    get fuel(): number {
        return this._fuel;
    }

    get miles(): number {
        return this._miles;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get status(): boolean {
        return this._status;
    }

    turnEngineOn() {
        this._status = true;
    }

    turnEngineOff() {
        this._status = false;
    }

    drive() {
        if(this.status === false || this._fuel <= 0) {
            return;
        }
        
        this._fuel -= 1;
        this._miles += this.FUEL_MILEAGE;
    }
}