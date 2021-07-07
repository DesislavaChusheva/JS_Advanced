class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length) {
        this.innerLength += length;
    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    toString() {
        if (this.innerLength >= this.innerString.length) {
            return this.innerString;
        } else if (this.innerLength === 0) {
            return '...';
        } else {
            let result = '';
            for (let i = 0; i < this.innerLength; i++) {
                result += this.innerString[i];
            }
            result += '...';
            return result;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); // Test
