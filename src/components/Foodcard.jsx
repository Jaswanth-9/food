import "./Foodcard.css";

export default function Foodcard({ data }) {
  return (
    <div className="foodContainer">
      <foodCard className="foodCard">
        {data?.map((food) => (
          <foodtile key={food.name}>{food.text}</foodtile>
        ))}
      </foodCard>
    </div>
  );
}
