import { useState,useEffect } from "react";
export function usefetch() {
  const [profile, setProfile] = useState([]);
  const [profilecount, setprofilecount] = useState(10);
  
  async function fetchInfo() {
    const ranNum = Math.floor(Math.random() * 6000);
    try {
      const response = await fetch(
        `https://api.github.com/users?since=${ranNum}&per_page=${profilecount}`
      );
      const data = await response.json();
      setProfile(data); 
      //*{Interview} jab yeah setprofile data karenge to body bhi render karenga
    } catch (error) {
      console.log(error);
    }

    // console.log(data);
  }

  useEffect(() => {
    fetchInfo();
  }, []);
  // console.log("use hook")
  return {fetchInfo,profilecount,setprofilecount,profile};
}
