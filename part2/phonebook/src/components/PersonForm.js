const PersonForm  = (props) => {
    const {
        addName, 
        newName, 
        nameInputHandler,
        newNumber,
        numberInputHandler
    } = props

    return (
        <form onSubmit={addName}>
            <div>
                name: <input value={newName} onChange={nameInputHandler} />
            </div>
            <div>
                number: <input value={newNumber} onChange={numberInputHandler} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm;