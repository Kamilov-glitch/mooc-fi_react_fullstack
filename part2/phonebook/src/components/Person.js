const Person = ({id, name, number, buttonHandler}) => {

    return (
        <div>
            <p>{name} {number}</p>
            <button onClick={() => buttonHandler(id, name)}>Delete</button>
        </div>
    )
}

export default Person;