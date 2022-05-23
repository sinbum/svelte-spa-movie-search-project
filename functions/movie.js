const axios = require("axios");
const { OMDB_API_KEY } = process.env

exports.handler = async function (event, context) {
    const params = JSON.parse(event.body)

    const {title, type, year, page, id} = params

    console.log('id', id)

    const url = id
        ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full` //단일 상세정보
        : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}` // 영화 list정보

    try {
        const res = await axios.get(url);
        console.log(res.data)

        if (res.data.Error) {
            return {
                statusCode: 400,
                body: res.data.Error
            }
        }
        //resolve(res);
        return {
            statusCode: 200,
            body: JSON.stringify(res.data)
        }

    } catch (e) {
        console.log(e.response.status);
        // reject(e.message)
        return{
            statusCode:e.response.status,
            body: error.message
        }
    }

}