import useSwr from 'swr';
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';

const ProductsContent = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSwr('/api/products', fetcher);

  if (error) return <div>Failed to load users</div>;
  return (
    <>
      {!data && 
        <ProductsLoading />
      }

      {data &&
        <section className="products-list">
          {data.map((item: ProductTypeList)  => (
            <ProductItem 
              id={item.id} 
              name={item.name}
              price={item.price}
              color={item.color}
              currentPrice={item.currentPrice}
              key={item.id}
              images={item.images} 
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent