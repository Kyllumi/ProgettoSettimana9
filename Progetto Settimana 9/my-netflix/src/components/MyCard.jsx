import React from 'react';

export default function MyCard({ movies }) {
    console.log(movies);
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center mt-3 mx-1">
            {movies.slice(0, 6).map((e, index) => (
                <div key={index} style={{ backgroundImage: `url(${e})` }} className="singolaCard col mb-2 px-1"></div>
            ))}
        </div>
    );
}

