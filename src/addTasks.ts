// 1. Створіть інтерфейс, що описує поведінку тварини (властивості, способи пересування).
// Використовуйте цей інтерфейс до класу Cat, Bird, Fish. Подумайте, які властивості мають бути
// опціональними.

interface Animal {
    name: string;
    voice(): void;
    move(): void;
};

class Cat implements Animal {
    constructor(public name: string) {
        this.name = name;
    };

    voice(): void {
        console.log(`${this.name} says Miu-Miu`);
    };

    move(): void {
        console.log(`${this.name} runs`);
    }
};

class Bird implements Animal {
    constructor(public name: string) {
        this.name = name;
    };

    voice(): void {
        console.log(`${this.name} says Chvik-Chirik`);
    };

    move(): void {
        console.log(`${this.name} flies`);
    }
};

class Fish implements Animal {
    constructor(public name: string) {
        this.name = name;
    };

    voice(): void {
        console.log(`${this.name} says Om-Om`);
    };

    move(): void {
        console.log(`${this.name} swims`);
    }
};

const bob: Animal = new Cat('Bob');
bob.move();
bob.voice();

const chik: Animal = new Bird('Chik');
chik.move();
chik.voice();

const mark = new Fish('Mark');
mark.move();
mark.voice();

// Завдання 2
// Створити поняття абстрактного батьківського класу Car. Від нього створити 3 похідні класи (марки
// автомобілів) із застосуванням методу super(). У класах використовувати модифікатори як у
// батьківському класі, і у похідних. Створити від похідних класів мінімум по 2 екземпляри (моделі
// автомобілів). Методи у похідних класах повинні виводити на екран усі властивості (опис
// автомобіля). Подумайте, які властивості у похідних класах мають бути public, які – private та
// protected.

abstract class Car {
    constructor(protected brand: string, public fuel: string) {};

    move(): string {
        return `${this.brand} has ${this.fuel} and moves`;
    };

    abstract bip(): void;
}

class Mers extends Car {
    
    constructor(public fuel: string, public mielage: number) {
    super('Mers', fuel)
    }
    bip(): void {
        console.log(`${this.brand} make Bip-Bip and achieved ${this.mielage}`);
    }
    
};

class Audi extends Car {
    bip(): void {
        console.log(`${this.brand} make Dgggggg`);
    }
};

class Bmw extends Car {
    bip(): void {
        console.log(`${this.brand} make FaFa`);
    }
};

const mers: Car = new Mers('Diesel', 100);
mers.bip();
console.log(mers.move());

const audi: Car = new Audi('Audi', 'Gasoline');
audi.bip();
console.log(audi.move());

const bmw: Car = new Bmw('BMW', 'Diesel');
bmw.bip();
console.log(bmw.move());


