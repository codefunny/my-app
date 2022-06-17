export default class FetchDemo {
    static main() {
        fetch("https://facebook.github.io/react-native/movies.json",{
            method: 'POST',
            mode: "cors", // or without this line
            redirect: 'follow',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        })
        .then( response => response.json())
        .then(responseJson => responseJson.movies)
        .catch(error => console.log(error));
    }
}