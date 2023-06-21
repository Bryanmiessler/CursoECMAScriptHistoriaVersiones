const anotherFunction = () => {
  return new Promise((resolve, reject) => {
      if (true) {
          resolve("Hey");
      } else {
          reject("Whooops!");
      }
  })
}

anotherFunction()
  .then(response => console.log('Then...' + response))
  .catch(err => console.log('catch...' + err))
  .finally(()=> console.log('Finally'));


  async function* anotherGenerator() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
  }
  
  const generador = anotherGenerator()
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))
  generador.next().then(respuesta => console.log(respuesta.value))


  async function forAwait() {
    const nombres = ["Alexa", "Oscar", "David"]
    for await (let valor of nombres) {
      console.log(valor)
    }
  }
  
  forAwait()