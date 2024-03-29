const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(express.json())

morgan.token('body', (request, response) => {
    return JSON.stringify(request.body)
})

app.use(morgan('tiny', {
    skip: function (request, response) { return request.method === 'POST' }
}))


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (request, response) => {
    response.send('<h1>Welcome</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.statusMessage = 'Person with this id does not exist'
        response.status(404).end()
    }
})

app.get('/info', (request, response) => {
    response.send(`<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.post('/api/persons', (request, response) => {
    const body = request.body
    const id = newId()
    if (body.name && body.number) {
        const newPerson = {
            id: id,
            name: body.name,
            number: body.number
        }
        if (persons.find(person => person.name === newPerson.name)) {
            response.status(400).json({"error": "This person exists"})
        } else {
            persons = persons.concat(newPerson)
            response.json(newPerson)
        }
    } else {
        response.status(400).json({"error": "New person lacks name or number"})
    }
})

const newId = () => {
    return Math.floor(Math.random() * 10000);
}

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
})