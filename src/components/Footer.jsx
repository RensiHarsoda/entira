import React from "react";

function Footer() {
  return (
    <div className="footer-main-sec">
      <div className="footer-box-wrap container">
        <div className="footer-content">
          <div className="office">
            <h1>Head Office</h1>
            <div className="dets">
              <i class="fa-solid fa-envelope"></i>
              <span>office@enira.com</span>
            </div>
            <div className="dets">
              <i class="fa-solid fa-phone"></i>
              <span>+91 75634 37568</span>
            </div>
          </div>
          <div className="support">
            <h1>Support</h1>
            <span>Help Center</span>
            <span>Ticket</span>
            <span>Support Center</span>
            <span>FAQ</span>
          </div>
          <div className="offers">
            <h1>Get Exclusive Offers</h1>
            <p>
              Join our mailing list to receive exclusive discounts, sneak peeks
              of new arrivals, and the latest jewelry insights directly to your
              inbox.
            </p>
          </div>
        </div>
        <div className="mail">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
            className="input-mail"
          />
          <div className="footer-btn-design">
                <button>Sign up</button>
            </div>

        </div>
        
      </div>
      <div className="copyright">
        <p>©2024 All Rights Reserved by Option Game || Designed and developed With ❤️ by Grafizen LLC</p>
      </div>
    </div>
  );
}

export default Footer;
