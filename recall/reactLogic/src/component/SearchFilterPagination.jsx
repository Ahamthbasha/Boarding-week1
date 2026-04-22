import React, { useState } from "react";

const SearchFilterPagination = () => {
  const users = [
    { id: 1, name: "Arun Kumar", role: "admin" },
    { id: 2, name: "Bala Krishna", role: "user" },
    { id: 3, name: "Charan Teja", role: "user" },
    { id: 4, name: "Divya Reddy", role: "admin" },
    { id: 5, name: "Esha Sharma", role: "user" },
    { id: 6, name: "Farhan Ali", role: "user" },
    { id: 7, name: "Gokul Raj", role: "admin" },
    { id: 8, name: "Harsha Vardhan", role: "user" },
    { id: 9, name: "Irfan Khan", role: "user" },
    { id: 10, name: "Jaya Lakshmi", role: "admin" },
    { id: 11, name: "Kiran Kumar", role: "user" },
    { id: 12, name: "Lavanya Devi", role: "user" },
    { id: 13, name: "Manoj Kumar", role: "admin" },
    { id: 14, name: "Naveen Kumar", role: "user" },
    { id: 15, name: "Pooja Singh", role: "user" },
    { id: 16, name: "Ravi Teja", role: "admin" },
    { id: 17, name: "Sandeep Kumar", role: "user" },
    { id: 18, name: "Tejaswini Reddy", role: "user" },
    { id: 19, name: "Uday Kumar", role: "admin" },
    { id: 20, name: "Vikram Singh", role: "user" },
  ];

  const filters = [...new Set(users.map((val) => val.role))];
  // const limit = 5
  // const totalNoOfPages = Math.floor(users.length/limit)
  // const buttons = []

  // for(let i=1;i<=totalNoOfPages;i++){
  //     buttons.push(i)
  // }

  const [search, setSearch] = useState("");
  const [currentFilter, setFilters] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = users.filter((val) => {
    const usersSearchResult = val.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const filterSearch = currentFilter ? val.role == currentFilter : true;

    let finalUser = usersSearchResult && filterSearch;

    return finalUser;
  });
  const limit = 5;
  const totalNoOfPages = Math.ceil(filteredUsers.length / limit);
  const buttons = [];

  for (let i = 1; i <= totalNoOfPages; i++) {
    buttons.push(i);
  }
  const start = (currentPage - 1) * limit;
  const end = start + limit;
  const finalUser = filteredUsers.slice(start, end);

  const clear = () => {
    setSearch("");
    setFilters(null);
    setCurrentPage(1)
  };

  const pageSet = (val) => {
    setCurrentPage(val);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {setSearch(e.target.value); setCurrentPage(1)}}
      />
      {filters.map((val) => (
        <label>
          <input
            type="radio"
            name="role"
            checked={currentFilter == val}
            onChange={() => {setFilters(val) 
                setCurrentPage(1)
            }
            }
          />
          {val}
        </label>
      ))}
      <button onClick={clear}>Clear Search</button>

      <h1>User List</h1>
      <div>
        {finalUser.length == 0 ? (
          "search Not Found"
        ) : (
          <div>
            {finalUser.map((val) => (
              <div key={val.id}>
                <h1>Name is : {val.name}</h1>
                <h1>role is: {val.role}</h1>
              </div>
            ))}
          </div>
        )}
      </div>
      {buttons.map((val) => (
        <button onClick={() => pageSet(val)}>{val}</button>
      ))}
    </div>
  );
};

export default SearchFilterPagination;
