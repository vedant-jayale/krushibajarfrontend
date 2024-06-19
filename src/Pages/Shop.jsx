import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Others from "../Components/Others/Others" ;




const Shop = () => {
  return (
    <div>
      <Hero/>
     <Popular/>
     <Offers/>
     <Others/>
     <NewCollections/>
     <NewsLetter/>
    
    </div>
  )
}

export default Shop ;
