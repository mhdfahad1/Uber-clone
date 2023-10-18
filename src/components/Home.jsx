import { useEffect, useState } from 'react'
import React from 'react'
import './Home.css'
import AOS from "aos";
import "aos/dist/aos.css";
function Home() {
    const [ride, setRide] = useState(0)
    const drive = () => {
        setRide(1)
    }
    const rentfleet = () => {
        setRide(2)
    }
    const dride = () => {
        setRide(0)
    }
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);
    return (
        <>
            <div id='main23' data-aos="fade-up">
                {ride == 0 ? <img className='hoemimage img-fluid' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1885,h_965/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png" alt="" />
                    : ride == 1 ? <img className='hoemimage img-fluid' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1885,h_1000/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png" alt="" />
                        : <img className='hoemimage img-fluid' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1885,h_934/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg" alt="" />
                }                <div className='form'>
                    <div className='options d-flex justify-content-between'>
                        <div onClick={dride} className='ride'>
                            <i className="fa-solid fa-car ms-1 fs-5"></i><br />
                            <p className='fcontent'>Ride</p>
                            {ride == 0 ?
                                <hr className='underline' />
                                :
                                ""
                            }
                        </div>
                        <div onClick={drive} className='drive'>
                            <i className="fa-solid fa-signal ms-3 fs-5"></i>
                            <p className='fcontent'>Drive or <br />&nbsp;deliver</p>
                            {
                                ride == 1 ?
                                    <hr className='underline1' />

                                    : ""
                            }
                        </div>
                        <div onClick={rentfleet}>
                            <i className="fa-solid fa-key ms-4 fs-5"></i>
                            <p className='fcontent'>Rent your <br />&nbsp;&nbsp;&nbsp;&nbsp; fleet</p>
                            {
                                ride == 2 ?
                                    <hr className='underline2' />

                                    : ""
                            }
                        </div>

                    </div>
                    <hr style={{ marginTop: '-20px' }} />

                    {ride == 0 ?
                        <div>
                            <h1 className='heading'>Request a ride now</h1>
                            <input className='inputbox' type="text" placeholder='Enter pickup location' /><br />
                            <input className='inputbox' type="text" placeholder='Enter destination' />

                            <div>
                                <button className='buttons'>Request now</button>
                                <button className='buttons1'>Schedule for later</button>
                            </div>
                        </div>
                        : ride == 1 ?
                            <div>
                                <h1 className='heading'>Get in the driver’s seat and get paid</h1>
                                <p className='drivetext'>Drive on the platform with the largest network of active riders.</p>
                                <button className='buttons2'>Sign up drive</button><br />
                                <u><a className='link22'>Learn more about driving and delivering</a></u>
                            </div> :
                            <div>
                                <h1 className='heading'>Make money by renting out your car</h1>
                                <p className='drivetext'>Connect with thousands of drivers and earn more per week with Uber’s free fleet management tools.</p>
                                <button className='buttons2'>Get started</button>
                            </div>
                    }


                </div>
            </div>
            <br />
            <div data-aos="fade-up" className='container getstarted'>
                <h1 className='head12'>The Uber you know, reimagined for buisness</h1>
                <p className='text'>A platform for managing global rides and meals, and local deliveries, for companies of any size.</p>
                <button className='button2'>Get started</button>

            </div>

            <div data-aos="fade-up" className='focused22'>
                <h1 className='focused' >Focused on safety, wherever you go</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='img-fluid imges' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_819,h_546/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="" />
                        <h4 className='heading4' style={{ marginLeft: '50px' }}>Our commitment to your safety</h4>
                        <p className='text1' style={{ marginLeft: '50px' }}>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                        <div style={{ marginLeft: '50px' }} className="links"><u><a className='link' href="">Read about our Community Guidelines</a></u>&nbsp;&nbsp;&nbsp;
                            <u><a className='link' href="">See all safety features</a></u></div>
                    </div>

                    <div id='focus2' className='col-md-6'>
                        <img className='img-fluid imges' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_386,h_257/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="" />
                        <h4 className='hhead'> Our commitment to your safety</h4>
                        <p className='text2'>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                        <div className="links"><u><a className='link' href="">See all safety features</a></u></div>
                    </div>

                </div>
            </div>

            <div data-aos="fade-up" id='about' className='row'>
                <div id='firstdiv' className="col-lg-4">
                    <i class="fa-solid fa-person fs-4"></i>
                    <h5>About us</h5>
                    <p className='text3 justify-content-center align-items-center'>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
                    <u><a className='link' href="">Learn more about Uber</a>
                    </u>
                </div>

                <div className="col-lg-4 ">
                    <i class="fa-solid fa-table-list fs-4"></i>
                    <h5>Newsroom</h5>
                    <p className='text3 justify-content-center align-items-center'>See announcements about our latest releases, initiatives, and partnerships.</p>
                    <u> <a className='link' href="">Go to Newsroom</a>
                    </u>
                </div>

                <div className="col-lg-4 ">
                    <i class="fa-solid fa-house fs-4"></i>
                    <h5>Global citizenship</h5>
                    <p className='text3 justify-content-center align-items-center'>Read about our commitment to making a positive impact in the cities we serve.</p>
                    <u><a className='link' href="">See our partnerships</a>
                    </u>
                </div>
            </div>

            <div data-aos="fade-up" className='uber44'>
                <h1 className='focused44'>Ride with Uber</h1>
                <div className='d-flex'>
                    <div id='uberautos' className=" d-flex">

                        <img className='img-fluid' width={'150px'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png" alt="" />
                        <div>
                            <h2 className='auberhead'>Uber Auto</h2>
                            <p className='text3'>Get affordable Auto rides with no hagging. <br />
                                Request Uber Uto and ride comfortably around your city</p>
                        </div>

                    </div>
                    <div id='uberautos1' className=" d-flex">
                        <img className='img-fluid' width={'150px'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt="" />
                        <div>
                            <h2 className='auberhead'>Uber Moto</h2>
                            <p className='text3'>Get affordable bike rides doorstep. <br />
                                skip the crowd and zip through traffic with Uber Moto</p>
                        </div>
                    </div>
                </div>
                <div className=' d-flex'>
                    <div id='uberautos' className=" d-flex">
                        <img className='img-fluid' width={'150px'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="" />
                        <div>
                            <h2 className='auberhead'>Uber Rentals</h2>
                            <p className='text3'>Book rentals to save time with one car and driver <br /> for your multi-stop trips</p>
                        </div>
                    </div>
                    <div id='uberautos3' className=" d-flex">
                        <img className='img-fluid' width={'150px'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png" alt="" />
                        <div>
                            <h2 className='auberhead'>Uber Intercity</h2>
                            <p className='text3'>Book intercity to head outstation anytime  in convinient <br /> and affordable cars</p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className='cardtype'>
                <h1 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 'bolder' }}>It's easier in the apps</h1>
                <div className='cardcollecton'>
                    <div className='scan shadow'>
                        <div className='d-flex'>
                            <img className='img-fluid21' width={'150px'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="" />
                            <div>
                                <h2 className='uberapp'>Download the Uber app</h2>
                                <p className='download'>Scan to download</p>
                            </div>
                            <i style={{ marginTop: '55px', marginLeft: '20px' }} class="fa-solid fa-arrow-right fs-3"></i>
                        </div>
                    </div>
                    <div className='scan d-flex shadow'>
                        <img className='img-fluid21' width={'150px'} src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_225,h_225/v1690807720/assets/a5/9986ad-0d9f-4396-8539-389bce97f579/original/Final-Download-Uber-App.png" alt="" />
                        <div>
                            <h2 className='uberapp'>Download the Driver app</h2>
                            <p className='download'>Scan to download</p>
                        </div>
                        <i style={{ marginTop: '55px', marginLeft: '20px' }} class="fa-solid fa-arrow-right fs-3"></i>

                    </div>
                </div>
            </div>

            <div data-aos="fade-up" className='d-flex lastdiv'>
                <div >
                    <h1 className='diveride'>Sign up to drive  </h1>
                    <hr style={{ width: '520px', marginTop: '50px' }} />
                </div>
                <div id='ride' >
                    <h1 className='diveride1'>Sign up to ride</h1>
                    <hr style={{ width: '520px', marginTop: '50px' }} />
                </div>
            </div>

        </>
    )
}

export default Home