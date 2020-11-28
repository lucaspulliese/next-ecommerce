// fake data
import products from '../../../utils/data/products';

export default (req, res) => {
  const {
    query: { pid },
  } = req

  const product = products.find(x => x.id === pid);
  res.status(200).json(product);
}
