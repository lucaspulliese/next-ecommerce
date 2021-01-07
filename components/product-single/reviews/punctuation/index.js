import Rater from 'react-rater';

const Punctuation = ({ punctuations }) => {
  return (
    <section className="product-punctuation">
      <div className="product-punctuation__values">
        <h3>4.5</h3>
        <Rater total={5} interactive={false} rating={2} />
        <p><i className="icon-avatar"></i>81 all opinions</p>
      </div>
      
      <div className="product-punctuation__rates">
        <ul className="punctuations-lists">
          <li className="punctuation-item">
            <Rater total={1} interactive={false} rating={1} />
            <span>1</span>
            <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
          </li>
          <li className="punctuation-item">
            <Rater total={1} interactive={false} rating={1} />
            <span>2</span>
            <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
          </li>
          <li className="punctuation-item">
            <Rater total={1} interactive={false} rating={1} />
            <span>3</span>
            <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
          </li>
          <li className="punctuation-item">
            <Rater total={1} interactive={false} rating={1} />
            <span>4</span>
            <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
          </li>
          <li className="punctuation-item">
            <Rater total={1} interactive={false} rating={1} />
            <span>5</span>
            <div className="punctuation-item__bar">
              <div className="punctuation-item__bar__current"></div>
            </div>
          </li>
        </ul>
      </div>

      <div className="punctuation-btn-wrapper">
        <button type="button" className="btn btn--rounded btn--yellow">Add opinion</button>
      </div>
    </section>
  );
};
  
export default Punctuation;
    