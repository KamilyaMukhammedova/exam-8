import React, {useEffect, useState} from 'react';
import {CATEGORY} from "../../constants";
import axiosApi from "../../axiosApi";
import {useParams} from "react-router-dom";

const QuoteForm = ({history}) => {
  const [quote, setQuote] = useState({
    author: '',
    category: '',
    text: '',
  });

  const [isEdited, setIsEdited] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    if (id) {
      setIsEdited(true);
      const fetchEditedQuote = async () => {
        try {
          const response = await axiosApi(`/quotes/${id}.json`);
          await setQuote(response.data);
        } catch (e) {
          console.error(e);
        }
      };

      fetchEditedQuote().catch(e => console.error(e));
    } else {
      setIsEdited(false);
      setQuote({
        author: '',
        category: '',
        text: '',
      });
    }

  }, [id]);

  const onChange = (e) => {
    const {name, value} = e.target;
    setQuote(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axiosApi.post('/quotes.json', {
        author: quote.author,
        category: quote.category,
        text: quote.text
      });
      history.push('/quotes/all');
    } catch (e) {
      alert('Something gone wrong!');
      console.error(e);
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <form className="col-5 border p-3" onSubmit={onSubmit}>
        {!isEdited ? <h2>Submit new quote</h2> : <h2>Edit a quote</h2>}
        <div className="form-group">
          <label>Category</label>
          <select
            className="form-control"
            name="category"
            value={quote.category}
            onChange={onChange}
          >
            <option value="" disabled>Choose here</option>
            {CATEGORY.map(category => (
              <option value={category.id} key={category.id}>{category.title}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            name="author"
            value={quote.author}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label>Quote text</label>
          <textarea
            className="form-control"
            rows="3"
            name="text"
            value={quote.text}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-success"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;