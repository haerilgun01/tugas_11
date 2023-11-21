import React from 'react';
import styles from "styled-components"

const Movie = (props) => {
    const { title, date, image, genre } = props
    const url_image =` https://image.tmdb.org/t/p/w300/${image}`
    return (
    <MovieStyle>
        <img 
            className={"movie__image"}
            src={url_image}
            alt=""
        />
            <h3 className={"movie__title"}>{title}</h3>
            <h2 className={"movie__genre"}>{genre}</h2>
            <p className={"movie__date"}>{date}</p>
    </MovieStyle>
    );
}

const MovieStyle = styles.div`
    margin-bottom: 1rem;

    
    .movie__image {
        border-radius: 25px;
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    .movie__title {
        color: #2741b6;
        font-size: 1.95rem;
        margin-bottom: 0.5rem;
    }

    .movie__genre {
        color: rgb(85, 107, 209);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }


    .movie__date {
        color: #578ad6;
        font-size: 1.2rem;
    }

    @media (min-width: 768px) {
            flex-basis: 50%;
    }

    @media (min-width: 992px) {
            flex-basis: 25%;
            padding: 1rem;
    }
`

export default Movie;
