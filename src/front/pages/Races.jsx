import RaceCard from "../components/RaceCard";
import Farinato from "../assets/img/Farinato.png";
import Spartan from "../assets/img/spartan.jpg";

export const Races = () => {

    return (
        <div className="container py-5">

            <h1 className="text-center mb-5">
                Próximas carreras
            </h1>

            <div className="row g-4">

                <div className="col-12 col-md-6 col-lg-4">
                    <RaceCard
                        name="Spartan Race Valencia"
                        date="18 Octubre 2026"
                        location="Valencia"
                        distance="10 KM"
                        obstacles="30"
                        type="OCR"
                        image={Farinato}
                        url="https://www.spartanrace.com/"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <RaceCard
                        name="Farinato Race"
                        date="25 Octubre 2026"
                        location="Madrid"
                        distance="8 KM"
                        obstacles="25"
                        type="OCR"
                        image={Spartan}
                        url="#"
                    />
                </div>

            </div>

        </div>
    );
};