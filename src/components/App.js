import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";
import { productsData } from "./products";

const App = () => {
  const [products, setProducts] = useState(productsData);

  return (
    <Router>
      <div className="container">
        <nav style={{ margin: "20px 0" }}>
          <Link to="/">Home</Link> | <Link to="/admin">Admin Panel</Link>
        </nav>
        <Switch>
          <Route exact path="/" render={(props) => <ProductList {...props} products={products} />} />
          <Route path="/products/:id" render={(props) => <ProductDetails {...props} products={products} />} />
          <Route path="/admin" render={(props) => <AdminPanel {...props} products={products} setProducts={setProducts} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
