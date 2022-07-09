import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";
import {NavLink, useParams} from "react-router-dom";

const QuotesByCategory = () => {
  const [quotes, setQuotes] = useState(null);
  const { category } = useParams();

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axiosApi(`/quotes.json?orderBy="category"&equalTo="${category}"`);
        setQuotes(response.data);
      }  catch (e) {
        alert(e.message);
      }
    };

    fetch().catch(e => console.error(e));
  }, [category]);

  const onRemove = async (quoteId) => {
    try {
      await axiosApi.delete(`/quotes/${quoteId}.json`);
      const response = await axiosApi(`/quotes.json?orderBy="category"&equalTo="${category}"`);
      setQuotes(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return quotes && (
    <div className="mt-5">
      <h3>{category.toUpperCase()}</h3>
      {Object.keys(quotes).map(quote => (
        <div className="alert alert-success m-2" key={quote}>
          <p>" {quotes[quote].text} "</p>
          <p>{quotes[quote].author}</p>
          <div className="text-right">
            <button type="button" className="btn btn-dark mr-2">
              <NavLink to={`/${quote}/edit`} className="navLink">Edit</NavLink>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onRemove(quote)}
            >
              Remove
            </button>
          </div>
        </div>
      )).reverse()}
    </div>
  );
};

export default QuotesByCategory;