interface Cooker {
    on(): void;
    off(): void;
    bake(item: string) : void;
}

class Oven implements Cooker {
    private _isOn: boolean = false;

    public on(): void {
        setTimeout(function () {
            document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS ON!</p>";
        }, 1000);
        console.log("THE GAS IS ON!");
        this._isOn = true;
    }

    public off(): void {
        setTimeout(function () {
            document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : THE GAS IS OFF!</p><hr>";
        }, 3000);
        console.log("THE GAS IS OFF!");
        this._isOn = false;
    }

    public bake(item: string) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : there is no gas!</p>";
            }, 2000);
            console.log("there is no gas!");
        }
    }
}

class Microwave implements Cooker {
    private _isOn: boolean = false;

    public on(): void {
        setTimeout(function () {
            document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Nuke it!</p>";
        }, 1000);
        console.log("NUKE IT");
        this._isOn = true;
    }

    public off(): void {
        setTimeout(function () {
            document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : MELTDOWN!</p><hr>";
        }, 3000);
        console.log("MELTDOWN!");
        this._isOn = false;
    }

    public bake(item: string) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now nuking " + item + " !</p>";
            }, 2000);
            console.log("Now nuking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target')!.innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : turn me on </p>";
            }, 2000);
            console.log("turn me on!");
        }
    }
}


class Restaurant {
    private _name: string;
    private _cooker: Oven | Microwave;

    constructor(name: string, cooker: Oven | Microwave) {
        this._name = name;
        this._cooker = cooker
    }

    public Cook(item: string) {
        this._cooker.on();
        this._cooker.bake(item);
        this._cooker.off();
    }
}


let bakery = new Restaurant("Bakery", new Oven);
bakery.Cook("cookies");


let greasySpoon = new Restaurant("Greasy Spoon", new Microwave);
greasySpoon.Cook("scrambled egg");


//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */