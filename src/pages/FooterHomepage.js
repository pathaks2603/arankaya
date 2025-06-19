import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import '../pages/FooterHomepage.css'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <Container>
        <Row className="mb-4">
          {/* Left Section */}
          <Col md={4}>
            <h5>Aranyaka Farm stay</h5>
            <hr className="border-light w-25" />
            <p>
              Shrishti Singh, build a professional website for your hotel business and grab the
              attention of new visitors upon your site’s launch.
              shrishti.singh2111@gmail.com
            </p>
            <h6 className="mt-4">Legals</h6>
            <hr className="border-light w-25" />
            <ul className="list-unstyled">
              <li>- Privacy Policy</li>
              <li>- Terms & Conditions</li>
              <li>- Cancellation and Refund</li>
            </ul>
          </Col>

          {/* Address Section */}
          <Col md={5}>
            <h5>Address</h5>
            <hr className="border-light w-25" />
            <p><FaMapMarkerAlt className="me-2" />
              Aranyaka Poonch farm Ward no.222, Ranipokhari, Uttarakhand 248145
            </p>
            <p><FaPhoneAlt className="me-2" />+91 7409010108</p>
            <p><FaPhoneAlt className="me-2" />+91 8377085842</p>
            <p><FaEnvelope className="me-2" />aranyaka.108@gmail.com</p>
          </Col>

          {/* Map Section */}
          <Col md={3}>
            <iframe
              title="Aranyaka Farmstay Map"
              src="https://www.google.com/maps?q=Aranyaka+Farmstay,+Ranipokhari&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>

        {/* Bottom Line */}
        <Row>
          <Col className="text-center small">
            © 2025 Aranyaka Farm stay rights reserved | Designed By Shrishti Singh
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
