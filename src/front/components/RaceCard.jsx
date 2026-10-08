import React from "react";

const RaceCard = ({
    name,
    date,
    location,
    distance,
    obstacles,
    type,
    image,
    url
}) => {
    return (
        <div className="race-card">

            {/* Imagen */}
            <div className="race-card-image">
                <img src={image} alt={name} />

                <span className="race-badge">
                    {type}
                </span>
            </div>

            {/* Contenido */}
            <div className="race-card-body">

                <h3>{name}</h3>

                <div className="race-info">
                    <div>
                        <span>📅</span>
                        <span>{date}</span>
                    </div>

                    <div>
                        <span>📍</span>
                        <span>{location}</span>
                    </div>
                </div>

                <div className="race-stats">
                    <span>{distance}</span>
                    <span>{obstacles} obstáculos</span>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="race-button"
                >
                    Ver carrera →
                </a>

            </div>
        </div>
    );
};

export default RaceCard;