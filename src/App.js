import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { ScoreBoard } from './components/scoreboard';

function App() {
  return (
    <div className="App">
      <Header/>
      <ScoreBoard />
    </div>
  );
}

export default App;
