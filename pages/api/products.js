// fake data
import products from '../../utils/data/products';

export default (req, res) => {
  res.status(200).json(products);
}
