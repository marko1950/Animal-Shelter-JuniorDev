import style from "..//..//styles/Footer.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <div className={style.footer_wrapper}>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Animal Shelter
                </h6>
                <p>Being the voices of the unspoken.</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Sponsors</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pet Sponsorship Program
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Petco Love
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    PetSmart Charities
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Legality
                  </a>
                </p>

                <p>
                  <a href="#!" className="text-reset">
                    Usual Questions
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> Zagreb, Croatia
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i> info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i>+ 385 523 234 12
                </p>
                <p>
                  <i className="fas fa-print me-3"></i>+ 385 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
