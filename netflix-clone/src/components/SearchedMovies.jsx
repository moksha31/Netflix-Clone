import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

function SearchedMovies({ data }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <Container>
        <p className="no-results">No results found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="content flex column">
        <h1>Search Results</h1>
        <div className="grid flex">
          {data.map((data, index) => {
            return (
              <Card
                movieData={data}
                index={index}
                key={data.id}
                isLiked={false}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 2rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
    .imegh {
      width: 100%;
      height: 200px;
    }
  }
  .no-results {
    text-align: center;
    margin-top: 2rem;
    font-size: 1.5rem;
  }
`;

export default SearchedMovies;
