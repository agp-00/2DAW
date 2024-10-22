import './Card.css';

const series = (serie) => {

    const cards = (serie) => {
        //funcion para sacar si es serie
        if (serie.type && serie.type == "miniserie") return serie.type;
        if (serie.seasons && serie.seasons > 1) return serie.seasons + " temporadas";
        if (serie.seasons) return serie.seasons + " temporada";
        if (serie.episodes && serie.episodes > 1) return serie.episodes + " capitulos";
        if (serie.episodes) return serie.episodes + " capitulo";
    }

    return (
        //tarjeta
        <article className="card">
            <div className="season">{cards(serie)}</div>
            <img src={`/public/img/${serie.img}`} alt="" />
            <div className="container">
                {
                serie.matching > 50 && 
                <div className="puntuacion">{serie.matching}% de puntuacion</div>
                }
                
            </div>

            <p>{serie.desc}</p>
        </article>
    )
}