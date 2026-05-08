import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <footer className="Footer">
      {props.isLoggedIn && (
        <div className="Footer-top">
          <div className="Footer-brand">
            <h2 className="Footer-logo">AccessCommerce</h2>
            <p className="Footer-description">
              Your accessible marketplace for premium audio and accessories.
            </p>
          </div>

          <div className="Footer-company">
            <ul>
              <li>
                <a href="/company">Company</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/press">Press</a>
              </li>
            </ul>
          </div>

          <div className="Footer-support">
            <ul>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/accessibility">Accessibility</a>
              </li>
              <li>
                <a href="/shipping">Shipping & Returns</a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {!props.isLoggedIn && (
        <div className="Logged-out-footer">
          <div className="Footer-links">
            <span>AccessibleCa</span>
            <div className="Footer-social-links">
              <Link to="#">Instagram</Link>
              <Link to="#">X</Link>
              <Link to="#">Github</Link>
            </div>
          </div>
          <div className="Footer-copy">@ AccessibleCart 2026</div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
