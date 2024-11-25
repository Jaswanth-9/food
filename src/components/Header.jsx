import "./Header.css";

export default function Header({searchFood, filterFood}) {
  return (
    <div className="main">
      <topContainer className="topContainer">
        <h1 className="title">Food Hub</h1>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder="Search Food" />
        </div>
      </topContainer>
      <buttonContainer className="buttonContainer">
        <button onClick={() => filterFood("all")}>All</button>
        <button onClick={() => filterFood("breakfast")}>Breakfast</button>
        <button onClick={() => filterFood("lunch")}>Lunch</button>
        <button onClick={() => filterFood("dinner")}>Dinner</button>
      </buttonContainer>
    </div>
  );
}
