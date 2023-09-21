console.clear();

const makeRequest= (method,url,data)=>{

    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);

        xhr.setRequestHeader("Content-Type","application/json");

        xhr.onload = () =>{
            let data = xhr.response;
            // console.log(`This is resposeText == ${xhr.responseText}`);
            // console.log(`This is resposeType == ${xhr.responseType}`);
            // console.log(xhr.responseURL);
            // console.log(xhr.status);
            // console.log(`This is status text == ${xhr.statusText}`);
            console.log(JSON.parse(data));
        }

        xhr.onerror = ()=>{
            console.log("Error is here");
        }
        xhr.send(JSON.stringify(data));
    })
    
}

const getData = ()=> {
    makeRequest("GET","https://jsonplaceholder.typicode.com/posts/1")
    .then((res)=>console.log(res))
}

const postData=()=>{                   //sendData()
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts",{
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

const updateData=()=>{                   //sendData()
    makeRequest("PUT","https://jsonplaceholder.typicode.com/posts/1",{
        title: 'foow',
        body: 'barber',
        userId: 11,
    });
}

const updateSingleData=()=>{                   //sendData()
    makeRequest("PATCH","https://jsonplaceholder.typicode.com/posts/1",{
        title: 'rumi'
    });
}

const deleteData=()=>{                   //sendData()
    makeRequest("DELETE","https://jsonplaceholder.typicode.com/posts/1");
}

getData();
//postData();
//updateData();
//updateSingleData();
//deleteData();
