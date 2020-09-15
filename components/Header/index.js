import { useState, useEffect, useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const [onTop, setOnTop] = useState(router.pathname === '/products' || router.pathname === '/product/[pid]' || router.pathname === '/cart' ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  //window.onscroll = null;
  useEffect(() => {
    if(router.pathname === '/products' || router.pathname === '/product/[pid]' || router.pathname === '/cart') {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return(
    <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`}>
      <div className="container">
        <Link href="/">
          <a><h1 className="site-logo"><Logo />E-Shop</h1></a>
        </Link>
        <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          <Link href="/products">
            <a>Products</a>
          </Link>
          <a href="#">Insipiration</a>
          <a href="#">Rooms</a>
          <button className="site-nav__btn"><p>Account</p></button>
        </nav>

        <div className="site-header__actions">
          <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
            <form className={`search-form`}>
              <input type="text" name="search" placeholder="Enter the product you are looking for" />
            </form>  
            <i onClick={() => setSearchOpen(!searchOpen)}  className="icon-search"></i>
          </button>
          <Link href="/cart">
            <button><i className="icon-cart"></i></button>
          </Link>
          <button className="site-header__btn-avatar"><i className="icon-avatar"></i></button>
          <button 
            onClick={() => setMenuOpen(true)} 
            className="site-header__btn-menu">
            <i className="btn-hamburger"><span></span></i>
          </button>
        </div>
      </div>
    </header>
  )
};


export default Header;