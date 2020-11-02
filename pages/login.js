import Layout from '../layouts/Main';
import Link from 'next/link';

const LoginPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a><i className="icon-left"></i> Back to store</a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title">Log in</h2>
          <p className="form-block__description">Lorem Ipsum is simply dummy text of the printing and typesetting 
          industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          
          <form className="form">
            <div className="form__input-row">
              <input className="form__input" placeholder="email" type="text" />
            </div>
            
            <div className="form__input-row">
              <input className="form__input" type="password" placeholder="Password" />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label htmlFor="check-signed-in" className={`checkbox checkbox--sm`}>
                  <input name="signed-in" type="checkbox" id="check-signed-in" />
                  <span className="checkbox__check"></span>
                  <p>Keep me signed in</p>
                </label>
              </div>
              <a href="#" className="form__info__forgot-password">Forgot password?</a>
            </div>

            <div className="form__btns">
              <button type="button" className="btn-social fb-btn"><i className="icon-facebook"></i>Facebook</button>
              <button type="button" className="btn-social google-btn"><img src="/images/icons/gmail.svg" alt="gmail" /> Gmail</button>
            </div>

            <button type="button" className="btn btn--rounded btn--yellow btn-submit">Sign in</button>

            <p className="form__signup-link">Not a member yet? <a href="/register">Sign up</a></p>
          </form>
        </div>

      </div>
    </section>
  </Layout>
)
  
export default LoginPage
  