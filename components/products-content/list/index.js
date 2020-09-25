import { useEffect } from 'react';
import { useRouter } from 'next/router';
import useSwr from 'swr';
import ProductItem from './../../product-item';
import ProductsLoading from './loading';

const ProductsContent = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const router = useRouter();
  const queryParams = router.query;
  const { data, error, mutate, isValidating } = useSwr('/api/products', fetcher);

  useEffect(() => {
    mutate();
  }, [queryParams]);

  if (error) return <div>Failed to load users</div>;
  if (!data) return <ProductsLoading />;

  return (
    <>
      {isValidating && 
        <ProductsLoading />
      }

      {!isValidating &&
        <section className="products-list">
          {data.map(item => (
            <ProductItem 
              discount={item.discount} 
              key={item.id}
              id={item.id} 
              price={item.price}
              currentPrice={item.currentPrice}
              productImage={item.images[0]} 
              name={item.name}
            />
          ))}
        </section>
      }
    </>
  );
};
  
export default ProductsContent