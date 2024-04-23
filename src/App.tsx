import './App.css'
import Counter from './counter'
import SecondCounter from './secondCounter'

function App() {
  return (
    <div>
      <h1>React Signals</h1>
      <div className="card">
        <Counter />
        <SecondCounter />
        <p>
          Edit <code>src/App.tsx</code> to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
