import mov from '../assets/movies.json';
import Card from './Card';

interface Props {
    btnColor: string;
}

function Cards({btnColor}: Props): JSX.Element | null {

    return (
        <div className='cards'>
            <h1>{btnColor} - Alice</h1>
            {mov.map( (elem) => { return(
                <Card Titre={elem.category} ListMovies={elem.images} />
            )})}
        </div>
    );
};

export default Cards;