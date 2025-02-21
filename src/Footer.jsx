import "./Footer.css";

function Footer() {
  return (
    <div className="Main-footer">
      <div className="Links">
        <div className="social-links">
          <ul>
            <h2 className="ciao">Social links</h2>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Threads</a></li>
          </ul>
        </div>
      </div>
      <div className="Contatti">
        <ul className="link-contatti">
          <h2 id="yee">Contatti</h2>
          <li id="margin">Numero di telefono 0646757367</li>
          <li>Email airstation@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;