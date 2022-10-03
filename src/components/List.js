import Track from "./Track";

function List() {
  return (
    <>
      <div className="list">
        <h1>Playlist Name</h1>
        <div className="row">
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
        </div>
        <hr style={{ "margin-top": "5px" }} />
      </div>
    </>
  );
}

export default List;
