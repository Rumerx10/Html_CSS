console.clear();

// Get data -------------------
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res)=>{
//     if(!res.ok){
//         const errMsg = `Error: => ${res.status}`;
//         throw new Error(errMsg);        
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((error)=>console.log(error));


//UPDATE data -----------------
// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method: "PATCH",//"PUT" or POST or PATCH or DELETE
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify({
//         title:"food",
//         body: "Bar",
//         userID:1
//     })
    
// })
// .then((res)=>{
//     if(!res.ok){
//         const errMsg = `Error: => ${res.status}`;
//         throw new Error(errMsg);        
//     }
//     return res.json();
// })
// .then((res)=>console.log(res))
// .catch((error)=>console.log(error));

const makeRequest = async (url,config) =>{
    const res = await fetch(url,config);
    if(!res.ok){
        const errMsg = `Error:=> ${res.status}`;
        throw new Error(errMsg);
    }
    const data = await res.json();
    return data;
}

// const getData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))
// }
// getData();

// const sendData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts",{
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'foo',
//           body: 'bar',
//           userId: 1,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         } 
//     })
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))
// }

// sendData();


// const updateData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/2",{
//         method: 'PUT',
//         body: JSON.stringify({
//           title: 'foro',
//           body: 'barbe',
//           userId: 11,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         } 
//     })
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))
// }

// updateData();


// const patchData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/2",{
//         method: 'PATCH',
//         body: JSON.stringify({
//           title: 'rume'
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         } 
//     })
//     .then((res)=>console.log(res))
//     .catch((error)=>console.log(error))
// }

// patchData();

const deleteData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/2",{
        method: 'DELETE'       
    })
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
}

deleteData();