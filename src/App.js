import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Categories from "./containers/Categories/Categories";
import QuoteForm from "./containers/QuoteForm/QuoteForm";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={Categories}/>
        <Route path="/quotes" component={Categories}/>
        <Route path="/add-quote" component={QuoteForm}/>
        <Route path="/:id/edit" component={QuoteForm}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

