// fake data
import products from '../../utils/data/products';

export default (req, res) => {

  // fake loading
  setTimeout(() => {
    res.status(200).json(products);
  }, 800);
}
