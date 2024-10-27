import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkedAlt, faTags, faTicketAlt, faCheckCircle, faPhoneAlt, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import '../css/Home.css';
import '../css/style.css';
import Navbar from './Header.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import aboutCompany from '../images/ecommerce.webp';
import imageLeft from '../images/Saree.png';
import imageRight from '../images/Saree_Right.png';

const Home = () => {
  const phoneNumber = '7013765836';
  const message = 'Hello! I need some assistance.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="App">
      <Navbar />
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      {/* Carousel Section */}
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            
            <div className="carousel-item active">
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                  <h4 className="text-blue text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    Your One-Stop Shop for All Your Needs!
                  </h4>
                  <h1 className="display-1 text-capitalize text-blue mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">
                    Shop Smart, Shop PrimeOfferShop!
                  </h1>
                  <p className="text-black mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">
                    Explore our wide range of quality products and unbeatable deals that make shopping a breeze. From fashion to electronics, home essentials to health products, we've got everything you need, all in one place!
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: '900px' }}>
                  <h5 className="text-blue text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    Fast & Reliable Delivery
                  </h5>
                  <h1 className="display-1 text-capitalize text-blue mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.3s">
                    Speed, Security, and Satisfaction!
                  </h1>
                  <p className="text-black mb-4 mb-md-5 fs-5 wow fadeInUp" data-wow-delay="0.5s">
                    At PrimeOfferShop, we ensure quick, secure, and reliable delivery for every order. From fast processing to careful handling, we make sure your package reaches you safely and on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-secondary wow fadeInLeft" data-wow-delay="0.2s" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-secondary wow fadeInRight" data-wow-delay="0.2s" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 animate__animated animate__fadeInLeft" data-wow-delay="0.1s">
              <div className="bg_light_rounded">
                <img
                  src={aboutCompany}
                  className="img_fluid_about_image"
                  style={{ marginBottom: '-7px' }}
                  alt="Image"
                />
                <img
                  src={aboutCompany}
                  className="img_fluid_about_image border-bottom border-5 border-primary"
                  style={{
                    borderTopRightRadius: '300px',
                    borderTopLeftRadius: '300px'
                  }}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-xl-7 animate__animated animate__fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title pe-3">About the company</h5>
              <h1 className="display-5 mb-4">Your Trusted eCommerce & Delivery Partner.</h1>
              <p className="mb-4">
                PrimeOfferShop is your trusted online shopping destination, offering a wide range of quality products with fast, reliable delivery. We prioritize customer satisfaction by ensuring a seamless shopping experience, secure payments, and efficient logistics. Shop with confidence and get everything you need delivered straight to your door, quickly and effortlessly
              </p>
              <div className="row gy-4 align-items-center">
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="fa-3x text-secondary" />
                  <h5 className="ms-4">Nationwide Coverage</h5>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-center">
                  <FontAwesomeIcon icon={faTags} className="fa-3x text-secondary" />
                  <h5 className="ms-4">Exclusive Offers & Discounts</h5>
                </div>
                <div className="col-4 col-md-3">
                  <div className="bg-light text-center rounded p-3">
                    <div className="mb-2">
                      <FontAwesomeIcon icon={faTicketAlt} className="fa-4x text-primary" />
                    </div>
                    <h1 className="display-5 fw-bold mb-2">0</h1>
                    <p className="text-muted mb-0">Years of Experience</p>
                  </div>
                </div>
                <div className="col-8 col-md-9">
                  <div className="mb-5">
                    <p className="text-primary h6 mb-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
                      Offer 100 % Genuine Assistance
                    </p>
                    <p className="text-primary h6 mb-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
                      It’s Faster & Reliable Execution
                    </p>
                    <p className="text-primary h6 mb-3">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-secondary me-2" />
                      Accurate & Expert Advice
                    </p>
                  </div>
                  <div className="d-flex flex-wrap">
                    <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                      <a href="#" className="position-relative animate__animated animate__tada" data-wow-delay=".9s">
                        <FontAwesomeIcon icon={faPhoneAlt} className="text-primary fa-3x" />
                        <div className="position-absolute" style={{ top: '0', left: '25px' }}>
                          <FontAwesomeIcon icon={faCommentDots} className="text-secondary" />
                        </div>
                      </a>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                      <span className="text-primary">Have any questions?</span>
                      <span className="text-secondary fw-bold fs-5" style={{ letterSpacing: '2px' }}>
                        Free: +91 7013765836
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <div className="banner-images">
          <img
            className="banner-image-left"
            src={imageLeft}
            alt="Left Model"
          />
          <div className="banner-content text-center">
            <h1 className="banner-title">Unlock Exclusive Benefits</h1>
            <h4 className="banner-subtitle">Become a PrimeOfferShop Member</h4>
            <button className="btn btn-primary banner-btn">Sign Up Now</button>
            <p className="banner-description">
              Join our membership for special access to exclusive collections,
              early previews, and personalized styling tips. Elevate your fashion
              journey with rewards tailored just for you!
            </p>
          </div>
          <img
            className="banner-image-right"
            src={imageRight}
            alt="Right Model"
          />
        </div>
      </div>
      <div className="container-fluid features overflow-hidden py-5">
        <div className="container">
          <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Why Choose Us</h5>
            </div>
            <h1 className="display-5 mb-4">Custom Solutions Tailored to Your Needs</h1>
            <p className="mb-0">
              At our e-commerce platform, we provide personalized services designed to meet your specific requirements. Our commitment to customer satisfaction ensures that you receive the best products and services tailored to your preferences. Experience seamless delivery and exceptional support that puts you first!
            </p>
          </div>
          <div className="card-section">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <i className={`fas ${card.icon}`}></i>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid contact overflow-hidden pb-5">
        <div className="container py-5">
          <div className="office pt-5">
            <div className="section-title text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="sub-style">
                <h5 className="sub-title text-primary px-3">Discover Our Exclusive Products</h5>
              </div>
              <h1 className="display-5 mb-4">Explore Our Range of Exceptional Offerings</h1>
              <p className="mb-0">
                Unlock premium quality and unbeatable prices with our diverse selection. From top-tier electronics to stylish apparel, we provide everything you need to elevate your lifestyle. Don't miss out on our latest deals designed to meet your every need and exceed your expectations!
              </p>
            </div>
            <div className="row g-4 justify-content-center">
              {products.map((product, index) => (
                <div key={index} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                  <div className="office-item p-4 border rounded position-relative overflow-hidden">
                    <div className="office-img mb-4 position-relative">
                      <img src={product.imgSrc} className="img-fluid w-100 rounded" />
                    </div>
                    <div className="office-content d-flex flex-column">
                      <h4 className="mb-2">{product.title}</h4>
                      <p className="mb-0">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <a
        href={whatsappLink}
        className="whatsapp-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
      </a>
      <Footer />
    </div>
  );
};
const products = [
  {
    title: 'Australia',
    description: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
    imgSrc: require('../images/IMG-20241014-WA0020.jpg'),
  },
  {
    title: 'Canada',
    description: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
    imgSrc: require('../images/IMG-20241014-WA0020.jpg'),
  },
  {
    title: 'United Kingdom',
    description: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
    imgSrc: require('../images/IMG-20241014-WA0016.jpg'),
  },
  {
    title: 'India',
    description: '123, First Floor, 123 St Roots Terrace, Los Angeles 90010 United States of America.',
    imgSrc: require('../images/IMG-20241014-WA0020.jpg'),
  },
];

const cards = [
  {
    icon: 'fa-boxes',
    title: 'Unmatched Product Variety',
    description: 'Explore a diverse selection of premium products, from cutting-edge tech to stylish apparel and essential home goods—there’s something for everyone!',
  },
  {
    icon: 'fa-truck',
    title: 'Real-Time Order Tracking',
    description: 'Track your order in real-time from checkout to delivery, ensuring you know exactly when your package will arrive.',
  },
  {
    icon: 'fa-tags',
    title: 'Exclusive Offers and Discounts',
    description: 'Enjoy exclusive promotions and discounts on our platform, updated regularly to help you save on your favorite items.',
  },
  {
    icon: 'fa-credit-card',
    title: 'Secure Payment & Hassle-Free Returns',
    description: 'Shop confidently with secure payment options and hassle-free returns, ensuring a safe and stress-free shopping experience tailored to your needs.',
  }
];

export default Home;
