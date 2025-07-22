import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "../pages/FooterHomepage.css";

const Footer = () => {
  return (
    <footer className="footer-luxury py-5">
      <Container>
        <Row className="mb-5">
          <Col md={4}>
            <h4 className="footer-title">Aranyaka Farmstay</h4>
            <p className="footer-text">
              Rooted in Nature, Growing in Harmony, we offer a unique space for
              rest, reflection, and reconnection with the land and oneself.
            </p>
            <div className="footer-social mt-3">
              <a href="#" className="footer-icon me-3">
                <FaFacebookF />
              </a>
              <a href="#" className="footer-icon">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={4}>
            <h5 className="footer-subtitle">Address</h5>
            <ul className="list-unstyled footer-text">
              <li>
                <FaMapMarkerAlt className="me-2" />
                Ranipokhri, Uttarakhand 248145, India
              </li>
              <li>
                <FaPhoneAlt className="me-2" />
                +91 7409010108
              </li>
              <li>
                <FaPhoneAlt className="me-2" />
                +91 8377085842
              </li>
              <li>
                <FaEnvelope className="me-2" />
                aranyaka.108@gmail.com
              </li>
            </ul>
          </Col>

          <Col md={4} className="text-md-end map fade-in">
            <iframe
              title="Aranyaka Farmstay Map"
              src="https://www.google.com/maps?q=Aranyaka+Farmstay,+Ranipokhari&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="iframe-map"
            ></iframe>
          </Col>
        </Row>
        {/* 
        <hr className="footer-divider" />

        <Row className="newsletter mt-4 mb-2 text-center">
          <Col md={8} className="mx-auto">
            <p className="footer-text mb-2">🌿 Join our community & receive retreat updates</p>
            <Form className="d-flex justify-content-center">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="me-2 footer-newsletter-input"
              />
              <Button variant="outline-light" className="footer-newsletter-btn">Subscribe</Button>
            </Form>
          </Col>
        </Row> */}

        <Row>
          <Col className="text-center small footer-bottom-text">
            © 2025 Aranyaka Farmstay. All rights reserved | Designed by Shrishti
            Singh
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
