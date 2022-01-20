import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const Pokemon = (props) => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
            .then(res=>{
                console.log(res);
                setPokemon(res.data);
            })
            .catch(err=>console.log(err))
    }, [name])

    return(
        <div className='w-50 mx-auto p-5'>
            <h1>{name}</h1>
            {
                pokemon.sprites &&
                <img src={pokemon.sprites.front_default} alt={name}/>
            }
            <ul>
                <li>Types:</li>
                {
                    pokemon.types && 
                    pokemon.types.map((obj, i)=>{
                        return <li key={i}>{obj.type.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pokemon;