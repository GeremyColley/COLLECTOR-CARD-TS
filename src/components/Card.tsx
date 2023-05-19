



function Card({Titre,ListMovies}: Props): JSX.Element | null {

    return (
        <section className="container">
            <p className="title">{Titre}</p>
            <div className="movies-list">
                {ListMovies.map((image, num) => {
                    return <img key={num} src={image} alt="movie" />;
                })}
            </div>
        </section>
    );
}

export default Card;