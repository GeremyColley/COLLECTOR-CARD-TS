import mov from '../assets/movies.json';
import Card from './Card';

interface Props {
    btnColor: string;
}

function Cards({btnColor}: Props): JSX.Element | null {

    return (
        <div className='cards'>
            <h1>{btnColor} - Alice</h1>
            {mov.map( (elem, index) => { return(
                <Card Titre={elem.category} ListMovies={elem.images} key={index} />
            )})}
        </div>
    );
};

export default Cards;