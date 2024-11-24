import "./Header.css";

export default function Header() {
  return (
    <div className="main">
      <topContainer className="topContainer">
        <h1 className="title">Food Hub</h1>
        <div className="search">
          <input type="text" placeholder="Search Food" />
        </div>
      </topContainer>
      <buttonContainer className="buttonContainer">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </buttonContainer>
    </div>
  );
}
