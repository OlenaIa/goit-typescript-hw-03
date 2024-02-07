// Завдання 1
// Створіть екземпляр класу, в конструктор якого користувач буде передавати рядкові значення.
// Встановіть в класі метод для визначення функції генератора, яка на кожному значенні у
// властивостях класу встановлює yield. При виклику даної функції з класу перевірте всі значення
// уведені користувачем та зупиніть перебір – у випадку якщо користувач ввів числове значення.
// Помилку виведіть у консоль.

class TypeToNumber<T>{
    private userString: T[] = [];

    addUserType(userType: T): void {
        this.userString.push(userType)
    };
    
    *generateString() {
        for (let i = 0; i < this.userString.length; i++) {
            if (typeof this.userString[i] === 'number') {
                console.log(`${this.userString[i]} - is number`);
                return;
            };
            yield this.userString[i]
        }
    }
};

const userTypes1 = new TypeToNumber();
userTypes1.addUserType('Hello');
userTypes1.addUserType(' ');
userTypes1.addUserType('world');
userTypes1.addUserType('!');
userTypes1.addUserType(5);
userTypes1.addUserType('BUM');


let result = '';
for (const iterator of userTypes1.generateString()) {
    // if (typeof iterator === 'number') {
    //     throw new Error(`${iterator} - is number`);
    // };
    result += iterator;
};
console.log(result);

// function isItNumber<T>(params:T):void {
//     if (typeof params === 'number') {
//         console.log(`${params} - is number`);
//         return;
//     };
// }


// Завдання 2
// Створіть словник власних визначень, використовуючи Generic function. В середині повинні бути
// визначення для трьох властивостей – ключ, значення, опис (різних типів даних). Для отримання чи
// запису використовуйте get/set реалізації доступу. Також для полів необхідно використовувати
// модифікатори доступу (на ваш розсуд). В підсумку повинний вийти словник термінів, отримуючи у
// вхідний параметр різні типи даних для реалізації.
interface WordItem<T, V, D> {
    key?: T;
    value?: V;
    description?: D;
}
class Word<T, V, D>{
    public word: WordItem<T, V, D> = {}

    set _key(key: T) {
        this.word.key = key;
    };
    set _value(value: V) {
        this.word.value = value;
    };
    set _description(value: D) {
        this.word.description = value;
    };
    
    public get wordInfo(): void {
        const { word } = this;
        return console.log(`${word.key} is a ${word.value}. It mean, ${word.description}`);
    }
    

}

class Dictionary<T, V, D> {
    public arrWords: Word<T, V, D>[] = [];
 
 public addWord(key: T, value: V, description: D) {
     const word = new Word<T, V, D>();
     word._key = key;
     word._value = value;
     word._description = description;
    this.arrWords.push(word);
    }
    
    *getWord() {
    for (let i = 0; i < this.arrWords.length; i++) {
            yield this.arrWords[i]
        }
}
};

const dict = new Dictionary();
dict.addWord('star', 'this', 100);
dict.addWord('cat', 'he', 20);
dict.addWord('dog', 100, 200);
const arr = dict.getWord();
for (const iterator of arr) {
    console.log(iterator);
}

// GPT-chat example

class DictionaryGPT<T, U, V> {
    private _key: T;
    private _value: U;
    private _description: V;

    constructor(key: T, value: U, description: V) {
        this._key = key;
        this._value = value;
        this._description = description;
    }

    get key(): T {
        return this._key;
    }

    set key(newKey: T) {
        this._key = newKey;
    }

    get value(): U {
        return this._value;
    }

    set value(newValue: U) {
        this._value = newValue;
    }

    get description(): V {
        return this._description;
    }

    set description(newDescription: V) {
        this._description = newDescription;
    }
}

// Приклад використання:
const termDictionary = new DictionaryGPT<string, number, string>("JavaScript", 10, "A programming language.");
console.log(termDictionary.key); // Виведе "JavaScript"
console.log(termDictionary.value); // Виведе 10
console.log(termDictionary.description); // Виведе "A programming language."

termDictionary.value = 20;
console.log(termDictionary.value); // Виведе 20


