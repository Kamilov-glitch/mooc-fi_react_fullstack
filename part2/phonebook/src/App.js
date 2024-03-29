import { useState, useEffect } from "react";
import personsService from './services/persons';
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [notificationType, setNotificationType] = useState(null)

  useEffect(() => {
    personsService
    .getAll()
    .then( allPersons => {
      setPersons(allPersons);
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
    const person = persons.find(person => person.name === newName)
    if (person) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with the new one?`)) {
        const id = person.id
        personsService.update(person.id, newNumber)
        .then(patchedPerson => {
          setPersons(persons.map(person => person.id !== id ? person : patchedPerson));
        })
        .catch(error => {
          setNotificationMessage(`${person.name} was removed from server`)
          setNotificationType(prevState => 'error')
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationType(null)
          }, 5000)
        })
      }
    }
    else {
      const newNameObject = { name: newName, number: newNumber }
      personsService
        .create(newNameObject)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNotificationMessage(`Added ${newPerson.name} successfully!`)
          setNotificationType('success')
          setTimeout(() => {
            setNotificationMessage(null)
            setNotificationType(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      personsService
      .remove(id)
      .then(response => {
        if (response) {
          setPersons(persons.filter(person => person.id !== id))
        }
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} type={notificationType}/>
      <Filter value={searchValue} handler={searchInputHandler} />
      <h3>Add a new</h3>
      <PersonForm addName={addName} nameInputHandler={nameInputHandler} newNumber={newNumber}
        numberInputHandler={numberInputHandler} newName={newName} />
      <h3>Numbers</h3>
      <Persons persons={persons} searchValue={searchValue} removePerson={removePerson}/>
    </div>
  )
}

export default App;
