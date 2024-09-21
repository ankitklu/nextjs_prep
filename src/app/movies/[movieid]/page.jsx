import React from 'react'

async function fetchMovie(id){
    const response= await fetch(`https://freetestapi.com/api/v1/movies/${id}`);
    const data= await response.json();
    return data;
}
async function movieData(props) {


    const movieId= props.params.movieid;
    const movieData = await fetchMovie(movieId);
    console.log(movieData);

  return (
    <>
        <div>Movie ID: {movieId}</div>
        <p>Movie name: {movieData.title}</p>
        <p>Language Name: {movieData.language}</p>
    </>
  )
}

export default movieData;