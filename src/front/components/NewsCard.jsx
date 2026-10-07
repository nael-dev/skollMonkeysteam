
import { useEffect } from "react";

export const NewsCard = ({ instagramUrl, title, date, text }) => {

    useEffect(() => {
        // Si Instagram ya tiene cargado su script
        if (window.instgrm) {
            window.instgrm.Embeds.process();
            return;
        }

        // Si no está cargado, lo añadimos
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;

        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };

        document.body.appendChild(script);

        return () => {
            // No eliminamos el script porque puede utilizarse
            // en otras NewsCard de la página
        };
    }, [instagramUrl]);

    return (
        <article className="news-card">

            {/* VIDEO / REEL DE INSTAGRAM */}
            <div className="news-card-video">
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink={instagramUrl}
                    data-instgrm-version="14"
                >
                </blockquote>
            </div>

            {/* INFORMACIÓN DE LA NOTICIA */}
            <div className="news-card-content">

                <span className="news-card-date">
                    {date}
                </span>

                <h3>{title}</h3>

                <div className="news-card-divider"></div>

                <p>{text}</p>

            </div>

        </article>
    );
};

