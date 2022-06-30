import { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from '../CardComponent/CardComponent';
import './CardsComponent.css';
const CardsComponent = () => {
  const [loading, setLoading] = useState(false);
  const [websiteData, setWebsiteData] = useState([]);

  useEffect(() => {
      const loadPost = async () => {
          setLoading(true);
          const response = await axios.get(
          "https://mock-travel-data-api.herokuapp.com/data");
          setWebsiteData(response.data);
          setLoading(false);
          
      }
      loadPost();
  }, []);
    return (
      <>
      <div className="main-container">
      {loading ? (
                    <h4>Loading...</h4>) :
                    websiteData.map((element) => {
                      return(
                              <CardComponent id={element.id} key={`${element.id}-${element.name}`} 
                              imgSrc={element.imgSrc} 
                              visitedCountries={element.visitedCountries}
                              days={element.days}
                              name={element.name}
                              starLevel={element.starLevel}
                              reducedPrice={element.reducedPrice}
                              entryPrice={element.entryPrice}
                              />
                          )
                  })
                }
      </div>
      </>
     
    );
  };

export default CardsComponent