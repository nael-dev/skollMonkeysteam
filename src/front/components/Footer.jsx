
import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import footer from "../assets/img/logo.jpeg";

export const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">

            <div className="container py-5">

                <div className="row g-4">

                    {/* LOGO Y DESCRIPCIÓN */}
                    <div className="col-12 col-md-5 text-center text-md-start">

                        <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-center gap-3">

                            <img
                                src={footer}
                                alt="Sköl Monkeys OCR"
                                className="rounded-circle object-fit-cover"
                                width="90"
                                height="90"
                            />

                            <div>
                                <h4 className="fw-bold mb-1">
                                    SKÖL MONKEYS OCR
                                </h4>

                                <p className="text-secondary mb-0">
                                    Fuerza · Compañerismo · Superación
                                </p>
                            </div>

                        </div>

                        <p className="text-secondary mt-4 mb-0">
                            Un equipo unido por la pasión por las carreras
                            de obstáculos, el entrenamiento y los retos.
                        </p>

                    </div>


                    {/* NAVEGACIÓN */}
                    <div className="col-6 col-md-3 text-center text-md-start">

                        <h6 className="fw-bold mb-3">
                            EXPLORA
                        </h6>

                        <ul className="list-unstyled mb-0">

                            <li className="mb-2">
                                <Link
                                    to="/"
                                    className="text-secondary text-decoration-none"
                                >
                                    Inicio
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/equipo"
                                    className="text-secondary text-decoration-none"
                                >
                                    Equipo
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/noticias"
                                    className="text-secondary text-decoration-none"
                                >
                                    Noticias
                                </Link>
                            </li>

                            <li className="mb-2">
                                <Link
                                    to="/carreras"
                                    className="text-secondary text-decoration-none"
                                >
                                    Carreras
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/obstaculos"
                                    className="text-secondary text-decoration-none"
                                >
                                    Obstáculos
                                </Link>
                            </li>

                        </ul>

                    </div>


                    {/* REDES SOCIALES */}
                    <div className="col-6 col-md-4 text-center text-md-start">

                        <h6 className="fw-bold mb-3">
                            SÍGUENOS
                        </h6>

                        <p className="text-secondary">
                            Síguenos y acompáñanos en nuestros próximos retos.
                        </p>

                        <div className="d-flex justify-content-center justify-content-md-start gap-2">

                            <a
                                href="https://www.instagram.com/skolmonkeysocr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-light rounded-circle"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="btn btn-outline-light rounded-circle"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="btn btn-outline-light rounded-circle"
                                aria-label="GitHub"
                            >
                                <PiGithubLogoFill />
                            </a>

                        </div>

                    </div>

                </div>

            </div>


            {/* COPYRIGHT */}
            <div className="border-top border-secondary">

                <div className="container py-3">

                    <p className="text-secondary text-center mb-0 small">
                        © 2026 Sköl Monkeys OCR · Todos los derechos reservados
                    </p>

                </div>

            </div>

        </footer>
    );
};
