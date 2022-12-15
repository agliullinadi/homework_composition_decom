/* 
  поисковая строка
*/

function Search(props) {
  return (
    <section className="search">
      <div className="search_row">
        <img
          className="search_logo"
          src="https://via.placeholder.com/100x50/000000/FFFFFF"
          alt="logo"
        />
        <input
          className="search_input"
          type="text"
          placeholder="Текст для поиска"
        />
        <button className="search_button" type="submit">
          Найти
        </button>
      </div>
      {props.children}
    </section>
  );
}

export default Search;