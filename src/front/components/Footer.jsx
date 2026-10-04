
import React from "react";
import { PiDog } from "react-icons/pi";
import { PiCat } from "react-icons/pi";
import { PiHorse } from "react-icons/pi";
import { PiGithubLogoFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import footer from "../assets/img/logo.jpeg";

export const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'white',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white'
    }}>
      <div className="container-fluid text-center text-md-left">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-1 d-flex justify-content-center ">
            <img
              src={footer}
              alt="Perfil"
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div className="col-md-6 text-md-start text-center text-dark">
            <h5 className="text-uppercase">We are SköllMonkeys</h5>
            <p>Tu equipo OCR</p>
          </div>
         
          <div className="col-md-2 ">
            <h5 className="text-dark text-uppercase fw-bold text-dark">SIGUENOS</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.instagram.com/skolmonkeysocr/" className="link-footer"><FaInstagram /> SköllMonkeysOcr</a></li>
             
            </ul>
          </div>
              <div className="text-center text-dark" style={{ borderTop: "1px solid #ddd" }}>
			<p className="mb-0 py-3">© 2026 SköllMonkeys. Todos los derechos reservados.</p>
      </div>
        </div>
      </div>
    </footer>
  )
};