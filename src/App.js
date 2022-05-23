import './App.css';
import Header from './components/Nav/Header';
import Card from './components/UI/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Card>
        <h2>Testing</h2>
        <p>Here is a test card.</p>
      </Card>
    </div>
  );
}

export default App;
