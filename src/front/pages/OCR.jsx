import ObstacleCard from "../components/ObstacleCard";


import monkeyBars from "../assets/img/monkey-bars.jpg";
import ropeClimb from "../assets/img/rope-climb.jpg";
import wall from "../assets/img/wall.jpg";
import multiRig from "../assets/img/multi-rig.jpg";
import carry from "../assets/img/carry.jpg";

const obstacles = [
    {
        number: "01",
        name: "Monkey Bars",
        type: "Suspensión",
        skills: "Agarre · Coordinación · Fuerza",
        image: monkeyBars,
        description:
            "Desplázate de barra en barra utilizando el agarre y el movimiento de tu cuerpo."
    },
    {
        number: "02",
        name: "Rope Climb",
        type: "Ascenso",
        skills: "Fuerza · Técnica · Agarre",
        image: ropeClimb,
        description:
            "Sube por la cuerda utilizando una técnica eficiente para ahorrar energía."
    },
    {
        number: "03",
        name: "Wall",
        type: "Superación",
        skills: "Potencia · Técnica · Coordinación",
        image: wall,
        description:
            "Supera el muro utilizando velocidad, potencia y una buena técnica de impulso."
    },
    {
        number: "04",
        name: "Multi Rig",
        type: "Suspensión",
        skills: "Agarre · Coordinación · Resistencia",
        image: multiRig,
        description:
            "Avanza por diferentes elementos suspendidos sin perder el control."
    },
    {
        number: "06",
        name: "Carries",
        type: "Carga",
        skills: "Fuerza · Resistencia · Agarre",
        image: carry,
        description:
            "Transporta una carga determinada manteniendo el ritmo y controlando la fatiga."
    }
];

export const OCR = () => {
    return (
        <main className="ocr-page">

            {/* HERO */}
            <section className="ocr-hero">
                <div className="ocr-hero-overlay"></div>

                <div className="container ocr-hero-content">
                    <span className="ocr-eyebrow">
                        SKOLLMONKEYS · OCR
                    </span>

                    <h1>
                        CORRE.
                        <br />
                        SUPERA.
                        <br />
                        RESISTE.
                    </h1>

                    <p>
                        Descubre el mundo de las carreras de obstáculos,
                        aprende a enfrentarte a ellos y prepárate para tu
                        próxima aventura.
                    </p>

                    <a href="#obstacles" className="btn btn-light">
                        Explorar obstáculos ↓
                    </a>
                </div>
            </section>

            {/* INTRO */}
            <section className="ocr-intro container">

                <div className="ocr-section-heading">
                    <span>EL MUNDO OCR</span>

                    <h2>
                        MÁS QUE
                        <br />
                        CORRER
                    </h2>

                    <p>
                        Una OCR combina resistencia, fuerza, técnica y
                        capacidad para superar obstáculos. Cada carrera
                        plantea un desafío diferente.
                    </p>
                </div>

                <div className="ocr-skills">

                    <div className="ocr-skill">
                        <span>🏃</span>
                        <h3>Resistencia</h3>
                        <p>
                            Mantén el ritmo incluso cuando las piernas
                            empiezan a pesar.
                        </p>
                    </div>

                    <div className="ocr-skill">
                        <span>💪</span>
                        <h3>Fuerza</h3>
                        <p>
                            Empuja, tira, carga y supera cada desafío.
                        </p>
                    </div>

                    <div className="ocr-skill">
                        <span>🧗</span>
                        <h3>Técnica</h3>
                        <p>
                            La técnica puede marcar la diferencia en un
                            obstáculo.
                        </p>
                    </div>

                    <div className="ocr-skill">
                        <span>🔥</span>
                        <h3>Actitud</h3>
                        <p>
                            Cuando aparece el cansancio, la cabeza también
                            compite.
                        </p>
                    </div>

                </div>

            </section>

            {/* OBSTÁCULOS */}
            <section id="obstacles" className="ocr-obstacles">

                <div className="container">

                    <div className="ocr-section-heading obstacles-heading">
                        <span>DESAFÍOS</span>

                        <h2>
                            CONOCE LOS
                            <br />
                            OBSTÁCULOS
                        </h2>

                        <p>
                            Algunos de los obstáculos que puedes encontrar
                            en una carrera OCR.
                        </p>
                    </div>

                    <div className="obstacles-list">

                        {obstacles.map((obstacle) => (
                            <ObstacleCard
                                key={obstacle.number}
                                obstacle={obstacle}
                            />
                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
};