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

class MusicPlayer {

  private _volume : number = 0;
  private _previousVolume : number = 50;

  get volume(): number {
      return this._volume;
  }

  set volume(value: number) {
      this._volume = value;
      this._previousVolume = value;
  }

  turnMusicOn() {
      this._volume = this._previousVolume;
  }

  turnMusicOff() {
      this._volume = 0;
  }
}

class Car {
  private _Engine: Engine;
  private _MusicPlayer: MusicPlayer;

  constructor(MAXIMUM_FUEL_CAPACITY: number) {
    this.Engine.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
  }

  get Engine(): Engine {
    return this._Engine;
  }
  get MusicPlayer(): MusicPlayer {
    return this._MusicPlayer;
  }
}

const musicToggleElement = <HTMLElement>document.querySelector("#music-toggle");
const musicSliderElement = <HTMLInputElement>(
  document.querySelector("#music-slider")
);
const engineToggleElement = <HTMLInputElement>(
  document.querySelector("#engine-toggle")
);
const addFuelForm = document.querySelector("#add-fuel-form");
const addFuelInput = <HTMLFormElement>document.querySelector("#add-fuel-input");
const fuelLevelElement = <HTMLElement>document.querySelector("#fuel-level");
const milesElement = <HTMLElement>document.querySelector("#miles-value");
const audioElement = <HTMLAudioElement>document.querySelector("#car-music");

let car = new Car(100);

musicToggleElement.addEventListener("click", () => {
  if (car.MusicPlayer.volume === 0) {
    car.MusicPlayer.turnMusicOn();
    musicSliderElement.value = car.MusicPlayer.volume.toString();
    musicToggleElement.innerText = "Turn music off";
    return;
  }
  musicToggleElement.innerText = "Turn music on";
  car.MusicPlayer.turnMusicOff();
});

musicSliderElement.addEventListener("input", (event) => {
  let target = <HTMLFormElement>event.target;

  car.MusicPlayer.volume = target.value;
  audioElement.volume = car.MusicPlayer.volume / 100;

  //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
  musicToggleElement.innerText = car.MusicPlayer.volume
    ? "Turn music off"
    : "Turn music on";
});

engineToggleElement.addEventListener("click", () => {
  if (car.Engine.status) {
    car.Engine.turnEngineOff();
    engineToggleElement.innerText = "Turn engine on";
    return;
  }
  engineToggleElement.innerText = "Turn engine off";
  car.Engine.turnEngineOn();
});

addFuelForm.addEventListener("submit", (event) => {
  event.preventDefault();

  car.Engine.addFuel(Number(addFuelInput.value));
  fuelLevelElement.innerText = car.Engine.fuel.toString();
});

setInterval(() => {
  car.Engine.drive();

  //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
  // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
  milesElement.innerText = <string>(<unknown>car.Engine.miles);
  // This .toString() will actually convert the value in JavaScript from an integer to a string
  fuelLevelElement.innerText = car.Engine.fuel.toString();

  if (car.MusicPlayer.volume === 0) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
}, 1000);
