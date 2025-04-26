 export  const  FetchData =async()=>{
    const result=await fetch('https://jsonplaceholder.typicode.com/todos').then((res)=>res.json())
    return result
}
 export  const  FetchPosts =async()=>{
    const result=await fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json())
    return result
}
