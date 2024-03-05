import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>

            <div />
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba',marginTop:'20px' }}>

                <div className="container p-4 pb-0">

                    <section className="">

                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bolder">Wellness Ally</h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </div>
                          

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bolder">Services</h6>
                                <p>
                                    < Link className="text-white"  style={{textDecoration:'none',fontSize:'13px'}}>Medication suggestion </Link>
                                </p>
                                <p>
                                    <Link className="text-white"  style={{textDecoration:'none',fontSize:'13px'}}>Symptom Management</Link>
                                </p>
                                <p>
                                    <Link className="text-white"  style={{textDecoration:'none',fontSize:'13px'}}>Exercise Videos</Link>
                                </p>
                                <p>
                                    <Link className="text-white"  style={{textDecoration:'none',fontSize:'13px'}}>Diet Plans</Link>
                                </p>
                            </div>
                            {/* Grid column */}

                            <hr className="w-100 clearfix d-md-none" />

                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                                <p>
                                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                                </p>
                                <p>
                                    <i className="fas fa-envelope mr-3"></i> wellnessally@gmail.com
                                </p>
                                <p>
                                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                                </p>
                                <p>
                                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                                </p>
                            </div>
                            {/* Grid column */}

                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                                {/* Facebook */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#3b5998' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-facebook-f"></i>
                                </a>

                                {/* Twitter */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#55acee' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>

                                {/* Google */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#dd4b39' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-google"></i>
                                </a>

                                {/* Instagram */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#ac2bac' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>

                                {/* Linkedin */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#0082ca' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                {/* Github */}
                                <a
                                    className="btn btn-primary btn-floating m-1"
                                    style={{ backgroundColor: '#333333' }}
                                    href="#!"
                                    role="button"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                        {/* Grid row */}
                    </section>
                    {/* Section: Links */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright: <a className="text-white">WellnessAlly.com</a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
            {/* </div> */}


        </>
    )
}

export default Footer