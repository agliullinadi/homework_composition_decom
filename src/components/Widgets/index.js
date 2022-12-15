import Widget from "../Widget/index.js";
import Weather from "../Weather/index.js";
import Popular from "../Popular/index.js";
import TvList from "../TvList/index.js";
import LiveList from "../LiveList/index.js";
import "../../App.css";
import { forecast, popular, tvList, liveList } from "../../data.js";

function Widgets() {
  return (
    <section className="widgets">
      <Widget title="Погода" link="#">
        <Weather forecast={forecast} />
      </Widget>
      <Widget title="Посещаемое" link="#">
        <Popular popular={popular} />
      </Widget>
      <Widget title="Карта Германии" link="#">
        <div>Расписания</div>
      </Widget>
      <Widget title="Телепрограмма" link="#">
        <TvList tvList={tvList} />
      </Widget>
      <Widget title="Эфир" link="#">
        <LiveList liveList={liveList} />
      </Widget>
    </section>
  );
}

export default Widgets;