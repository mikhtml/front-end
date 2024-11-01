import Hello from "./components/Hello"
import World from "./components/World"

const App = () => {
  return (
    /*JSx*/
    <div>
      <h1>Hello.</h1>
      <p>Additional</p>
      <Hello/>
      <World/>
    </div>
  )
}

export default App
