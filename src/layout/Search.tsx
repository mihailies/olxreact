export function Search() {
  return (
    <>
      <div className="searchContainer">
        <input className="searchInput" type="text" placeholder="Ce anume cauti ..." />
        <input className="locationInput" type="text" placeholder="Locatie..." />
        <button>Cautare</button>
      </div>
    </>
  );
}
