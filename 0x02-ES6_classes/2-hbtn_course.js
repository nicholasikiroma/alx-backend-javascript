export default class HolbertonCourse {
    constructor(name, length, students) {
        this.name = name;
        this.length = length;
        this.students = students;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

    get students() {
        return this._students;
    }

    set name(newName) {
        const name = newName;
        if(typeof name === 'string') {
            this._name = name;
        }
        else {
            console.log('Attribute name must be string');
        }
    }

    set length(newLength) {
        const length = newLength;
        if(typeof length === 'number') {
            this._length = length;
        }
        else {
            console.log('Attribute must be an integer');
        }

    }

    set students(newStudent) {
        const students = newStudent;
        if(Array.isArray(students)) {
            this._students =students;
        }
        else {
            console.log('Attribute name must be an array');
        }
    }
}