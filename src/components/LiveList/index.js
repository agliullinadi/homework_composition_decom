/* 
  эфир (иконка, передача, описание)
*/

function LiveList({ liveList }) {
  return liveList.map((item) => (
    <div className="live" key={item.title}>
      <img src="https://via.placeholder.com/30x30/000000/FFFFFF" className="live_img" alt="..." />
      <a href={item.link} className="live_link">
        <span className="live_title">{item.title}</span>
      </a>
      <span className="live_description">{item.description}</span>
    </div>
  ));
}

LiveList.defaultProps = {
  liveList: [],
};

export default LiveList;


