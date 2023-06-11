import React from "react";
import { Link } from "react-router-dom";
import '../components/Styles.css'
import { FaApple, FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      

      <footer className="section bg-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">About GoFood</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="/">Who We Are</Link></li>
                  <li><Link to="/">Blog</Link></li>
                  <li><Link to="/">Work With Us</Link></li>
                  <li><Link to="/">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">Ressources</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><a href="">Monitoring Grader </a></li>
                  <li><a href="">Video Tutorial</a></li>
                  <li><a href="">Term &amp; Service</a></li>
                  <li><a href="">Zeeko API</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">Legal</h6>
                <ul className="list-unstyled footer-link mt-4">
                  <li><Link to="/">Terms & Conditions</Link></li>
                  <li><Link to="/">Refund & Cancellation</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                  <li><Link to="/">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <h6 className="footer-heading text-uppercase text-white">Contact Us</h6>
                <p className="contact-info mt-4">Contact us if need help with anything</p>
                <p className="contact-info">+01 123-456-7890</p>
                <div className="mt-5">
                  <h6 className="footer-heading text-uppercase text-white">Social Links</h6>
                  <ul className="list-inline mt-4">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="facebook"><FaFacebook /></i>
                      </a>
                    </li>
                    <li className="list-inline-item"><i className="twitter"><FaTwitter /></i></li>
                    <li className="list-inline-item"><a href="#"><i className="google"><FaGoogle /></i></a></li>
                    <li className="list-inline-item"><a href="#"><i className="apple"><FaApple /></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="text-center mt-5">
          <p className="footer-alt mb-0 f-14">2023 © GoFood, All Rights Reserved</p>
        </div>
      </footer>

    </>
  );
};

export default Footer;
