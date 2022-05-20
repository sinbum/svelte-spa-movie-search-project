exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name:'SINBUM',
            age: 85,
            email: 'sinbum@kakao.com'
        })
    }
}