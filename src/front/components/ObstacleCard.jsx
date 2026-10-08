export default function ObstacleCard({ obstacle }) {
    return (
        <article className="obstacle-card">

            <div className="obstacle-image">
                <img
                    src={obstacle.image}
                    alt={obstacle.name}
                />

                <span className="obstacle-number">
                    {obstacle.number}
                </span>
            </div>

            <div className="obstacle-content">

                <span className="obstacle-type">
                    {obstacle.type}
                </span>

                <h3>{obstacle.name}</h3>

                <span className="obstacle-skills">
                    {obstacle.skills}
                </span>

                <p>
                    {obstacle.description}
                </p>

                <button className="obstacle-button">
                    Ver obstáculo →
                </button>

            </div>

        </article>
    );
}