import Layout from './../layouts/Main';
import PageIntro from './../components/PageIntro';
import Product from './../components/Product';
import ProductsFeatured from './../components/ProductsFeatured';

const IndexPage = () => (
  <Layout>
    <PageIntro />

    <section className="featured">
      <div className="container">
        <article className="featured-item featured-item-large">
          <div className="featured-item__content">
            <h3>New arrivals are now in!</h3>
            <a href="#" className="btn btn--rounded">Show Collection</a>
          </div>
        </article>
        
        <article className="featured-item featured-item-small-first">
          <div className="featured-item__content">
            <h3>Basic t-shirts $29,99</h3>
            <a href="#" className="btn btn--rounded">More details</a>
          </div>
        </article>
        
        <article className="featured-item featured-item-small">
          <div className="featured-item__content">
            <h3>Sale this summer</h3>
            <a href="#" className="btn btn--rounded">VIEW ALL</a>
          </div>
        </article>
      </div>
    </section>

    <ProductsFeatured />

    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6><img src="/images/logo.svg" alt="logo" /> E-Shop</h6>
            <p>House My Brand designs clothing for the young, the old & everyone in between – but most importantly, for the fashionable</p>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="container">
          <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  </Layout>
)


export default IndexPage