/* 
  меню
*/

function Menu({ menu }) {
  return (
    <section className="menu">
      {menu.map((item) => (
        <div className="menu_item" key={item.title}>
          <a className="menu_link" href={item.link}>
            {item.title}
          </a>
        </div>
      ))}
    </section>
  );
}

Menu.defaultProps = {
  menu: [],
};


export default Menu;

