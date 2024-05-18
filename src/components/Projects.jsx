import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Btnfirst from './buttons/First';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pacman from "../Assets/projects/Pacman.png"
import zlatmax from "../Assets/projects/zlatmax.png"
function Projects() {
  useEffect(() => {
    AOS.init({
      // Bu yerda sizning sozlamalaringiz, masalan:
      duration: 1000,
      once: false, // faqat bir marta animatsiyani ishga tushirish 
    });
  }, []);

  const [listProjects] = useState([
    {
      name: 'ZlatMax',
      des: "The online store 'ZLATMAX' presents products from famous Zlatoust knife manufacturers. All models do not belong to edged weapons, which is documented.",
      mission: 'Zlatmax.It is an internet magazine with only parts made visible to the user,but only the appearance of this website is made. ',
      language: 'HTML5, CSS3, Java Script',
      images: zlatmax,
      link: 'https://zlatmax-clone-abdulazizs.vercel.app/',
      github: 'https://github.com/abdulazizsaidovcode/Zlatmax__clone'
    },
    {
      name: 'Pacman',
      des: "A Pac-Man game written in JavaScript (JS), an implementation of the JavaScript programming language to define a version of the classic arcade game to run in web browsers.",
      mission: 'is a deep understanding of java scripting down to the basics',
      language: 'HTML5, CSS3, Java Script',
      images: pacman,
      link: 'https://abdulazizs-pacman.vercel.app/',
      github: 'https://github.com/abdulazizsaidovcode/PACMAN'
    },

  ]);


  return (
    <section>
      <div className='w-full generall__border py-5'>
        <div className='w-max generall__border mx-auto py-5'>

          <div className="font-museo-moderno font-system mt-0 mb-10 text-center text-[5vw] flex justify-center items-end md:px-36" >
            <p>My Projects</p>
          </div>

          <div className=" text-center max-w-[500px] m-auto flex justify-center items-end" >
            <p className='px-3'>Lorem ipsum dolor sit amet.</p>
          </div>

        </div>
      </div>
      <div className="list mt-14 ">
        {
          listProjects.map((value, key) => (
            <div
              className=' md:p-5 h-max grid lg:grid-cols-2 grid-cols-1 justify-between  md:mb-56 mb-20 lg:gap-16 md:gap-10 gap-5 '
              key={key}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
            >

              <div className='generall__border md:p-4 p-2  flex justify-center items-center'>
                <div className="generall__border rel col-start-2 col-end-3 bg-gradient-to-tr dynamic-style-bg to-[#3600fb68] md:p-10 p- text-center rounded-xl overflow-hidden h-full w-ful ">
                  <img src={value.images} alt="rasm" className='w-full h-full rounded-xl hover:scale-105 transition-all' />
                </div>
              </div>

              <div className="col-start-1 col-end-2 row-start-1">
                <div className='generall__border p-4'>

                  <div className='md:p-5 p-3 generall__border mb-3'>
                    <h3 className='text-5xl m-0'>{value.name}</h3>
                    <p className="text-left w-full text-white mt-5">{value.des}</p>
                  </div>

                  <div className='md:p-5 p-2 generall__border'>

                    <div className="rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1">
                      <div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                      <div>
                        <h4>Mission</h4>
                        <div className="text-xs">{value.mission}</div>
                      </div>
                    </div>

                    <div className="rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1 mt-3">
                      <div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                        <h4>Languages</h4>
                        <div className="">{value.language}</div>
                      </div>
                    </div>

                  </div>

                  <div className=" mt-10">

                    <div className='flex gap-3 flex-wrap md:justify-start justify-center w-full'>
                      <Btnfirst text='github' link='https://github.com/abdulazizsaidovcode' />
                      <Btnfirst text='live' link={value.link} />
                      <Btnfirst text='view more' link={value.github} />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Projects
