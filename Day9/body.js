import { useEffect, useState } from "react";
import { usefetch } from "./useFetch";
function Body() {
  console.log("Body first")
  const {fetchInfo,profilecount,setprofilecount,profile} =usefetch();
  console.log("Body last")
  return (
    <>
      <div className="search">

         {/* React have control on dom mnaipulation of input value  */}
        <input placeholder="Input your number" type="number" value={profilecount} onChange={(e)=>setprofilecount(e.target.value)} min={1}></input>
        <button  onClick={fetchInfo}>Searchprofile</button>
      </div>
      <div className="profile">
        {profile.map((value) => {
          return (
            <div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">
                Profile
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Body;
