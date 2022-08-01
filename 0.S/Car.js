"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(MAXIMUM_FUEL_CAPACITY) {
        this.Engine.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get Engine() {
        return this._Engine;
    }
    get MusicPlayer() {
        return this._MusicPlayer;
    }
}
const musicToggleElement = document.querySelector("#music-toggle");
const musicSliderElement = (document.querySelector("#music-slider"));
const engineToggleElement = (document.querySelector("#engine-toggle"));
const addFuelForm = document.querySelector("#add-fuel-form");
const addFuelInput = document.querySelector("#add-fuel-input");
const fuelLevelElement = document.querySelector("#fuel-level");
const milesElement = document.querySelector("#miles-value");
const audioElement = document.querySelector("#car-music");
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
    let target = event.target;
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
    milesElement.innerText = car.Engine.miles;
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.Engine.fuel.toString();
    if (car.MusicPlayer.volume === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
