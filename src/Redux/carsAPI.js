export function fetchcars(){
    return new Promise(async(resolve)=>{
        const response = await fetch("http://localhost:3000/products")
        const data = await response.json()
        resolve({data})
    });
}

// export function fetchresult(prompt){
//     return new Promise(async(resolve)=>{
//         const query = `Name=${prompt}`
//         const response = await fetch("http://localhost:3000/products?"+query)
//         const data = await response.json()
//         resolve({data})
//     });
// }