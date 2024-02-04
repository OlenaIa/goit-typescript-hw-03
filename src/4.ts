class Key {
    private signature: number;

    constructor() {
        this.setSignature();
    };

    private setSignature(): void {
        this.signature = Math.random()
    };

    public getSignature(): number {
        const { signature } = this;
        return signature;
    };
};

class Person {
    constructor(private key: Key) {};
    
    public getKey(): number {
        const homeKey = this.key.getSignature();
        return homeKey;
    };
};

abstract class House {
    public door: boolean;
    public tenants: Person[] = [];

    constructor(public key: Key) { 
        this.door = false;
    };
    
    public comeIn(person: Person): void {
        if (this.door) {
                this.tenants.push(person);
        };
        console.log('tenants =>', this.tenants);
    };
    
    public abstract openDoor(homeKey: number): void;
};

class MyHouse extends House {
    public openDoor(homeKey: number): void {
        if (homeKey === this.key.getSignature()) {
            this.door = true;
            console.log('Welcome home');
            return;
        };
        console.log('Sorry. Look for your key');
    };

    public closeDoor(): void {
        this.door = false;
        console.log('Door is closed again');
    }
}

// Story 1
console.log('----------- Plot 1 ------------');
const key = new Key();
console.log('key =>', key);

const person = new Person(key); 
console.log('person =>', person);
console.log('personKey =>', person.getKey());

const house = new MyHouse(key);
console.log('house =>', house);

house.openDoor(person.getKey());
house.comeIn(person);
house.closeDoor();

// Story 2
console.log('----------- Plot 2 ------------');
const key2 = new Key();
console.log('key 2 =>', key2);

const person2 = new Person(key2); 
console.log('person2 =>', person2);
console.log('personKey2 =>', person2.getKey());


const house2 = new MyHouse(key2);
console.log('house2 =>', house2);

house.openDoor(person2.getKey());
house.comeIn(person2);
house.closeDoor();

// Story 3
console.log('----------- Plot 3 ------------');
const key3 = new Key();
console.log('key 3 =>', key3);

const person3 = new Person(key3); 
console.log('person3 =>', person3);
console.log('personKey3 =>', person3.getKey());


const house3 = new MyHouse(key3);
console.log('house3 =>', house3);

house.openDoor(0.3543535); // False key
house.comeIn(person3);
house.closeDoor();

export {};