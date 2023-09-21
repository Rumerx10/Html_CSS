console.clear();

const makeRequest = async (url,method,data)=>{
    return await axios({
        url:url,
        method:method,
        data:data
    });
}

// const getData=()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res)=>console.log(res.data))
//     .catch((error)=>console.log(error))
// }

// getData();


const postData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts","POST",
            JSON.stringify({
            title:"RUMI",
            body:"BArBer",
            userId:12
        })           
    )
    .then((response)=>console.log(response.data))
    .catch((error)=>console.log(error));
}

postData();