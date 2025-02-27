//Definir los mensajes
class Message {
    constructor(title, ...messages) {
        this.title = title
        this.messages = messages
    }
}

//Generar numero aleatorio segun el array de mensajes
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

//Triada de mensajes
class MixedMessages {
    constructor(...messages) {
        this.mss = messages
        this.messages = ''
    }

    //Establecer traida
    setMessageTriad(...messages) {
        if (messages.length === 3) {
            this.mss = messages
        } else {
            return new Error('Deben ser Tres conjuntos de mensajes')
        }
    }

    //Mostrar los mensajes
    getMessages() {
        this.mss.forEach(e => {
            this.messages += `${e.title}: ${e.messages[generateRandomNumber(e.messages.length)]}\n`
        })
        return this.messages
    }
}

//Ejemplo
let play = new MixedMessages()
play.setMessageTriad(new Message('uno', 'one', 1), new Message('dos', 'two', 2), new Message('tres', 'three', 3))

console.log(play.getMessages())