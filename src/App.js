import {Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Categories from "./containers/Categories/Categories";
import QuoteForm from "./containers/QuoteForm/QuoteForm";

function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route path="/" component={Categories}/>
        <Route path="/add-quote" component={QuoteForm}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </>
  );
}

export default App;
