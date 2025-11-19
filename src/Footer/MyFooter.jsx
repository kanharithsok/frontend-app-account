import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';
import messages from './messages';

const MyFooter = () => {
  const { formatMessage } = useIntl();
  return (
    <div className="d-flex row align-content-center justify-content-center">
      <footer className="footer-container">
        {/* Bottom Footer */}
        <div className="footer-bottom font-red-hat-display">
          <Container fluid>
            <Row className="text-left text-white text-md-left">
              {/* Logo */}
              <Col xs={12} md={12} lg={2} className="pl-0 d-flex m-2 justify-content-center ">
                {/* <img src={logoWhite} alt="Logo" className="logo" /> */}
              </Col>

              {/* Copyright */}
              <Col xs={12} md={12} lg={5} className="mb-4 mb-md-0 d-flex align-items-center justify-content-center">
                <p className="small m-0 text-center">{formatMessage(messages.allRightsReserved)}</p>
              </Col>

              {/* Links */}
              <Col xs={12} md={12} lg={4} className="my-links mb-4 mb-md-0 d-flex align-items-center justify-content-end">
                <ul className="list-inline m-0">
                  <li className="list-inline-item mx-2">
                    <a href={getConfig().LMS_BASE_URL} className="text-white small">
                      {formatMessage(messages.myCourse)}
                    </a>
                  </li>
                  {/* |
                  <li className="list-inline-item mx-2">
                    <a href={`${getConfig().LMS_BASE_URL}/library`} className="text-white small">

                      {formatMessage(messages.library)}
                    </a>
                  </li> */}
                  |
                  <li className="list-inline-item mx-2">
                    <a href={`${getConfig().LMS_BASE_URL}/contact`} className="text-white small">

                      {formatMessage(messages.contactUs)}
                    </a>
                  </li>
                  |
                  <li className="list-inline-item mx-2">
                    <a href={getConfig().ACCOUNT_SETTINGS_URL} className="text-white small">

                      {formatMessage(messages.account)}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </div>
  );
};

export default MyFooter;
