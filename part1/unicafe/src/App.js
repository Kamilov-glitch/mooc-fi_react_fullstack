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
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.all}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{props.average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.positive}</td>
        </tr>
      </tbody>
    </table>
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
