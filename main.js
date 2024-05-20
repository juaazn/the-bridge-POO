class Person {
	constructor(name, age, genre) {
		this.name = name
		this.age = age
		this.genre = genre
	}

	obtDetails () {
		return `Your name: ${this.name}, age: ${this.age}, and genre: ${this.genre}`
	}
}


class Student extends Person {
	constructor (name, age, genre, course, group ) {
		super(name, age, genre)

		this.course = course
		this.group = group
	}

	register () {
		return `Student name: ${this.name}, age: ${this.age}, and genre: ${this.genre}\n course: ${this.course}`
	}
}

class Teacher extends Person {
	constructor(name, age, genre, asignatura, level) {
		super(name, age, genre)

		this.asignatura = asignatura 
		this.level = level
	}

	assign() {
		return `Student name: ${this.name}, age: ${this.age}, and genre: ${this.genre}\nTeacher asignatura: ${this.asignatura} level: ${this.level}`
	}
}
