const Persons = ({persons, searchValue}) => {

    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(searchValue.toLowerCase()))
                .map(person => 
                <p key={person.name}>{person.name} {person.number}</p>
            )}
        </div>
    )
}

export default Persons;