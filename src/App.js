import './App.css';
import Header from './common/header/Header';
import {BrowserRouter as Router, Switch} from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
      <Header />
      <Switch>
          {/* <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems} />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route> */}
        </Switch>
    </Router>
    </>
  );
}

export default App;
