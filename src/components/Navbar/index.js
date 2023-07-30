import React from 'react';
import './module.css'
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import './graidentBtn.style'
// Jahangir
// Logo component



const GradientBtn = () => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
   
    <div className={gutterStyles.parent}>
      {/* <div>
        
      </div> */}
      <div>
        <Button classes={chubbyStyles} sx={{width:"10px"}}>Login</Button>
      </div>
     
    </div>
   
  );
};
const GradientBtnDefault = () => {
  const styles = useGradientBtnStyles();
 
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
   
    <div className={gutterStyles.parent}>
      {/* <div>
        
      </div> */}
      
      <div><Button classes={styles}>Enroll Now</Button></div>
    </div>
   
  );
};

// Header component
const Header = () => {
  return (
    <>
    <header className="header" data-header>
      <div className="container">

        <a href="#" className="logo">
          <img src="./assets/images/logo.jpg" width="50" height="10" alt="EduWeb logo" />
        </a>

        <nav className="navbar" data-navbar>

          <div className="wrapper">
            <a href="#" className="logo">
              <img src="./assets/images/logo.jpg" width="50" height="50" alt="EduWeb logo" />
            </a>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list">

            {/* <li className="navbar-item md:hidden">
              <a href="#home" className="navbar-link" data-nav-link>Courses</a>
            </li> */}

           
<li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link>
                <div className="flex items-center gap-x-2">
                  <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-partner.svg" alt="" />
                  <p>Mentorship Program</p>
                  <button className="mentorship-btn">new</button>
                </div>
              </a>
            </li>


            <li className="md:block hidden">
              <div className="dropdown">
                <a href="#courses" className="dropbtn flex items-center gap-x-3">
                  Courses
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd"
                      d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                      clipRule="evenodd" />
                  </svg>
                </a>
                <div className="dropdown-content p-1 pr-0">
                <div className="md:flex md:w-[650px] w-full">
                  {/* <div className="md:w-[50%] md:pr-16">
                    <h4 className="font-semibold text-black text-[20px]">Recommended courses</h4>
                    <p>The most in demand courses at the <br/> moment</p>
                    <a href="">
                      <div
                        className="w-full h-[60px] border-[1px] rounded-lg hover:border-orange-500 mt-4 flex items-center justify-between">
                        <p className="pl-2">MERN stack</p>
                        <img className="h-[60%] w-[60%] -mr-12" src="./assets//images/mern-stack.svg" alt="" srcset=""/>
                      </div>
                    </a>
                    <a href="">
                      <div
                        className="w-full h-[60px] border-[1px] rounded-lg hover:border-orange-500 mt-6 flex items-center justify-between">
                        <p className="pl-2">Basics of C++ with Data Structures and Algorithms</p>
                        <img className="h-[60%] w-[60%]" src="./assets//images/c-language.svg" alt="" srcset=""/>
                      </div>
                    </a>
                  </div> */}

                 
                  <div className="md:w-[50%]">
                    <h4 className="font-semibold text-black text-[20px]">All courses</h4>
                    <p>Explore our wide range of courses</p>
                    <div>
                      <div className="mt-8">
                        <div className="childdropdown">
                          <div className="flex items-center justify-between">
                            <img src="https://files.codingninjas.com/Group-2.svg" alt=""/>
                            <p className="childdropbtn pl-4">Data structures and algorithms</p>
                            <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""/>
                          </div>
                          <div className="childdropdown-content p-4">
                            <p className="sub-heading">Data structures and algorithms</p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Basics of Python with Data Structures and Algorithms</p>
                                <img src="https://files.codingninjas.com/python-11712.svg" alt=""/>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Basics of Java with Data Structures and Algorithms</p>
                                <img src="https://files.codingninjas.com/java-11713.svg" alt=""/>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Basics of C++ with Data Structures and Algorithms</p>
                                <img src="https://files.codingninjas.com/c-11714.svg" alt=""/>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="childdropdown">
                          <div className="flex items-center justify-between">
                            <img src="https://files.codingninjas.com/Group%203738.svg" alt=""/>
                            <p className="childdropbtn pl-4">Competitive Programming</p>
                            <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""/>
                          </div>
                          <div className="childdropdown-content p-4">
                            <p className="sub-heading">Competitive Programming</p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Competitive Programming</p>
                                <img src="https://files.codingninjas.com/competitive-programming-11703.svg" alt=""/>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="childdropdown">
                          <div className="flex items-center justify-between">
                            <img src="https://files.codingninjas.com/interview-prep-old-11731.svg" alt=""/>
                            <p className="childdropbtn pl-5">Interview Preparation</p>
                            <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""/>
                          </div>
                          <div className="childdropdown-content p-4">
                            <p className="sub-heading">Goal Based</p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Product Companies Interview Prep</p>
                                <img src="https://files.codingninjas.in/service-based-companies-14528.svg" alt=""/>
                              </div>
                            </a>
                            <p className="sub-heading">Skill Based</p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>System Design</p>
                                <img src="https://files.codingninjas.com/system-design-12695.svg" alt=""/>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Database Management System (DBMS) course</p>
                                <img src="https://files.codingninjas.com/os-dbms-12694.svg" alt=""/>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Operating System</p>
                                <img src="https://files.codingninjas.com/operating-system-12696.svg" alt=""/>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Aptitude Preparation</p>
                                <img src="https://files.codingninjas.com/aptitude-12693.svg" alt=""/>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="childdropdown">
                          <div className="flex items-center justify-between">
                            <img src="https://files.codingninjas.com/Group.svg" alt=""/>
                            <p className="childdropbtn pl-5">Analytics & Data Science</p>
                            <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""/>
                          </div>
                          <div className="childdropdown-content p-4">
                            <p className="sub-heading">Analytics
                            </p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Data Analytics Course</p>
                                <img className="h-12 w-12" src="https://files.codingninjas.in/group-7241-15644.png" alt=""/>
                              </div>
                            </a>
                            <p className="sub-heading">Data Science & Machine Learning
                            </p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Machine Learning</p>
                                <img src="https://files.codingninjas.com/ml-11707.svg" alt=""/>
                              </div>
                            </a>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Data Science & Machine Learning</p>
                                <img src="https://files.codingninjas.com/data-science-11708.svg" alt=""/>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="childdropdown">
                          <div className="flex items-center justify-between">
                            <img src="https://files.codingninjas.com/Group-3.svg" alt=""/>
                            <p className="childdropbtn pl-5">Web Development</p>
                            <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""/>
                          </div>
                          <div className="childdropdown-content p-4">
                            <p className="sub-heading">Full Stack</p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>MERN stack</p>
                                <img src="https://files.codingninjas.com/mern-11710.svg" alt=""/>
                              </div>
                            </a>
                            <p className="sub-heading">Front-End</p>
                            <a href="#">
                              <div className="flex items-center justify-between">
                                <p>Frontend web dev - React</p>
                                <img src="https://files.codingninjas.com/react-11709.svg" alt=""/>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="childdropdown">
                          <div className="flex items-center justify-between">
                            <img src="https://www.codingninjas.com/assets-landing/icons/cc-header-course-icon.svg"
                              alt=""/>
                            <p className="childdropbtn pl-5">Career Camp <br/> <span className="text-gray-500 text-[14px]">An
                                extensive job assistance bootcamp</span> </p>
                            <img src="https://www.codingninjas.com/assets-landing/icons/open-dropdown-icon.svg" alt=""/>
                          </div>
                          <div className="childdropdown-content p-4">
                            <div>
                              <div className="flex items-center gap-x-4">
                                <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-rupee.svg" alt=""/>
                                <h3 className="font-semibold text-2xl">Average CTC of 9 LPA</h3>
                              </div>
                            </div>
                            <div className="my-3">
                              <div className="flex items-center gap-x-4">
                                <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-placement.svg"
                                  alt=""/>
                                <h3 className="font-semibold text-2xl">Dedicated placement cell</h3>
                              </div>
                            </div>
                            <div>
                              <div className="flex items-center gap-x-4">
                                <img src="https://www.codingninjas.com/assets-landing/icons/header-cc-partner.svg"
                                  alt=""/>
                                <h3 className="font-semibold text-2xl">170+ hiring partners</h3>
                              </div>
                            </div>
                            <p className="sub-heading mt-4 mb-3">3 steps to start the Career Camp
                              Freshers</p>
                            <div className="text-gray-500 text-2xl">
                              <p>1. Register and pay</p>
                              <p>2. Professional document verification</p>
                              <p>3. Dream career journey begins</p>
                            </div>
                            <button className="btn mt-8 bg-gradient-to-r from-orange-500 to-orange-400">
                              Know more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                {/* ... rest of the dropdown content ... */}
              </div>
            </li>

            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                <div className="flex items-center gax-x-2">
                  <p>Training Program</p>
                  
                </div>
              </a>
            </li>

            {/* <li className="navbar-item md:hidden">
              <a href="#courses" className="navbar-link" data-nav-link>Community</a>
            </li> */}

            <li className="hidden md:block">
              <div className="dropdown1 navbar-item">
                <a href="#courses" className="navbar-link inline-flex gap-2 items-center" data-nav-link>
                  Community
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mt-2">
                    <path fillRule="evenodd"
                      d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                      clipRule="evenodd" />
                  </svg>
                </a>
                <div className="dropdown-content1 w-full bg-white">
                <div className="p-10">
                  <div className="md:flex gap-16 justify-between">
                    <div>
                      <div className="flex navbar-link justify-between cursor-pointer items-center">
                        <a href="#events" className="" data-nav-link>Events</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" className="w-10 h-10">
                          <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                        </svg>
                      </div>
                      <a href="#" className="navbar-link" data-nav-link>Sponsorship & Collaborations</a>
                      <a href="#" className="navbar-link" data-nav-link>Campus Ambassador Program</a>
                    </div>
                    <div>
                      <h2 className="text-black ps-3 py-6">UPCOMING EVENTS</h2>
                      <div className="grid grid-cols-2 gap-7 font-medium text-2xl pb-7">
                        <div>
                          <img className="w-72 h-40" src="https://files.codingninjas.in/mobile-100-2-28742.jpg" alt="" />
                          <h3>
                            Master Your Career: <br />
                            The Ultima...
                          </h3>
                        </div>
                        <div>
                          <img className="w-72 h-40" src="https://files.codingninjas.in/artboard-9-2x-8-2-25888.png"
                            alt="" />
                          <h3>
                            Master Your Career: <br />
                            The Ultima...
                          </h3>
                        </div>
                        <div>
                          <img className="w-72 h-40" src="https://files.codingninjas.in/coding-event-mobile-27433.jpg"
                            alt="" />
                          <h3>
                            Master Your Career: <br />
                            The Ultima...
                          </h3>
                        </div>
                        <div>
                          <img className="w-72 h-40"
                            src="https://files.codingninjas.in/placement-assessment-test-mobile-29027.png" alt="" />
                          <h3>
                            Master Your Career: <br />
                            The Ultima...
                          </h3>
                        </div>
                      </div>
                      <button className="bg-[var(--kappel)] py-2 rounded-md px-4 text-white">
                        View all
                      </button>
                    </div>
                    <div className="text-2xl space-y-5">
                      <h2 className="text-black font-medium">PAST EVENTS</h2>

                      <p>General Aptitude Test || MSIT</p>
                      <p>Freshman</p>
                      <p>
                        Freshman Coding Concepts Series-A x SASI Institute of
                        Technology <br />
                        and Engineering
                      </p>
                      <p>
                        C- Wars Coding Contest || SRM Institute of Science &
                        <br />
                        Technology (ROUND 2) A
                      </p>
                      <button className="bg-[var(--kappel)] py-2 rounded-md px-4 text-white">
                        View all
                      </button>
                    </div>
                  </div>
                </div>
              </div>
                {/* ... rest of the dropdown content ... */}
              </div>
            </li>

            {/* <li className="navbar-link md:hidden">
              <a href="#blog" className="navbar-link" data-nav-link>Practice</a>
            </li> */}

            <li className="navbar-item hidden md:block">
              <div className="practice">
                <a href="#blog" className="pracbtn navbar-link" data-nav-link="">Practice</a>
                <div className="practice-content">
                <p>Writo.io</p>
                <a href="#">Mock Interview</a>
                <a href="#">Communication Skill</a>
               
               
                  {/* ... practice content ... */}
                </div>
              </div>
            </li>

           

           

          </ul>

        </nav>

        <div className="header-actions">

          <button className="header-action-btn" aria-label="toggle search" title="Search">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>

          {/* <button className="header-action-btn" aria-label="cart" title="Cart">
            <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>
            <span className="btn-badge">0</span>
          </button> */}
         

          <a href="#">
          <GradientBtn/>
          </a>
<div><GradientBtnDefault/></div>
          <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>

        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>

      </div>
   
    </header>
    <main><article><section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: "url('./assets/images/hero-bg.svg')" }}>
      <div className="container">

        <div className="hero-content">

          <h1 className="h1 section-title">
            The Best Program to <span className="span">Enroll</span> for Exchange
          </h1>

          <p className="hero-text">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </p>

          <a href="#" className="btn has-before">
            <span className="span">Find courses</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>

        </div>

        <figure className="hero-banner">

          <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
            <img src="./assets/images/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
          </div>

          <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
            <img src="./assets/images/hero-banner-2.jpg" width="240" height="370" alt="hero banner" className="img-cover" />
          </div>

          <img src="./assets/images/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1" />

          <img src="./assets/images/hero-shape-2.png" width="622" height="551" alt="" className="shape hero-shape-2" />

        </figure>

      </div>
    </section>
  </article></main>
    </>
  );
};

export default Header;



