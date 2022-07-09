import React from 'react';
import {NavLink, Route, Router, Switch} from "react-router-dom";
import {CATEGORY} from "../../constants";
import AllQuotes from "../../components/AllQuotes/AllQuotes";
import QuotesByCategory from "../../components/QuotesByCategory/QuotesByCategory";
import QuoteForm from "../QuoteForm/QuoteForm";

const Categories = () => {
  return (
    <div className="row justify-content-between">
      <div className="col-4 p-5">
        <ul>
          <li>
            <NavLink to="/all/quotes" className="navLink">All</NavLink>
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

      <div className="col-7">
        <Switch>
          <Route path="/all/quotes" exact render={() => <AllQuotes/>}/>
          <Route path="/quotes/:category" render={() => <QuotesByCategory/>}/>
        </Switch>
      </div>

    </div>
  );
};

export default Categories;

// import React from 'react';
// import {NavLink, Route, Router, Switch} from "react-router-dom";
// import {CATEGORY} from "../../constants";
// import AllQuotes from "../../components/AllQuotes/AllQuotes";
// import QuotesByCategory from "../../components/QuotesByCategory/QuotesByCategory";
//
// const Categories = ({match}) => {
//   console.log(match)
//   return (
//     <div className="row justify-content-between">
//       <div className="col-4 p-5">
//         <ul>
//           <li>
//             <NavLink to={'/all-quotes'} className="navLink">All</NavLink>
//           </li>
//           {CATEGORY.map(category => (
//             <li key={category.id}>
//               <NavLink
//                 to={`/quotes/${category.id}`}
//                 className="navLink"
//                 activeStyle={{color: 'red'}}
//               >
//                 {category.title}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//
//       <div className="col-7">
//
//
//             <Route path={match.path + '/all-quotes'} render={() => <AllQuotes/>}/>
//             {/*<Route path="/quotes/:category" render={() => <QuotesByCategory/>}/>*/}
//
//
//       </div>
//
//     </div>
//   );
// };
//
// export default Categories;