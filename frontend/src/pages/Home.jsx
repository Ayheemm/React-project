import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");



    const movies = [
        { id: 1, title: "Inception", release_date: "2024" },
        { id: 2, title: "Interstellar", release_date: "2014" },
        { id: 3, title: "The Dark Knight", release_date: "2008" },
        { id: 4, title: "The Equalizer", release_date: "2022" }


    ]

const handleSearch = (e) => {
    e.preventDefalut()
    alert(searchQuery);

}
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text " placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
                <button type="submit" className="search-button">Search</button>
            </form>
            <div className="movies-grid">
               {movies.map(movie => <MovieCard movie ={movie} key={movie.id}/>)}
            </div>
        </div>
    );
}export default Home;