import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { TeamCarousel } from "../components/teamCarousel.jsx";
import { NextRace } from "../components/nextRace.jsx";
import SponsorsCarousel from "../components/SponsorsCarousel";

export const Home = () => {

    const { store, dispatch } = useGlobalReducer()

    const loadMessage = async () => {
        try {
            const backendUrl = import.meta.env.VITE_BACKEND_URL

            if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")

            const response = await fetch(backendUrl + "/api/hello")
            const data = await response.json()

            if (response.ok) dispatch({ type: "set_hello", payload: data.message })

            return data

        } catch (error) {
            if (error.message) throw new Error(
                `Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
            );
        }

    }

    useEffect(() => {
        loadMessage()
    }, [])

    return (
        <div className="home-page">

            {/* INTRO DEL EQUIPO */}
            <section className="team-intro">
                <h1>Sköl Monkeys OCR 🐒</h1>

                <p>
                    Somos un equipo apasionado por las carreras de obstáculos
                    (OCR), el entrenamiento y los retos que nos ponen a prueba.
                </p>

                <p>
                    Nos enfrentamos a cada carrera como una auténtica tribu
                    vikinga: <strong>superando obstáculos, ayudándonos entre
                        nosotros y disfrutando cada desafío juntos.</strong>
                </p>

                <p>
                    Barro, agua, muros, cuerdas o kilómetros de carrera...
                    <strong> no importa el obstáculo, lo importante es
                        cruzarlo juntos.</strong>
                </p>

                <div className="team-values">
                    <span>💪 Fuerza</span>
                    <span>🤝 Compañerismo</span>
                    <span>🏆 Superación</span>
                    <span>🔥 Diversión</span>
                </div>
            </section>

            {/* PRÓXIMA CARRERA */}

            <NextRace />


            {/* CARRUSEL DEL EQUIPO */}
            <section className="team-carousel-section">
                <h2>ÚLTIMAS FOTOS</h2>

                <TeamCarousel />
            </section>


            {/* FUTURAS SECCIONES */}
            
            <section className="sponsors-team-section">
               
                <SponsorsCarousel />
            </section>
        </div>
    );


}; 