import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { withRouter } from 'next/router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: this.props.router.pathname === '/products' || this.props.router.pathname === '/product/[pid]' ? false : true,
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
    if(this.props.router.pathname === '/products' || this.props.router.pathname === '/product/[pid]') {
      return;
    }

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
          <Link href="/">
            <a><h1 className="site-logo"><Logo />E-Shop</h1></a>
          </Link>
          <nav className="site-nav">
            <Link href="/products">
              <a>Products</a>
            </Link>
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


export default withRouter(Header);