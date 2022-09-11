import {useState} from 'react';

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}</p>
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
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} 
      all={all} average={average}
      positive={positive}
      />
    </div>
  )

}

export default App;
