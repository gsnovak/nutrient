import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const resetSearchInput = () => {
    setSearchInput("");
  };

  const handleSearchInputChange = e => {
    setSearchInput(e.target.value);
  };

  const handleSearchOnClick = e => {
    e.preventDefault();
    search(searchInput);
    resetSearchInput();
  };

  return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" value={searchInput} onChange={handleSearchInputChange} />
        </Form.Group>
        <Form.Group>
          <Button onClick={handleSearchOnClick} type="submit" variant="primary">
            Search
          </Button>
        </Form.Group>
      </Form>
  );
};

export default Search;