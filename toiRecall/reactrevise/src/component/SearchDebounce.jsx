// import React, { useEffect, useState } from "react";

// const SearchDebounce = () => {
//   const [text, setText] = useState("");
//   const [debounceText,setDebounceText] = useState("")
//   const coursesData = [
//     {
//       id: "c1",
//       title: "React for Beginners",
//       instructor: "John Smith",
//       category: "Frontend",
//       price: 1999,
//       rating: 4.5,
//     },
//     {
//       id: "c2",
//       title: "Advanced React Patterns",
//       instructor: "David Miller",
//       category: "Frontend",
//       price: 2499,
//       rating: 4.7,
//     },
//     {
//       id: "c3",
//       title: "Node.js Complete Guide",
//       instructor: "Michael Johnson",
//       category: "Backend",
//       price: 2199,
//       rating: 4.6,
//     },
//     {
//       id: "c4",
//       title: "MongoDB for Developers",
//       instructor: "Sarah Williams",
//       category: "Database",
//       price: 1799,
//       rating: 4.4,
//     },
//     {
//       id: "c5",
//       title: "Full Stack MERN Bootcamp",
//       instructor: "Robert Brown",
//       category: "Fullstack",
//       price: 3999,
//       rating: 4.8,
//     },
//     {
//       id: "c6",
//       title: "JavaScript Mastery",
//       instructor: "Emma Davis",
//       category: "Programming",
//       price: 1999,
//       rating: 4.7,
//     },
//     {
//       id: "c7",
//       title: "TypeScript from Scratch",
//       instructor: "James Wilson",
//       category: "Programming",
//       price: 1899,
//       rating: 4.5,
//     },
//     {
//       id: "c8",
//       title: "Next.js Complete Course",
//       instructor: "Daniel Taylor",
//       category: "Frontend",
//       price: 2599,
//       rating: 4.6,
//     },
//     {
//       id: "c9",
//       title: "Express.js Fundamentals",
//       instructor: "Chris Anderson",
//       category: "Backend",
//       price: 1699,
//       rating: 4.3,
//     },
//     {
//       id: "c10",
//       title: "Redux Toolkit in Depth",
//       instructor: "Matthew Thomas",
//       category: "Frontend",
//       price: 2099,
//       rating: 4.6,
//     },
//     {
//       id: "c11",
//       title: "Docker for Developers",
//       instructor: "Andrew Martinez",
//       category: "DevOps",
//       price: 2299,
//       rating: 4.5,
//     },
//     {
//       id: "c12",
//       title: "System Design Basics",
//       instructor: "Sophia Garcia",
//       category: "Architecture",
//       price: 2999,
//       rating: 4.8,
//     },
//   ];

//   const filteredData = debounceText.length == 0 ? coursesData : coursesData.filter((val)=>val.title.toLowerCase().includes(text.toLowerCase()))

//   useEffect(()=>{
//     const timer = setTimeout(()=>{
//       setDebounceText(text)
//     },500)

//     return()=>{
//       clearTimeout(timer)
//     }
//   },[text])

//   return(
//     <div>
//         <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>

//         <ul>
//             {
//                 filteredData.map((val)=>{
//                     return(
//                         <div key={val.id}>
//                             <li>{val.title}</li>
//                         </div>
//                     )
//                 })
//             }
//         </ul>

//     </div>
//   )
// };

// export default SearchDebounce;


















import React, {  useState } from "react";
import useDebounce from "../hooks/useDebounce";

const SearchDebounce = () => {
  const [text, setText] = useState("");
  const {debounceText} = useDebounce(text,500)
  const coursesData = [
    {
      id: "c1",
      title: "React for Beginners",
      instructor: "John Smith",
      category: "Frontend",
      price: 1999,
      rating: 4.5,
    },
    {
      id: "c2",
      title: "Advanced React Patterns",
      instructor: "David Miller",
      category: "Frontend",
      price: 2499,
      rating: 4.7,
    },
    {
      id: "c3",
      title: "Node.js Complete Guide",
      instructor: "Michael Johnson",
      category: "Backend",
      price: 2199,
      rating: 4.6,
    },
    {
      id: "c4",
      title: "MongoDB for Developers",
      instructor: "Sarah Williams",
      category: "Database",
      price: 1799,
      rating: 4.4,
    },
    {
      id: "c5",
      title: "Full Stack MERN Bootcamp",
      instructor: "Robert Brown",
      category: "Fullstack",
      price: 3999,
      rating: 4.8,
    },
    {
      id: "c6",
      title: "JavaScript Mastery",
      instructor: "Emma Davis",
      category: "Programming",
      price: 1999,
      rating: 4.7,
    },
    {
      id: "c7",
      title: "TypeScript from Scratch",
      instructor: "James Wilson",
      category: "Programming",
      price: 1899,
      rating: 4.5,
    },
    {
      id: "c8",
      title: "Next.js Complete Course",
      instructor: "Daniel Taylor",
      category: "Frontend",
      price: 2599,
      rating: 4.6,
    },
    {
      id: "c9",
      title: "Express.js Fundamentals",
      instructor: "Chris Anderson",
      category: "Backend",
      price: 1699,
      rating: 4.3,
    },
    {
      id: "c10",
      title: "Redux Toolkit in Depth",
      instructor: "Matthew Thomas",
      category: "Frontend",
      price: 2099,
      rating: 4.6,
    },
    {
      id: "c11",
      title: "Docker for Developers",
      instructor: "Andrew Martinez",
      category: "DevOps",
      price: 2299,
      rating: 4.5,
    },
    {
      id: "c12",
      title: "System Design Basics",
      instructor: "Sophia Garcia",
      category: "Architecture",
      price: 2999,
      rating: 4.8,
    },
  ];

  const filteredData = debounceText.length == 0 ? coursesData : coursesData.filter((val)=>val.title.toLowerCase().includes(text.toLowerCase()))

  

  return(
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>

        <ul>
            {
                filteredData.map((val)=>{
                    return(
                        <div key={val.id}>
                            <li>{val.title}</li>
                        </div>
                    )
                })
            }
        </ul>

    </div>
  )
};

export default SearchDebounce;
