const Header = () => (
  <header className="site-header">
    <div className="container">
      <h1>E-shop</h1>
      <nav className="site-nav">
        <a href="#">Products</a>
        <a href="#">Insipiration</a>
        <a href="#">Rooms</a>
      </nav>

      <div className="site-header__actions">
        <button><i class="icon-search"></i></button>
        <button><i class="icon-cart"></i></button>
        <button><i class="icon-avatar"></i></button>
      </div>
    </div>
  </header>
)


export default Header