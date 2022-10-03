import Track from "./Track";

function List() {
  return (
    <>
      <section>
        <div>
          <h1>Playlist Name</h1>
        </div>
        <div className="row">
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
          <Track></Track>
        </div>
        <hr />
      </section>
    </>
  );
}

export default List;
