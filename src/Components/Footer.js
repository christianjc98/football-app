import React from "react";

const Footer = () => {
  let date = new Date().getFullYear();

  return (
    <footer>
      <div className="copyright">
        <p>
          Copyright{" "}
          {<span dangerouslySetInnerHTML={{ __html: "&copy" }}></span>}{" "}
          <span className="footer-date">{date}</span> Christian Janssen. FronEnd
          Portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
