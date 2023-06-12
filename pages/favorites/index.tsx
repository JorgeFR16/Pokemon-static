import { Layout } from "@/components/layouts";
import { FavoritePokemons } from "@/components/pokemon";
import { NoFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react";

export const FavoritesPage = () => {


  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons() );  
    
  }, []);
  


  


  return (
    <Layout title='Pokémons - Favoritos'>

      {
        favoritePokemons.length === 0 
        ? ( <NoFavorites /> ) 
        : (<FavoritePokemons pokemons={ favoritePokemons } /> )
      }

      

    </Layout>  
    )
}

export default FavoritesPage;
