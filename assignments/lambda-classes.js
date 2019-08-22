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
        super(basicInfo);
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

class Student extends Person {
    constructor(basicTwo) {
        super(basicTwo);
        this.previousBackground = basicTwo.previousBackground;
        this.className = basicTwo.className;
        this.favSubjects = basicTwo.favSubjects;
        this.grade = basicTwo.grade;
    }

    listsSubjects() {
        console.log(`${this.name}'s favorite subjects are:`);
        for (var subject of this.favSubjects) {
            console.log(`${subject}`);
        }
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    }

    pass() {
        if (this.grade >= 65) {
            console.log(`${this.name} You did it!`);
        } else {
            console.log(`Sorry, not passing yet. Remember to review and ask questions. Good Luck!`);
        }
    }
}

class ProjectManagers extends Instructor {
    constructor(evenMoreInfo) {
        super(evenMoreInfo);
        this.gradClassName = evenMoreInfo.gradClassName;
        this.favInstructor = evenMoreInfo.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const alice = new Person({
    name: 'Alice',
    location: 'Maine',
    age: 50,
});

const harry = new Person({
    name: 'Harry',
    location: 'England',
    age: 30,
});

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
});

const paolo = new Instructor({
    name: 'Paolo',
    location: 'California',
    age: 21,
    favLanguage: 'Pythont',
    specialty: 'Back-End',
    catchPhrase: `Tubular`,
});

const hector = new Student({
    name: 'Hector',
    location: 'Spain',
    age: 35,
    previousBackground: 'Wine Master',
    className: 'CS 123',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 45,
});

const lucia = new Student({
    name: 'Lucia',
    location: 'Portugal',
    age: 45,
    previousBackground: 'Doctor',
    className: 'BIO 333',
    favSubjects: ['Python', 'C++', 'Java'],
    grade: 90,
});

const han = new ProjectManagers({
    name: 'Han',
    location: 'Corellia',
    age: 29,
    favLanguage: 'Attack',
    specialty: 'Galaxy Thief',
    catchPhrase: `You know, sometimes I amaze even myself`,
    gradClassName: 'CS6',
    favInstructor: 'Fred',
});

const tina = new ProjectManagers({
    name: 'Tina',
    location: 'New Jersey',
    age: 25,
    favLanguage: 'Boys',
    specialty: 'Writing',
    catchPhrase: `A No Is Just A Yes, Upside Down`,
    gradClassName: 'CS5',
    favInstructor: 'Paolo',
});

alice.speak();
harry.speak();
fred.speak();
paolo.speak();
hector.speak();
lucia.speak();
han.speak();
tina.speak();
han.demo("space");
tina.demo("home");
paolo.demo("something");
fred.demo("code");
han.grade(hector, "math");
tina.grade(lucia, "coding");
paolo.grade(hector, "happy");
fred.grade(lucia, "upbeat");
hector.listsSubjects();
lucia.listsSubjects();
hector.PRAssignment("class");
lucia.PRAssignment("lab");
hector.sprintChallenge("javascript");
lucia.sprintChallenge("html");
han.standUp("slack");
tina.standUp("web20x");
tina.debugsCode(hector, "standup");
han.debugsCode(lucia, "project");
hector.pass();
lucia.pass();