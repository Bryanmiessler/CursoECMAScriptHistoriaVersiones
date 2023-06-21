class user {
  constructor(name) {
    this.name = name;
  }

  // metodos
  speak() {
    return 'Hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }
}

const laura = new user('Laura');
console.log(laura.greeting());

class user2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // metodos
  speak() {
    return 'Hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`
  }

  get uAge() {
    return this.age;
  }

  set uAge(newAge) {
    this.age = newAge;
  }
}

const bryan = new user2('Bryan', 27);
console.log(bryan.uAge);
console.log(bryan.uAge = 17);


