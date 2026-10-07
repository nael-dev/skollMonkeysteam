export const TeamCard = ({ img, name, role }) => {
    return (
        <div className="team-card h-100">

            <div className="team-card-image">
                <img
                    src={img}
                    alt={name}
                />
            </div>

            <div className="team-card-content">
                <h3>{name}</h3>

                <div className="team-card-divider"></div>

                <p>{role}</p>
            </div>

        </div>
    );
};