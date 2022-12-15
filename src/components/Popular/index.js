/* 
  посещаемое
*/

function Popular({ popular }) {
  return popular.map((item) => (
    <div className="popular" key={item.title}>
      <a href={item.link} className="popular_link">
        <span className="popular_title">{item.title}</span>
      </a>
      <span className="popular_description">{item.description}</span>
    </div>
  ));
}

Popular.defaultProps = {
  popular: [],
};

export default Popular;



