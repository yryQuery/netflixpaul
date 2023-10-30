console.log(("Hello"));

//XML HTTP Request
console.log("Coming from requests");
const request = new XMLHttpRequest();
request.open('GET', "https://jsonplaceholder.typicode.com/posts");
request.send();

request.onload = () => {
    console.log(request);
    if(request.status === 200){
        console.log(JSON.parse(request.response));
    } else (
        console.log(` error ${request.status}`)
    )
}
