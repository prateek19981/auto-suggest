import "./App.css";
import { getData } from "./api";
import { useState, useEffect, useCallback } from "react";
import useGetSuggestions from "./useGetSuggestions";
let flag = 0;
function App() {
  const [query, setQuery] = useState("");
  let data = useGetSuggestions(query);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    setSuggestions(data);
  }, [data]);

  return (
    <div className="App">
      <h1>Auto Suggest</h1>
      <div className="container">
        <div className="header">
          <input
            type="search"
            placeholder="search here"
            value={query}
            onChange={(e) => {
              setShowSuggestions(true);
              setQuery(e.target.value);
            }}
          />
          <button>Search</button>
        </div>

        {query && suggestions.length > 0 && showSuggestions && (
          <div className="searchResults">
            {suggestions.map((suggestion) => {
              return (
                <p
                  key={suggestion}
                  onClick={() => {
                    setShowSuggestions(false);
                    setQuery(suggestion);
                  }}
                >
                  {suggestion}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
