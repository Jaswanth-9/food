import { useEffect, useState } from "react";
import "./Body.css";
import Foodcard from "./Foodcard";

export const BASE_URL = "http://localhost:9000";

export default function Body() {
  const [data, setdata] = useState(null);
  const [load, setload] = useState(false);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchfood = async () => {
      setload(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setdata(json);
        setload(false);
      } catch (error) {
        seterror("unable to fetch data");
      }
    };
    fetchfood();
  }, []);

  if (error) return <div>{error}</div>;
  if (load) return <div>loading...</div>;

  return (
    <mainBody className="mainBody">
      <Foodcard data = {data} />
    </mainBody>
  );
}
