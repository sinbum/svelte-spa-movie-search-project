import axios from 'axios';
import _unionBy from 'lodash/unionBy'
import {writable, get} from "svelte/store";

export const movies =writable([])


export async function searchMovies(payload){
    const {title, type, year, number} = payload;
    const OMDB_API_KEY = '60f532c2'


    const res =  await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`)
    console.log('res',res)

    const { Search, totalResults } = res.data
    movies.set(Search)

    // 14 / 10 => 1.4 => 2
    // 7 / 10 => 0.7 => 1
    // 63 / 10 => 6.3 => 7
    const pageLength = Math.ceil(totalResults / 10)


    if( pageLength > 1 ){
        for (let page =2; page <= pageLength; page++){
            if (page > (number / 10)) break
            const res =  await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
            const { Search } = res.data
            movies.update($movies => _unionBy($movies, Search, 'imdbID'))
        }
    }

    console.log(get(movies))

}

