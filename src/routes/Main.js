import List from "../components/List";
import "../css/Main.css";

function Main() {
  return (
    <div>
      <div className="main">
        <div className="row">
          <div className="col-5 main-text">
            <h1> Surf In IndiOcean</h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </div>
          <div className="col-7 wave-img"></div>
        </div>
      </div>
      <div className="main2">
        <List></List>
        <List></List>
        <List></List>
      </div>
    </div>
  );
}

export default Main;
