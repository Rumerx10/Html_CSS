console.clear();

const makeRequest= async (url,method,data)=>{
    try{
        const result = await $.ajax({
            url:url,
            method:method,
            data:data
        })
        return result; 

    }catch(err){
        console.log(err);
    }   
}

// const getData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET")
//     .then((res)=>console.log(res));   
// }

// getData();


// const sendData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//     .then((res)=>console.log(res));   
// }

// sendData();


// const updateData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1","PUT",{
//         name:"rumi",
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//     .then((res)=>console.log(res));   
// }

// updateData();

// const  singleUpdateData = ()=>{
//     makeRequest("https://jsonplaceholder.typicode.com/posts/1","PATCH",{
//         name:"Hasan Rume",
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       })
//     .then((res)=>console.log(res));   
// }

// singleUpdateData();

const deleteData = ()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1","DELETE"  )
    .then((res)=>console.log(res));   
}

deleteData();