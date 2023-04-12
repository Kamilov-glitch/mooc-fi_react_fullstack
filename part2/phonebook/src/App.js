import { useState } from "react";
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const nameInputHandler = (event) => {
    setNewName(event.target.value)
  }

  const numberInputHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const searchInputHandler = (event) => {
    setSearchValue(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    const newNameObject = { name: newName, number: newNumber }
    setPersons(persons.concat(newNameObject))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchValue} handler={searchInputHandler} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} nameInputHandler={nameInputHandler} newNumber={newNumber}
        numberInputHandler={numberInputHandler} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchValue={searchValue} />
    </div>
  )
}

export default App;
