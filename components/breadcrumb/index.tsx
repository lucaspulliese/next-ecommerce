type BreadcrumbType = {
  currentPage: string;
}

const Breadcrumb = ({ currentPage }: BreadcrumbType) => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li><a href="#"><i className="icon-home"></i></a></li>
        <li>All Products</li>
      </ul>
    </div>
  </section>
);


export default Breadcrumb