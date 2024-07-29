import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import SearchedMovies from "../components/SearchedMovies";
import { API_KEY, TMDB_BASE_URL } from "../utils/constants";
import Navbar from "../components/Navbar";

function Search() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const fetchData = async () => {
    console.log("Fetching data for query:", query);
    try {
      const response = await axios.get(`${TMDB_BASE_URL}/search/multi`, {
        params: {
          api_key: API_KEY,
          query,
          page: 1,
          include_adult: false,
        },
      });
      console.log("Response data:", response.data.results);
      setData(response.data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setData(null); // Clear previous results
      fetchData();
    }
  };
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <Navbar isScrolled={isScrolled} />
      <FormContainer>
        <Form onSubmit={handleSearch}>
          <FaSearch onClick={handleSearch} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type and click on search icon"
          />
        </Form>
      </FormContainer>

      {data && <SearchedMovies data={data} />}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: block;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  width: 90%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: #0c111b;
  width: 80%;
  padding: 10px;
  border-radius: 5px;

  input {
    outline: none;
    border: none;
    width: 85%;
    color: white;
    background-color: #0c111b;
    padding: 5px;
    margin-left: 10px;

    @media (max-width: 700px) {
      width: 70%;
    }
  }

  svg {
    color: white;
    cursor: pointer;
  }
`;

export default Search;
