import "./footer.css";
import { FiFacebook,  } from "react-icons/fi";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="left">
          <span>Contact</span>
          <p>
            Swarnava Karan <br />
            Kolkata <br />
            pin -700063
          </p>
        </div>
        <div className="mid">
          <span>Tel 9874236520</span>
          <br />
          <span>Email swarnavakaran@gmail.com</span>
          <br />
          <p>
            <Link href={"/"}>
              <FiFacebook />
            </Link>
            <Link href={"https://www.linkedin.com/in/swarnava-karan-846b211ba"}>
              <FaLinkedin />
            </Link>
            <Link href={"https://github.com/swarnava2001karan"}>
              <FaGithub />
            </Link>
          </p>
        </div>
        <div className="right">
          <span>Subscribe to Get Our Newsletter</span>
          <form>
            <input type="email" placeholder="Enter Your Email" />{" "}
            <button type="submit">Join</button>
          </form>
          <p>Thanks for submitting!</p>
        </div>
      </div>

      <div className="bottom">
        © 2024 by Karan. Proudly created by Swarnava Karan
      </div>
    </footer>
  );
};

export default Footer;
