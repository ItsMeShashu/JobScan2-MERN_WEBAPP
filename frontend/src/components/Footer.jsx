/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="./jobscan-white.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Lincon Street-Sector-62, Noida(Uttar Pradesh), India</li>
            <li>JobScan@gmail.com</li>
            <li>+91-9387876384</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link
                to={"https://www.linkedin.com/in/shashwat-garg-9731a4281/"}
                target="_blank"
              >
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/ItsMeShashu"} target="_blank">
                <span>
                  <FaGithub />
                </span>
                <span>Github</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <RiProfileFill />
                </span>
                <span>Portfolio</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; Copyright 2024. All Rights Reserved.
      </div>
      {/* <div > */}
      <span className="copyright2">JOBSCAN - By Shashwat Garg</span>
      {/* </div> */}
    </>
  );
};

export default Footer;
