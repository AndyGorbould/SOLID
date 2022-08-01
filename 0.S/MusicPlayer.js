"use strict";
class MusicPlayer {
    constructor() {
        this._volume = 0;
        this._previousVolume = 50;
    }
    get volume() {
        return this._volume;
    }
    set volume(value) {
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
