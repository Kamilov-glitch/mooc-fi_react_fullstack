const Country = (props) => {
   
    if (!props) {
        return null
    }

    const {name, capital, area, languages, flag} = props

    return (
        <div>
            <h1>{name}</h1>
            <p>capital {capital}</p>
            <p>area {area}</p>
            <h4>languages:</h4>
            <ul>
                {languages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img src={flag} />
        </div>
    )
}

export default Country