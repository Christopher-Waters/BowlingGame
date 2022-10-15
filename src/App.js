import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { ScoreBoard } from './components/scoreboard';
import background from "./images/BowlingBackground.jpeg"

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` ,backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'}}>
      <Header/>
      <ScoreBoard />
    </div>
  );
}

export default App;
