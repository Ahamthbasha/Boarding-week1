//uncontrolled component

import React, { useState } from 'react'

const List = () => {
    const [fruits,setFruits] = useState(["apple","banana","cherry"])

    const removeFirst = () => {
        setFruits((fruits)=>fruits.slice(1))
    }
  return (
    <div>
      <h1>See the danger of using the index as a key</h1>

      <ul>
        {
            fruits.map((val,index)=>(
                <>
                <h2>{val}</h2>
                <li key={index}>
                    <input defaultValue={val} />
                </li>
                </>
            ))
        }
      </ul>

      <hr />

      <button onClick={removeFirst}>Remove first</button>
    </div>
  )
}

export default List





//controlled component

// import React, { useState, useRef } from "react";

// const FocusProblem = () => {
//   const [items, setItems] = useState(["Item 1", "Item 2", "Item 3"]);

//   const handleChange = (index, value) => {
//     const newItems = [...items];
//     newItems[index] = value;
//     setItems(newItems);
//   };

//   const removeFirst = () => {
//     setItems((prev) => prev.slice(1));
//   };

//   return (
//     <div>
//       <h1>Focus Jump Example (index as key)</h1>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             <input
//               value={item}
//               onChange={(e) => handleChange(index, e.target.value)}
//               placeholder="Type here..."
//             />
//           </li>
//         ))}
//       </ul>

//       <button onClick={removeFirst}>Remove First Item</button>

//       <p>
//         Type in the second input, then click "Remove First Item". Notice how the focus jumps to the next input instead of staying on the one you were typing in. This happens because the index as key causes React to reuse DOM nodes incorrectly.
//       </p>
//     </div>
//   );
// };

// export default FocusProblem;
