import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => (
  <Layout>
    <PageIntro />

    <section className="featured">
      <div className="container">
        <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h3>New arrivals are now in!</h3>
            <a href="#" className="btn btn--rounded">Show Collection</a>
          </div>
        </article>
        
        <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
          <div className="featured-item__content">
            <h3>Basic t-shirts $29,99</h3>
            <a href="#" className="btn btn--rounded">More details</a>
          </div>
        </article>
        
        <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
          <div className="featured-item__content">
            <h3>Sale this summer</h3>
            <a href="#" className="btn btn--rounded">VIEW ALL</a>
          </div>
        </article>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <header className="section__intro">
          <h4>Why should you choose us?</h4>
        </header>

        <ul className="shop-data-items">
          <li>
            <i className="icon-shipping"></i>
            <div className="data-item__content">
              <h4>Free Shipping</h4>
              <p>On purchases over $199</p>
            </div>
          </li>
          
          <li>
            <i className="icon-shipping"></i>
            <div className="data-item__content">
              <h4>99% Satisfied Customers</h4>
              <p>Our clients' opinions speak for themselves</p>
            </div>
          </li>
          
          <li>
            <i className="icon-cash"></i>
            <div className="data-item__content">
              <h4>Originality Guaranteed</h4>
              <p>30 days warranty for each product from our store</p>
            </div>
          </li>
          
          <li>
            <i className="icon-cash"></i>
            <div className="data-item__content">
              <h4>Originality Guaranteed</h4>
              <p>30 days warranty for each product from our store</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <ProductsFeatured />
    <Subscribe />
    <Footer />
  </Layout>
)


export default IndexPage