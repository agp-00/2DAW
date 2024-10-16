import { seriesList } from "./series-static"

const serie = seriesList;

function Movie(serie) {
    return (
        <>

            <article className="card" key={serie.id}>
                <div className="seasons ">{serie.seasons}</div>
                <img src={serie.img} alt={serie.title} />
                <div className="container">
                    <div className="Matching ">{seriesList.matching}</div>
                    <div className="info-card-container">
                        <div>
                            <span className="pegi ">{serie.pegi}</span>
                            <span className="year ">{serie.year}</span>
                        </div>
                        <div className="tooltip">
                            <div className="tooltiptext">Añadir</div>
                            <span className="material-icons btn-icon">add</span>
                        </div>
                    </div>
                    <p>{serie.desc}</p>
                </div>
            </article>

        </>
    )
}