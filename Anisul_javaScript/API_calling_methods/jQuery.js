console.clear();

const makeRequest = async (url,method,data)=>{
    return await $.ajax({
        url:url,
        method:method,
        data:data
    })    
}


// const getData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","GET")
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// getData();

// const postData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","POST",
//             JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         })
//     )
//     .then((res)=>console.log(res))
//     .catch((err)=>console.log(err))
// }
// postData();