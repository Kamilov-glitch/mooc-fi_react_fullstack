const Header = ({ text }) => <h2>{text}</h2>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Course = ({ course }) => {
    const {name, parts} = course
    const total = parts.reduce((s, p) => {
        return s + p.exercises
    }, 0)

    return (
        <div>
            <h1>Web Development Curriculum</h1>
            <Header text={name} />
            {parts.map(part => 
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            )}
            <h4>total of {total} exercises</h4>
        </div>
    )
}

export default Course