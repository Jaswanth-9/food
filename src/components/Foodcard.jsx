import { BASE_URL } from "./Body";
import "./Foodcard.css";

export default function Foodcard({ data }) {
  return (
    <div className="foodContainer">
      <foodCard className="foodCard">
        {data?.map(({ name, image, text, price }) => (
          <foodtile className="foodTile" key={name}>
            <div className="food_basic">
              <div className="food_image">
                <img src={BASE_URL + image} />
              </div>
              <div className="food_info">
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </div>
            <button>${price.toFixed(2)}</button>
          </foodtile>
        ))}
      </foodCard>
    </div>
  );
}
