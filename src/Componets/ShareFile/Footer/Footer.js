import React from 'react';
import { Link } from 'react-router-dom';
import { faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../../images/logo.png'
import './Footer.css'



const Footer = () => {
    const date = new Date();
    const fullDate = date.getFullYear();
    return (
        <div className="footer">
            <div className="footer-section">
                <footer className="footer container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6">
                            <div className="footet-item">
                                <Link to='/' className='text-light fs-4 fst-italic'>   <img src={ logo } alt='logo' className='img-fluid' style={ { height: '80px',width:'200px' } }></img></Link>
                                <p className='text-secondary mt-2 fs-6'>30 song downloads and unlimited ad-free music listening, on 1 mobile device.</p>
                                <div className="social-link">
                                    <ul className='d-flex align-items-center mt-2'>
                                        <li className='m-0 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy" target='__blank'></Link><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy"></Link><FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy"></Link><FontAwesomeIcon icon={ faGoogle }></FontAwesomeIcon></li>
                                        <li className='ms-4 text-light' style={ { cursor: 'pointer' } }><Link to="https://www.facebook.com/bakulray.ajoy"></Link><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footet-item">
                                <h3 className=' text-capitalize fs-6 text-light'>Company</h3>
                                <ul className='text-capitalize fs-6'>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>about us</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Jobs</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>For all recoad</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>playlist</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>services</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>audio</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="footet-item">
                                <h3 className='text-capitalize fs-6 text-light'>community</h3>
                                <ul className='text-capitalize fs-6'>

                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>For Artists</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Developers</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Advertising</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Investors</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Vendors</Link>
                                    </li>

                                    <li>
                                        <Link to="/" className='text-secondary mt-2 d-block'>Grinders</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footet-item">
                                <h3 className=' text-capitalize fs-6  text-light'>Contact with us</h3>

                                <address className='mt-3'>
                                    <p className='text-secondary m-2'>Email : spotify@gmail.com</p>
                                    <p className='text-secondary m-2'>Mobile : +8801791860562</p>
                                    <p className='text-secondary m-2'>Phone : +53286852333586</p>
                                </address>
                                <form>
                                    <div className="subscribe-btn mt-3">
                                        <input type="email" name="email" id="" className='sub-input w-100 d-block' placeholder='Email address' required />
                                        <input type="submit" className='sub-btn  text-capitalize fs-6 fs-6' value="subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer >
                <div className="copyright text-center mt-5 pb-3">
                    <p className='text-secondary' style={ { fontWeight: '500' } }>Copyright © Spotify { fullDate } all rights reserved</p>
                </div>
            </div >

        </div>
    );
};

export default Footer;