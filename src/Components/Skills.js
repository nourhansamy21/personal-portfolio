import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>You Can See My Skills Here</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div className="outer">
                                  <div className="inner">
                                    <div className="number">
                                      90%
                                    </div>
                                  </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='sk'>
                                        <defs>
                                            <linearGradient id="GradientColor">
                                              <stop offset="0%" stop-color="rgba(81, 54, 202, 0.5)" />
                                              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.5)" />
                                            </linearGradient>
                                        </defs>
                                        <circle className='circle1' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                                <h5>BackEnd Development</h5>
                            </div>
                            <div className="item">
                            <div className="outer">
                                  <div className="inner">
                                    <div className="number">
                                      95%
                                    </div>
                                  </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='sk'>
                                        <defs>
                                            <linearGradient id="GradientColor">
                                              <stop offset="0%" stop-color="rgba(81, 54, 202, 0.5)" />
                                              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.5)" />
                                            </linearGradient>
                                        </defs>
                                        <circle className='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                                <h5>FrontEnd Development</h5>
                            </div>
                            <div className="item">
                            <div className="outer">
                                  <div className="inner">
                                    <div className="number">
                                      93%
                                    </div>
                                  </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='sk'>
                                        <defs>
                                            <linearGradient id="GradientColor">
                                              <stop offset="0%" stop-color="rgba(81, 54, 202, 0.5)" />
                                              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.5)" />
                                            </linearGradient>
                                        </defs>
                                        <circle className='circle3' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                                <h5>UI/UX Design</h5>
                            </div>
                            <div className="item">
                            <div className="outer">
                                  <div className="inner">
                                    <div className="number">
                                      90%
                                    </div>
                                  </div>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className='sk'>
                                        <defs>
                                            <linearGradient id="GradientColor">
                                              <stop offset="0%" stop-color="rgba(81, 54, 202, 0.5)" />
                                              <stop offset="100%" stop-color="rgba(255, 255, 255, 0.5)" />
                                            </linearGradient>
                                        </defs>
                                        <circle className='circle4' cx="80" cy="80" r="70" stroke-linecap="round" />
                                </svg>
                                <h5>Data Science</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}