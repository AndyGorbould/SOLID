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