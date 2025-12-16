// Create a page and list the name of countries. And add search functionality to it.

// import React, { useState } from 'react'

// const HomePage = () => {
//     const countries = ["India","China","Pakistan","Border","BashaBorder"]

//     const [search,setSearch] = useState('')

//     const filteredCountries = countries.filter((val)=>val.toLowerCase().includes(search.toLowerCase()))

//   return (
//     <div>
//         <input 
//         type="text"
//         value={search}
//         onChange={(e)=>setSearch(e.target.value)}
//         />  

//         <h1>Country list</h1>

//         <ul>
//             {filteredCountries.length > 0 ?
//                 filteredCountries.map((val)=>(<li>{val}</li>)) : <p>{search} is not found</p>
//             }
//         </ul>
//     </div>
//   )
// }

// export default HomePage


//create two components and in child component create a input box and in parent component add a H1 tag, when you type in input box it should reflect in h1 tag in parent component

import React, { useState } from 'react'

const ChildComponent = ({value,receivedData}) => {
    return(
        <div>
            <input type="text" value={value} onChange={(e)=>receivedData(e.target.value)}/>
        </div>
    )
}

const HomePage = () => {
    const [data,setData] = useState('')

    const receivedData = (data)=>{
        setData(data)
    }
  return (
    <div>
      <ChildComponent value={data} receivedData={receivedData}/>
      <h1>{data}</h1>
    </div>
  )
}

export default HomePage

