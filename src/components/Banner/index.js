/* 
  баннер с ссылкой
*/

function Banner({ img, link }) {
  return (
    <div className="banner">
      <a className="banner_link" href={link}>
        <img className="banner_img" src={img} alt="" />
      </a>
    </div>
  );
}

Banner.defaultProps = {
  img: "",
  link: "",
};


export default Banner;