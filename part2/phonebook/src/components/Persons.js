import Person from "./Person";

const Persons = ({persons, searchValue, removePerson}) => {

    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(person => 
                    <Person key={person.id} name={person.name} number={person.number} 
                        buttonHandler={removePerson} id={person.id}/>
            )}
        </div>
    )
}

export default Persons;