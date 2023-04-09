import { useState } from "react";

const Button = ({clickHandler, text}) => <button onClick={clickHandler}>{text}</button>

const StatisticsLine = ({text, value}) => {
  return (
    <tbody>
       <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </tbody>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <table>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      <StatisticsLine text="all" value={all} />
      <StatisticsLine text="average" value={average} />
      <StatisticsLine text="positive" value={positive} />
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNuetral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNuetral(neutral + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={handleGoodClick} text='good' />
      <Button clickHandler={handleNeutralClick} text='neutral' />
      <Button clickHandler={handleBadClick} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
