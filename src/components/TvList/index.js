/* 
  телепрограмма (время передачи, передача и ее описание)
*/

function TvList({ tvList }) {
  return tvList.map((item) => (
    <div className="tv" key={item.title}>
      <span className="tv_time">{item.time}</span>
      <a href={item.link} className="tv_link">
        <span className="tv_title">{item.title}</span>
      </a>
      <span className="tv_description">{item.description}</span>
    </div>
  ));
}

TvList.defaultProps = {
  tvList: [],
};

export default TvList;


