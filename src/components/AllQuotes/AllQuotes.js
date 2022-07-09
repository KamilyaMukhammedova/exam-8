import React, {useEffect, useState} from 'react';
import axiosApi from "../../axiosApi";

const AllQuotes = () => {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axiosApi('/quotes.json');
        setQuotes(response.data);
      } catch (e) {
        alert(e.message);
      }
    };

    fetchQuotes().catch(e => console.error(e));
  }, []);

  return quotes && (
    <div className="mt-5">
      {Object.keys(quotes).map(quote => (
        <div className="alert alert-dark m-2" key={quote}>
          <p>" {quotes[quote].text} "</p>
          <p>{quotes[quote].author}</p>
          <div className="text-right">
            <button type="button" className="btn btn-success mr-2">Edit</button>
            <button type="button" className="btn btn-danger">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllQuotes;