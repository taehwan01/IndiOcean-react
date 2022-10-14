import Track from "./Track";

function List(props) {
  return (
    <>
      {/* <h3>{props.list[9]?.title}</h3> */}
      <div className="list">
        <h1>Playlist Name</h1>
        <div className="row">
          {/*TODO: map으로 반복문 돌리기 */}
          {props.list.map((track, i) => {
            return <Track key={i} track={track}></Track>;
          })}
        </div>
        <hr style={{ marginTop: "5px" }} />
      </div>
    </>
  );
}

export default List;
