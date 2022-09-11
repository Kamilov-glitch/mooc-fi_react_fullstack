import {useState} from 'react';

const StatisticLine = ({text, value}) => {
  return <p>{text} {value}</p>
}

const Button = ({text, method}) => {
  return <button onClick={method}>{text}</button>
}

const Statistics = (props) => {
  if (props.all === 0) {
    return "No feedback given"
  }
  return (
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const average = (good - bad) / all;
  const positive = good / all;

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  }
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" method={handleGood}/>
      <Button text="neutral" method={handleNeutral}/>
      <Button text="bad" method={handleBad}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} 
      all={all} average={average}
      positive={positive}
      />
    </div>
  )

}

export default App;
