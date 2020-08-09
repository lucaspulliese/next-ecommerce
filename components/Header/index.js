class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: false,
    };  
  }

  headerClass() {
    if(window.pageYOffset === 0) {
      this.setState({
        onTop: true,
      });
    } else {
      this.setState({
        onTop: false,
      });
    }
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  componentDidMount() {
    const self = this;
    this.headerClass();
    window.onscroll = function() {
      self.headerClass();
    };
  }

  render() {
    return(
      <header className={`site-header ${!this.state.onTop ? 'site-header--fixed' : ''}`}>
        <div className="container">
          <h1>E-shop</h1>
          <nav className="site-nav">
            <a href="#">Products</a>
            <a href="#">Insipiration</a>
            <a href="#">Rooms</a>
          </nav>

          <div className="site-header__actions">
            <button><i className="icon-search"></i></button>
            <button><i className="icon-cart"></i></button>
            <button><i className="icon-avatar"></i></button>
          </div>
        </div>
      </header>
    )
  }
};


export default Header