/* 
  валюты (название, значение с разницей)
*/

 function Currency({ currency }) {
  return (
    <section className="currency">
      {currency.map((item) => (
        <div className="currency_item" key={item.title}>
          <a className="currency_link" href={item.link}>
            {item.title}
          </a>
          <span className="currency_value">{item.value.toFixed(2)}</span>
          <span className="currency_delta">{item.delta.toFixed(2)}</span>
        </div>
      ))}
    </section>
  );
}

Currency.defaultProps = {
  currency: [],
};

export default Currency;

