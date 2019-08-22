// CODE here for your Lambda Classes

class Person {
    constructor(basic) {
        this.name = basic.name;
        this.age = basic.age;
        this.location = basic.location;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}

class Instructor extends Person {
    constructor(basicInfo) {
        this.name = basicInfo.name;
        this.age = basicInfo.age;
        this.location = basicInfo.location;
        this.specialty = basicInfo.specialty;
        this.favLanguage = basicInfo.favLanguage;
        this.catchPhrase = basicInfo.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${this.subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

class Student {
    constructor(basicTwo) {
        this.name = basicTwo.name;
        this.age = basicTwo.age;
        this.location = basicTwo.location;
        this.previousBackground = basicTwo.previousBackground;

    }

    speak() {
        console.log(`
                    Hello my name is $ { this.name }, I am from $ { this.location }
                    `)
    }
}