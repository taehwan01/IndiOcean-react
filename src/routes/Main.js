import MainList from "../components/Main/MainList";
import "../css/Main/Main.css";

function Main(props) {
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
        <MainList list={props.list}></MainList>
      </div>
    </div>
  );
}

export default Main;
