import React from "react";
import useFetch from '../../../hooks/useFetch';
import { BallTriangle,Circles } from 'react-loader-spinner'
const Tasters = () => {

  const { loading, result } = useFetch('https://pokeapi.co/api/v2/pokemon');
  const pokemons = result.results


  return (
    <div className="spinner">
      <Circles color="#00BFFF" height={80} width={80}/>
      <p>{loading ? <BallTriangle color="#00BFFF" height={80} width={80} className="spinner" /> : JSON.stringify(pokemons)}</p>
    </div>

  );
};

export default Tasters;
