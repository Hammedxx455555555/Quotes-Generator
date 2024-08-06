// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Qgenerator = () => {
  const [author, setAuthor] = useState('');
  const [quote, setQuote] = useState('');

  const getQuote = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      const quotes = response.data;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const randomQuote = quotes[randomIndex];
      setQuote(randomQuote.text);
      setAuthor(randomQuote.author || "Unknown");
    } catch (error) {
      setQuote("Error Getting Quotes");
      setAuthor("Check your internet connection & try again");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-10 rounded shadow-lg">
          <h1 className="text-xl text-red-500 font-bold mb-4">Author: <span className='text-sm text-gray-600 mx-auto'>{author}</span> </h1>
          <p className="text-xl text-red-500 font-bold mb-4">Quote: <span className='text-sm text-gray-600 mx-auto'>{quote}</span> </p>
          <div className="flex space-x-4">
            <button
              onClick={getQuote}
              className="bg-green-500 text-white font-bold px-4 py-2 rounded hover:bg-green-600"
            >
              Generate Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qgenerator;
