import './App.css';
import Header from './components/Nav/Header';
import Card from './components/UI/Card';
import Jumbotron from './components/UI/Jumbotron';

function App() {
  return (
    <div className="App">
      <Header />
      <Jumbotron
        image={process.env.PUBLIC_URL + '/food.jpg'}
        className="welcome"
      >
        <h1 style={{ textAlign: 'center' }}>
          Delicious Food, Delivered to You
        </h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Jumbotron>
      <Card>
        <h2>Testing</h2>
        <p>Here is a test card.</p>
      </Card>
    </div>
  );
}

export default App;
