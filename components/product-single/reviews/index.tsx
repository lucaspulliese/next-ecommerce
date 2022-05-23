import ReviewsList from './reviews-list';
import Punctuation from './punctuation';
import { ProductType } from 'types/product';

type ReviewsProductType = {
  show: boolean;
  product: ProductType
}

const Reviews = ({ show, product }: ReviewsProductType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__reviews">
      <Punctuation punctuations={product.punctuationReview} />
      <ReviewsList reviews={product.reviews} />
    </section>
  );
};
  
export default Reviews;
    