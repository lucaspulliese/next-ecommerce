import ReviewsList from './reviews-list';
import Punctuation from './punctuation';

const Reviews = ({ show }) => {
  const style = {
    display: show ? 'flex' : 'none',
  }
  
  return (
    <section style={style} className="product-single__reviews">
      <Punctuation />
      <ReviewsList />
    </section>
  );
};
  
export default Reviews;
    