import { Link } from 'react-router-dom';

function MovieCard({ src, title, release_date, vote_average, id }) {
    return (
        <div className="shadow-md rounded-lg overflow-hidden">
            <Link to={`/movie/${id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${src}`} alt={title} />
                <h3>{title}</h3>
                <p>{release_date}</p>
                <p>{vote_average}</p>
            </Link>
        </div>
    );
}

export default MovieCard;
