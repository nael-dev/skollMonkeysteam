import React from "react";
import { TeamCard } from "../components/teamCard";

import herculesImage from "../assets/img/hercules.jpg";
import flipaoImage from "../assets/img/flipao.jpg";
import tecnicoImage from "../assets/img/tecnico.jpg";

export const Team = () => {
    return (
        <div className="team-page container py-5">

            <h1 className="text-center mb-3">
                El equipo
            </h1>

            <h2 className="text-center mb-5">
                Conoce a los integrantes de Sköl Monkeys OCR.
            </h2>

            <div className="row g-4">

                <div className="col-12 col-md-6">
                    <TeamCard
                        img={herculesImage}
                        name="Gonzalo Cordero"
                        role="Hércules. Siempre participa en pareja porque le da pereza participar en Elite, va de sobrao."
                    />
                </div>

                <div className="col-12 col-md-6">
                    <TeamCard
                        img={flipaoImage}
                        name="Ángel Maya"
                        role="El líder del equipo, el presi, el flipado de las OCR. No tiene rival, es aburrido verle porque siempre gana. Simplemente il puto amo."
                    />
                </div>

                <div className="col-12 col-md-6">
                    <TeamCard
                        img={tecnicoImage}
                        name="Rafa Ruiz"
                        role="Siempre crees que no va a llegar, pero siempre aparece. Se mantiene como el buen vino y, aunque siempre dice que ya no da para más, siempre se reinventa."
                    />
                </div>

            </div>
        </div>
    );
};