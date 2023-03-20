import React, { useEffect, useState } from 'react'
import "./Home.scss"

// importing axios to fetch API
import axios from "axios";
import { Link } from 'react-router-dom';
import {BiPlay} from "react-icons/bi";
import {AiOutlinePlus} from "react-icons/ai";

// saving api key locally but will save it later in .env file
// const apiKey = your api key from themoviedb website api;
const url = "https://api.themoviedb.org/3";
const imgUrl= "https://image.tmdb.org/t/p/original"

// Baners data fetching from API
const upcoming="upcoming";
const nowPlaying="now_playing";
const popular="popular";
const topRated="top_rated";


const Card= ({ img })=>(
  <img className='card' src={img} alt="movie cover" />
)

const Row =({title, arr = [] }) =>(
  <div className='row'>
    <h2> {title} </h2>

    <div>
      {/* Here we are using array map() to load cards which we will fetch with api */}
      {
        
        arr.map((item, index)=>(
          <Card key={index}  img={`${imgUrl}/${item.poster_path}`}/>
        ))

      }

    </div>

  </div>
)


const Home = () => {

    // using use state to store result of upcoming url result in array
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [genre, setGenre] = useState([]);

  // using useEffect to fetch api every time page loads/ refreshes 
  useEffect(() => {

    // whenever Home component mount/loads this function will be called
    // we are using Asynch arrow function because we dont know when api will load to avoid lagging we will use async funtion
    const fetchUpcoming = async ()=>{
      // Destructuring results
      const {data: {results},} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=1`)
      setUpcomingMovies(results);
    };
    const fetchNowPlaying = async ()=>{
      // Destructuring results
      const {data: {results},} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}&page=1`)
      setNowPlayingMovies(results);
    };
    const fetchPopularMovies = async ()=>{
      // Destructuring results
      const {data: {results},} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}&page=1`)
      setPopularMovies(results);
    };
    const fetchTopRatedMovies = async ()=>{
      // Destructuring results
      const {data: {results},} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}&page=1`)
      setTopRatedMovies(results);
    };

    const getAllGenre = async ()=>{
      // Destructuring results
      const {data: {genres},} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres);
      
    };

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopularMovies();
    fetchTopRatedMovies();
    getAllGenre();

    
  }, [])
  const checkUrl = "https://image.tmdb.org/t/p/original/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg";
  console.log(genre);
  return (
    
    <section className="home">
      <div className="banner" style={{
        backgroundImage:`url(${checkUrl})`
      }}>

        <h1>Ant-Man and the Wasp: Quantumania</h1>
        <p>
        Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.
        </p>

        <div>
          <button>Play <BiPlay/></button>
          <button>My List <AiOutlinePlus/></button>
        </div>
        
      </div>

{/* Rows of netflix categories */}

      <Row title="Popular on Netflix" arr={popularMovies}/>
      <Row title="Now Playing" arr={nowPlayingMovies}/>
      <Row title="Top Rated" arr={topRatedMovies}/>
      <Row title="Upcoming" arr={upcomingMovies}/>

      <div className='genreBox'>
        {
          genre.map((item)=>(
            <Link key={item.id} to={`/genre/${item.id}`}>{item.name}</Link>
          ))}
      </div>

    </section>
  )
}

export default Home
