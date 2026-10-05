
import React from "react";
import spartaImage from "../assets/img/sparta.jpg";

export const NextRace = () => {
    return (
        <section className="container my-5">

            <div className="card shadow-lg border-0 overflow-hidden">

                <div className="row g-0">

                    {/* IMAGEN */}
                    <div className="col-md-5">
                        <img
                            src={spartaImage}
                            className="img-fluid h-100 w-100 object-fit-cover"
                            alt="Spartan Race"
                        />
                    </div>


                    {/* INFORMACIÓN */}
                    <div className="col-md-7">

                        <div className="card-body p-4 p-lg-5">

                            <span className="badge bg-dark mb-3">
                                🏆 PRÓXIMA CARRERA
                            </span>

                            <h2 className="card-title fw-bold mb-3">
                                Spartan Race Madrid
                            </h2>

                            <p className="card-text text-muted mb-4">
                                Nuestro próximo reto. Una nueva carrera,
                                nuevos obstáculos y una nueva oportunidad
                                para demostrar de qué está hecha la tribu.
                            </p>


                            {/* DATOS DE LA CARRERA */}
                            <div className="row g-3 mb-4">

                                <div className="col-6">
                                    <div className="border rounded p-3 h-100">
                                        <span className="fs-4">📅</span>
                                        <strong className="d-block">
                                            15 Noviembre 2026
                                        </strong>
                                        <small className="text-muted">
                                            Fecha
                                        </small>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className="border rounded p-3 h-100">
                                        <span className="fs-4">📍</span>
                                        <strong className="d-block">
                                            Madrid
                                        </strong>
                                        <small className="text-muted">
                                            Localización
                                        </small>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className="border rounded p-3 h-100">
                                        <span className="fs-4">🏃</span>
                                        <strong className="d-block">
                                            10 km
                                        </strong>
                                        <small className="text-muted">
                                            Distancia
                                        </small>
                                    </div>
                                </div>


                                <div className="col-6">
                                    <div className="border rounded p-3 h-100">
                                        <span className="fs-4">🧗</span>
                                        <strong className="d-block">
                                            25
                                        </strong>
                                        <small className="text-muted">
                                            Obstáculos
                                        </small>
                                    </div>
                                </div>

                            </div>


                            {/* PARTE INFERIOR */}
                            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center gap-3">

                                <span>
                                    👥 <strong>8</strong> Sköl Monkeys
                                </span>

                                <a
                                    href="https://www.spartanrace.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-dark px-4"
                                >
                                    Ver carrera →
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};


