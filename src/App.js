import './App.css';

const lifts = [
  "Bent Row",
  "Bicep Curl",
  "Chest Fly",
  "Machine Press",
  "Chin Up",
  "Deadlift",
  "Face Pull",
  "Front Raise"
]

function SearchBar() {
  return (
    <input type="text" placeholder="search..." />
  );
}
function LiftRow({ lift }) {
  return (
    <tr>
        <td>{lift}</td>
        <td><input type="date" placeholder="date" /></td>
        <td><input type="number" placeholder="weight (lbs)" /></td>
    </tr>
  );
}

function LiftTable({ lifts }) {
  const rows = [];
  lifts.forEach((lift) => {
    rows.push(<LiftRow lift={lift} />)
  }
  )

  return (
    <div className="liftTable">
      <table className="liftTable">
        <thead>
          <tr>
            <th>Lift</th>
            <th>Date</th>
            <th>Weight (lbs)</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      <button onClick={() => alert('clicked!')}>Submit</button>
    </div>
    
  );
}
function FilterableTable({ lifts }) {
  return (
    <>
      <SearchBar />
      <LiftTable lifts={lifts}/>
    </>
  );
}
export default function App() {
  return (
    <div className="App">
      <h1>Lift Tracker</h1>
      <FilterableTable lifts={lifts} />
    </div>
  );
}


