import { Route, Switch } from "react-router-dom";
import CartDetails from "../Components/CartDetails";
import Home from "../Pages/Home";
import ItemsDetails from "../Pages/ItemsDetail";


export default function AllRoutes(){

    return(
        <>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route exact path="/orders/:id">
                <ItemsDetails/>
              </Route>
              <Route exact to="/showCart">
                  <CartDetails/>
              </Route>
          </Switch>
        </>
    )
}