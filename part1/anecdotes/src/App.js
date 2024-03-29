import { useState } from 'react'

const Anecdote = ({ entry, anecdote, votes }) => {

  return (
    <div>
      <h1>{entry}</h1>
      <p>{anecdote}</p>
      <p> has {votes} votes</p>
  </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandomInt = (max) => Math.floor(Math.random() * max)
   
  const [selected, setSelected] = useState(0)
  const [votesArray, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () => setSelected(getRandomInt(anecdotes.length))
  const handleVote = () => {
    const copy = [...votesArray]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxValue = Math.max(...votesArray)
  const indexOfMaxValue = votesArray.indexOf(maxValue)

  return (
    <div>
      <Anecdote entry={'Anecdote of the day'} anecdote={anecdotes[selected]} votes={votesArray[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <Anecdote entry={'Anecdotes with most votes'} anecdote={anecdotes[indexOfMaxValue]} votes={maxValue} />
    </div>
  )
}

export default App
