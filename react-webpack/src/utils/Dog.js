function fav(C) {
  return C
}

@fav
class Dog {
  constructor(name) {
    this.name = name
  }
  run() {
    console.log('run')
  }
}

export default Dog
