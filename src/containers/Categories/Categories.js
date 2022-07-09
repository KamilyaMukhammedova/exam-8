import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import {CATEGORY} from "../../constants";
import AllQuotes from "../../components/AllQuotes/AllQuotes";
import QuotesByCategory from "../../components/QuotesByCategory/QuotesByCategory";

const Categories = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-4 p-5">
        <ul>
          <li className="mb-3">
            <NavLink to="/quotes/all" className="navLink" activeStyle={{color: 'red'}}>All</NavLink>
          </li>
          {CATEGORY.map(category => (
            <li key={category.id} className="mb-3">
              <NavLink
                to={`/quotes/${category.id}`}
                className="navLink"
                activeStyle={{color: 'red'}}
              >
                {category.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-6" style={{overflow: 'scroll', height: '90vh'}}>
        <Switch>
          <Route path="/quotes/all" exact render={() => <AllQuotes/>}/>
          <Route path="/quotes/:category" render={() => <QuotesByCategory/>}/>
        </Switch>
      </div>
    </div>
  );
};

export default Categories;

