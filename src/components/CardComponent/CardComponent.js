import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './CardComponent.css';

const CardComponent = ({id, imgSrc,visitedCountries, days, name, starLevel, reducedPrice, entryPrice}) => {
    return (
        <>
        <div className="card-container" key={id}>
             <div className="card-element-container">
                <img src={imgSrc} className="card-image"/>
                 <p className="card-title">{visitedCountries} Countries, {days} days</p>
                 <h2 className="card-name">{name}</h2>
                 <div className="card-star-rating">
          {[...Array(starLevel)].map(() => {        
            return (         
              <FontAwesomeIcon icon={faStar} className="card-star-icon"></FontAwesomeIcon>        
            );
          })}<span className="card-star-level-number">{starLevel}</span>
        </div>
                 <p className="card-price">From €{reducedPrice} <span className="card-entry-price">€{entryPrice}</span> </p>
             </div>
     </div>
          </>
       
      );
}

export default CardComponent