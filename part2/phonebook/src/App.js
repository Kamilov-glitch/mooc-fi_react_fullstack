import { useState, useEffect } from "react";
import axios from "axios";
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then( response => {
      setPersons(response.data);
    })
  }, [])

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
