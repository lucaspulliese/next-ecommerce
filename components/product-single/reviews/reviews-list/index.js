import Rater from 'react-rater';

const ReviewsList = () => {
  return (
    <section className="reviews-list">
      <div className="review-item">
        <div className="review__avatar">

        </div>
        
        <div className="review__content">
          <h3>John Doe</h3>
          <Rater total={5} interactive={false} rating={2} />
          <div className="review__comment">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <div className="review-item">
        <div className="review__avatar">

        </div>
        
        <div className="review__content">
          <h3>John Doe</h3>
          <Rater total={5} interactive={false} rating={2} />
          <div className="review__comment">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
      <div className="review-item">
        <div className="review__avatar">

        </div>
        
        <div className="review__content">
          <h3>John Doe</h3>
          <Rater total={5} interactive={false} rating={2} />
          <div className="review__comment">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default ReviewsList;
    