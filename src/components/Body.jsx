import { useEffect, useState } from "react";
import "./Body.css";
import Foodcard from "./Foodcard";
import Header from "./Header";

export const BASE_URL = "http://localhost:9000";

export default function Body() {
  const [filteredData, setfilteredData] = useState(null);
  const [data, setdata] = useState(null);
  const [load, setload] = useState(false);
  const [error, seterror] = useState(null);
  const [selectedBtn, setselectedBtn] = useState("all");

  useEffect(() => {
    const fetchfood = async () => {
      setload(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setdata(json);
        setfilteredData(json);
        setload(false);
      } catch (error) {
        seterror("unable to fetch data");
      }
    };
    fetchfood();
  }, []);

  const filterFood = (type) => {
    if(type === "all"){
      setfilteredData(data);
      setselectedBtn("all");
      return;

    }

    const filter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setfilteredData(filter);
    setselectedBtn(type);
  }

  const searchFood = (e) => {
    const searchValue = e.target.value;
    if(searchValue === ""){
      setfilteredData(null);
    }

    const filter = data?.filter((food) => 
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setfilteredData(filter);
  };

  if (error) return <div>{error}</div>;
  if (load) return <div>loading...</div>;

  return (
    <div>
      <Header searchFood = {searchFood} filterFood={filterFood}/>
      <Foodcard data={filteredData} />
    </div>
  );
}
