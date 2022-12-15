/* 
  новости (списко новостей)
*/

function News({ newsTabs, news }) {
  return (
    <section className="news">
      <div className="news_tab">
        {newsTabs.map((item) => (
          <a className="tab_item" href={item.link} key={item.title}>
            {item.title}
          </a>
        ))}
      </div>
      <div>
        <ul className="news_list">
          {news.map((o) => (
            <li className="list_item" key={o.title}>
              <img src={o.img} className="item_img" alt="..." />
              <a className="item_link" href={o.link}>
                {o.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

News.defaultProps = {
  news: [],
  newsTabs: [],
};

export default News;


