import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">About</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Help Center</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Refund Policy</a>
        </nav>
        <nav>
          <h6 className="footer-title"> Get in touch</h6>
          <div className="flex gap-4 items-center">
            <Link to="https://web.facebook.com/ma.joynul">
              <a className="link link-hover text-xl">
                <FaSquareFacebook />
              </a>
            </Link>
            <Link to="https://www.linkedin.com/">
              <a className="link link-hover text-xl">
                <IoLogoLinkedin />
              </a>
            </Link>
            <Link to="https://github.com/joynul24">
              <a className="link link-hover text-xl">
                <FaGithub />
              </a>
            </Link>
          </div>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <label>Enter your email address</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
