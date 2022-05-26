import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Nav/Header';
import Jumbotron from './components/UI/Jumbotron';
import { CartContextProvider } from './store/cart-context';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Header />
        <Jumbotron
          image={process.env.PUBLIC_URL + '/food.jpg'}
          className="welcome"
        >
          <h1 style={{ textAlign: 'center' }}>
            Delicious Food, Delivered to You
          </h1>
          <p>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </Jumbotron>
        <Menu />
      </CartContextProvider>
    </div>
  );
}

export default App;
