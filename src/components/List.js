import Track from "./Track";

function List(props) {
  return (
    <>
      <h3>{props.list[9]?.title}</h3>
      <div className="list">
        <h1>Playlist Name</h1>
        <div className="row">
          {/*TODO: map으로 반복문 돌리기 */}
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
        </div>
        <hr style={{ marginTop: "5px" }} />
      </div>
    </>
  );
}

export default List;
