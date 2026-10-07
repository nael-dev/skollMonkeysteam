import { NewsCard } from "../components/NewsCard";

export const News = () => {
    return (
        <div className="container py-5">

            <h1 className="text-center mb-3">
                Noticias
            </h1>

            <p className="text-center mb-5">
                Todas las novedades de Sköl Monkeys OCR.
            </p>

            <div className="row g-4">

                <div className="col-12 col-md-6">
                    <NewsCard
                        instagramUrl="https://www.instagram.com/p/DeMZi-uoikr/"
                        date="7 octubre 2026"
                        title="Sköl Monkeys se abre al mundo"
                        text="**Skollmonkeys se abre al mundo.** 🐒⚔️
                        Aquí no importa de dónde vengas, solo las ganas de superar obstáculos, compartir el camino y disfrutar de cada desafío. 
                        **Si quieres formar parte de la manada, las puertas están abiertas.**"

                    />
                </div>


            </div>

        </div>
    );
};