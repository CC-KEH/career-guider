import logo from '../assets/img/logo.png';
import styles from './NihaScreen.module.css';

function NihaScreen() {
  return (
      <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>Abstrato</title>
  <meta content="" name="description" />
  <meta content="" name="keywords" />
  {/* Favicons */}
  <link href="../assets/img/favicon.png" rel="icon" />
  <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

  <link href="../assets/vendor/aos/aos.css" rel="stylesheet" />
  <link href="../assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  <link
    href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
    rel="stylesheet"
  />
  <link href="../assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
  <link href="../assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
  <link href="../assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
  <link href="../assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
  {/* Main CSS File */}
  <link href="assets/css/style.css" rel="stylesheet" />
  {/* Header*/}
  <header className={`${styles.header} ${"fixed-top"}`}>
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto">
        <a className={styles.a} href="index.html">Abstrato</a>
      </h1>
      <a href="index.html" className="logo me-auto">
        <img src="assets/img/logo.png" alt="" className="img-fluid" />
      </a>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a className="nav-link scrollto active" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="nav-link   scrollto" href="#portfolio">
              Feautres
            </a>
          </li>
          <li>
            <a className="nav-link scrollto" href="#team">
              Team
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <span>MyAccount</span> <i className="bi bi-chevron-down" />
            </a>
            <ul>
              <li>
                <a href="#">Communities</a>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Roadmaps</span> <i className="bi bi-chevron-right" />
                </a>
                <ul>
                  <li>
                    <a href="#">Deep Drop Down 1</a>
                  </li>
                  <li>
                    <a href="#">Deep Drop Down 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Progress</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="nav-link scrollto" href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>
      {/* .navbar */}
    </div>
  </header>
  {/* End Header */}
  {/* ======= Hero Section ======= */}
  <section id="hero" className="d-flex align-items-center">
    <div className="container">
      <div className="row">
        <div
          className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <h1>Unlock your dream job!</h1>
          <h2>
            Your dream job is within reach. <br />
            Let us show you the path to get there.
          </h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </div>
        <div
          className="col-lg-6 order-1 order-lg-2 hero-img"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <img
            src="assets/img/hero-img.png"
            className="img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* End Hero */}
  <main id="main">
    {/* ======= Cliens Section ======= */}
    <section id="cliens" className="cliens section-bg">
      <div className="container">
        <div className="row" data-aos="zoom-in">
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/work.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/grow.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/giphy.gif"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/work.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/haha.gif"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/clients/lol.gif"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* End Cliens Section */}
    {/* ======= About Us Section ======= */}
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        <div className="row content">
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
              <li>
                <i className="ri-check-double-line" /> Duis aute irure dolor in
                reprehenderit in voluptate velit
              </li>
              <li>
                <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat
              </li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* End About Us Section */}
    {/* ======= Why Us Section ======= */}
    <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
            <div className="content">
              <h3>
                Looking for a helping hand?{" "}
                <strong>This is your destination</strong>
              </h3>
              <p>but how exactly?</p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Want to build an ideal resume?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>dbfkaefcahdfchdfchaerfh</p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    className="collapsed"
                  >
                    <span>02</span> Don't know which way to go and how?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-2"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>sdjxbhawkedbuegfuygfaweofjwjef erver89v</p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed"
                  >
                    <span>03</span>Have fomo from missing out on the community?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-3"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>dchfkduhfudhfckdhkhddf</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
            style={{ backgroundImage: 'url("assets/img/why-us.png")' }}
            data-aos="zoom-in"
            data-aos-delay={150}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </section>
    {/* End Why Us Section */}
    {/* ======= Skills Section ======= */}
    <section id="skills" className="skills">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <img src="assets/img/skills.png" className="img-fluid" alt="" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <h3>Visualize your progress</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="skills-content">
              <div className="progress">
                <span className="skill">
                  HTML <i className="val">100%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  CSS <i className="val">90%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  JavaScript <i className="val">75%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
              <div className="progress">
                <span className="skill">
                  Photoshop <i className="val">55%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Skills Section */}
    {/* ======= Services Section ======= */}
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bxl-dribbble" />
              </div>
              <h4>
                <a href="">Lorem Ipsum</a>
              </h4>
              <p>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-file" />
              </div>
              <h4>
                <a href="">Sed ut perspici</a>
              </h4>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay={300}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-tachometer" />
              </div>
              <h4>
                <a href="">Magni Dolores</a>
              </h4>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
            data-aos="zoom-in"
            data-aos-delay={400}
          >
            <div className="icon-box">
              <div className="icon">
                <i className="bx bx-layer" />
              </div>
              <h4>
                <a href="">Nemo Enim</a>
              </h4>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Services Section */}
    {/* ======= Cta Section ======= */}
    <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>All set to start the journey?</h3>
            <p>
              {" "}
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className="cta-btn align-middle" href="#">
              Creat Account
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* End Cta Section */}
    {/* ======= Team Section ======= */}
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Team</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div
              className="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Niharika Singh</h4>
                <span>lol</span>
                <p>
                  Explicabo voluptatem mollitia et repellat qui dolorum quasi
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div
              className="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Arbash lol</h4>
                <span>Product Manager</span>
                <p>
                  Aut maiores voluptates amet et quis praesentium qui senda para
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div
              className="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Vidit</h4>
                <span>CTO</span>
                <p>
                  Quisquam facilis cum velit laborum corrupti fuga rerum quia
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-4">
            <div
              className="member d-flex align-items-start"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="pic">
                <img
                  src="assets/img/team/team-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="member-info">
                <h4>Medusa</h4>
                <span>Accountant</span>
                <p>
                  Dolorum tempora officiis odit laborum officiis et et accusamus
                </p>
                <div className="social">
                  <a href="">
                    <i className="ri-twitter-fill" />
                  </a>
                  <a href="">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="">
                    <i className="ri-instagram-fill" />
                  </a>
                  <a href="">
                    {" "}
                    <i className="ri-linkedin-box-fill" />{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Team Section */}
    {/* ======= Pricing Section ======= */}
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Pricing</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="box">
              <h3>Free Plan</h3>
              <h4>
                <sup>$</sup>0<span>per month</span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check" /> Quam adipiscing vitae proin
                </li>
                <li>
                  <i className="bx bx-check" /> Nec feugiat nisl pretium
                </li>
                <li>
                  <i className="bx bx-check" /> Nulla at volutpat diam uteera
                </li>
                <li className="na">
                  <i className="bx bx-x" />{" "}
                  <span>Pharetra massa massa ultricies</span>
                </li>
                <li className="na">
                  <i className="bx bx-x" />{" "}
                  <span>Massa ultricies mi quis hendrerit</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="box featured">
              <h3>premium plan</h3>
              <h4>
                <sup>$</sup>29<span>per month</span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check" /> Quam adipiscing vitae proin
                </li>
                <li>
                  <i className="bx bx-check" /> Nec feugiat nisl pretium
                </li>
              </ul>
              <a href="#" className="buy-btn">
                Get Started
              </a>
            </div>
          </div>
          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="box">
              <h3>Supreme Plan</h3>
              <h4>
                <sup>$</sup>49<span>per month</span>
              </h4>
              <ul>
                <li>
                  <i className="bx bx-check" /> Quam adipiscing vitae proin
                </li>
                <li>
                  <i className="bx bx-check" /> Nec feugiat nisl pretium
                </li>
                <li>
                  <i className="bx bx-check" /> Nulla at volutpat diam uteera
                </li>
                <li>
                  <i className="bx bx-check" /> Pharetra massa massa ultricies
                </li>
              </ul>
              <a href="#" className="buy-btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Pricing Section */}
    {/* ======= Contact Section ======= */}
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>India gate</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>you@hello.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+sdssf</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              action="forms/contact.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required=""
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    {/* End Contact Section */}
  </main>
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer className={styles.footer}>
    <div className={styles.footer_newsletter}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h4>Join Our Newsletter</h4>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.footer_top}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Abstrato</h3>
            <p>
              A108 Adam Street <br />
              CHANDIN CHOWK
              <br />
              Japan <br />
              <br />
              <strong>Phone:</strong> 983439596034
              <br />
              <strong>Email:</strong> info@example.com
              <br />
            </p>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Product Management</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
              </li> 
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="#">Graphic Design</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>
              Find us on these socials
            </p>
            <div className="social-links mt-3">
              <a href="#" className={`${"twitter"} ${styles.href}`}>
                <i className="bx bxl-twitter" />
              </a>
              <a href="#" className={`${"facebook"} ${styles.href}`}>
                <i className="bx bxl-facebook" />
              </a>
              <a href="#" className={`${"instagram"} ${styles.href}`}>
                <i className="bx bxl-instagram" />
              </a>
              <a href="#" className={`${"google plus"} ${styles.href}`}>
                <i className="bx bxl-skype" />
              </a>
              <a href="#" className={`${"linkedin"} ${styles.href}`}>
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* End Footer */}
  <div className={styles.preloader} />
  <a
    href="#" 
    className={`${"back-to-top d-flex align-items-center justify-content-center"}${styles.href}`}
  >
    <i className="bi bi-arrow-up-short" />
  </a>
</>
  );
}

export default NihaScreen;
