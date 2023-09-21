console.clear();

const makeRequest = async (url) =>{
    const res = await fetch(url);
    if(!res.ok){
        const errMsg=`Error:=> ${res.status}`;
        throw new Error(errMsg);
    }

    const data = res.json();
    return data;
}


const getData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res))
    .catch((error)=>confirm.log(error))
}


getData();