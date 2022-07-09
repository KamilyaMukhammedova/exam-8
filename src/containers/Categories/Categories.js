import React from 'react';
import {NavLink, Route, Router, Switch} from "react-router-dom";
import {CATEGORY} from "../../constants";
import AllQuotes from "../../components/AllQuotes/AllQuotes";

const Categories = ({history}) => {
  return (
    <div className="row justify-content-between">
      <div className="col-4 p-5">
        <ul>
          <li>
            <NavLink to="/all-quotes" className="navLink">All</NavLink>
          </li>
          {CATEGORY.map(category => (
            <li key={category.id}>
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

      <div className="col-7 overflow-auto">
        <Router history={history}>
          <Switch>
            <Route path="/all-quotes" exact render={() => <AllQuotes/>}/>
          </Switch>
        </Router>
      </div>

    </div>
  );
};

export default Categories;