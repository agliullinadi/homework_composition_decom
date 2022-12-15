import News from "../News/index.js";
import Currency from "../Currency/index.js";
import Menu from "../Menu/index.js";
import Search from "../Search/index.js";
import Banner from "../Banner/index.js";
import Widgets from "../Widgets/index.js";
import { newsTabs, news, сurrency, menu, banner } from "../../data.js";

function Decomposition() {
  return (
    <div className="main">
      <News newsTabs={newsTabs} news={news} />
      <Currency currency={сurrency} />
      <Menu menu={menu} />
      <Search>
        <span className="search_text">
          Найдётся всё. Например, <a href="#">фаза луны сегодня</a>
        </span>
      </Search>
      <Banner img={banner.img} link={banner.link} />
      <Widgets />
    </div>
  );
}

export default Decomposition;