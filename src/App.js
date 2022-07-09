import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import AllQuotes from "./containers/AllQuotes/AllQuotes";
import QuoteForm from "./containers/QuoteForm/QuoteForm";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Switch>
        <Route path="/" exact component={AllQuotes}/>
        <Route path="/add-quote" component={QuoteForm}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
