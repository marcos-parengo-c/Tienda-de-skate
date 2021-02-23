import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BnavBar from './components/bootsnavbar';
import ItemListContainer from './containers/ItemListContainer'
import ItemDetail from './containers/ItemDetail'
import Checkout from './containers/Checkout'
import { CartProvider } from './context/cartContext.jsx'
import { productContext } from './context/productContext.jsx'

const App = () => {
  const [listaDeItems] = useState([{
    "name": "Ruedas Bones Original Formula 54mm",
    "price": 5000,
    "stock": 10,
    "image": "/images/products/Rueda.jpg",
    "defaultStock": 10,
    "brand": "Bones",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Ruedas Bones OF New Ground 52mm",
    "price": 3711,
    "stock": 10,
    "image": "/images/products/Rueda2.jpg",
    "defaultStock": 10,
    "brand": "Bones",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Ruedas Spitfire Afterburner 54mm",
    "price": 2675,
    "stock": 10,
    "image": "/images/products/Rueda3.jpg",
    "defaultStock": 10,
    "brand": "Spitfire",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Lija micro perforada Grizzly OG black",
    "price": 1000,
    "stock": 10,
    "image": "/images/products/Lija.jpg",
    "defaultStock": 10,
    "brand": "Grizzly",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Lija Grizzly Tie-Dye",
    "price": 867,
    "stock": 10,
    "image": "/images/products/Lija2.jpg",
    "defaultStock": 10,
    "brand": "Grizzly",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Lija Grizzly Palm Trees",
    "price": 867,
    "stock": 10,
    "image": "/images/products/Lija3.jpg",
    "defaultStock": 10,
    "brand": "Grizzly",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Tabla element sections",
    "price": 5000,
    "stock": 10,
    "image": "/images/products/Tabla.jpg",
    "defaultStock": 10,
    "brand": "Element",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Tabla Creature Pappo Blues",
    "price": 5000,
    "stock": 10,
    "image": "/images/products/Tabla2.jpg",
    "defaultStock": 10,
    "brand": "Element",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Tabla Check Skate A.C.A.B.",
    "price": 1200,
    "stock": 10,
    "image": "/images/products/Tabla3.jpg",
    "defaultStock": 10,
    "brand": "Element",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "Rulemanes Red Bones",
    "price": 4000,
    "stock": 8,
    "image": "/images/products/Rulemanes.jpg",
    "defaultStock": 10,
    "brand": "RedBones",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  },
  {
    "name": "BAKER 4 LIFE hollow",
    "price": 5000,
    "stock": 20,
    "image": "/images/products/Truck.jpg",
    "defaultStock": 10,
    "brand": "Independent",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit euismod mauris eget luctus. Maecenas pretium hendrerit lectus, eget interdum magna ullamcorper id. Integer molestie nisl massa, at vehicula lacus consectetur sed. Proin in urna in est lacinia venenatis. Vestibulum vulputate porttitor libero vel pellentesque. Vivamus suscipit mauris arcu, dapibus pulvinar felis accumsan in. Donec ultrices dui sit amet tellus euismod suscipit. Pellentesque eget malesuada sapien. Vivamus hendrerit mi nec laoreet gravida. Nam suscipit augue urna, vel faucibus sem eleifend et. Etiam euismod lobortis tellus, at maximus eros vehicula ut. Fusce tincidunt lobortis massa vitae faucibus. Integer nec fermentum lorem.",
    "image1": "/images/products/Tabla2.jpg",
    "image2": "/images/products/Tabla3.jpg",
  }])
  return (
    <productContext.Provider value={listaDeItems}>
      <CartProvider>
        <BrowserRouter>
          <div className="App">
            <BnavBar linkTo={"https://www.thrashermagazine.com/"} />
            <Switch>
              <Route exact path="/">
                <ItemListContainer listaDeItems={listaDeItems} />
              </Route>
              <Route exact path="/category/:id">
                <ItemListContainer listaDeItems={listaDeItems} />
              </Route>
              <Route exact path="/itemDetail/:id">
                <ItemDetail listaDeItems={listaDeItems} />
              </Route>
              <Route exact path="/Checkout">
                <Checkout />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </CartProvider>
    </productContext.Provider>
  );
}
export default App;
