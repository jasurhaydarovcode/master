import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Btnfirst from './buttons/First';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pacman from "../Assets/projects/Pacman.png"
import qrpay from "../Assets/projects/qrpay.png"
import pch from "../Assets/projects/pch14.png"
import sfera_systems from "../Assets/projects/sfera_system.jpg"
import gsr_logistic from "../Assets/projects/GSR Logistic Management.png"
import gts_office from "../Assets/projects/gts-office.jpg"
import bookers from "../Assets/projects/bookers.jpg"

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
      name: 'CR - Pay',
      type: 'game',
      des: "Web Dashboard and Mobile application in ios and android",
      mission: 'The goal of the project: an iOS and Android application and a website were created that allow customers to pay by converting foreign currency into Uzbek soums using a QR code.',
      language: 'React Native for mobile , Vite reactJs bank integrations ',
      images: qrpay,
      link: 'http://qrpay.uz',
      github: 'https://github.com/Alisher0903/qr-web'
    },
    {
      name: 'Railway Plan',
      type: 'dashboard',
      des: "The Kashkadarya railway repair enterprise is a structural unit of the Karshi Regional Railway Junction branch enterprise. This enterprise is independently fully responsible for the results of its economic activity, in accordance with the law, before consumers, the state budget, the bank, and the enterprise team for the obligations received on the basis of mutually concluded contracts.",
      mission: 'The goal of our website is to automate maintenance and manage it more efficiently. Facilitates planning, monitoring and reporting through this website. The main functions of the website consist of:',
      language: 'Next Js (React) Typescript, Tailwind CSS',
      images: pch,
      link: 'https://pch14.uz/home',
      github: 'https://github.com/SardorbekCoder07/Railway_z'
    },
    {
      name: 'Pacman',
      type: 'game',
      des: "A Pac-Man game written in JavaScript (JS), an implementation of the JavaScript programming language to define a version of the classic arcade game to run in web browsers.",
      mission: 'is a deep understanding of java scripting down to the basics',
      language: 'HTML5, CSS3, Java Script',
      images: pacman,
      link: 'https://abdulazizs-pacman.vercel.app/',
      github: 'https://github.com/abdulazizsaidovcode/PACMAN'
    },
    {
      "name": "Sfera Systems",
      "type": "educational management system",
      "des": "A comprehensive system for educational centers that manages student registrations, attendance, assessments, video tutorials, and evaluates student performance while monitoring the status of the educational center.",
      "mission": "To systematize the management of educational centers and enhance the educational process through efficient use of technology.",
      "language": "React js, Next, Zustand, React query, Typescript, Acernaty UI, Shadcn UI",
      "images": sfera_systems,
      "link": "",
      "github": "https://github.com/abdulazizsaidovcode"
    }
    , {
      "name": "GSR Logistic Management",
      "type": "logistics management system",
      "des": "A system designed to manage logistics companies, offering features like fleet management, cargo tracking, and operational efficiency.",
      "mission": "To streamline operations for logistics companies and provide a centralized platform for managing logistics operations.",
      "language": "React js, Zustand, Type Script, React query, Chakra UI",
      "images": gsr_logistic,
      "link": "",
      "github": "https://github.com/abdulazizsaidovcode"
    },
    {
      "name": "GTS1 Office Testing System",
      "type": "pre-employment testing system",
      "des": "A system that provides testing services for office spaces before employment, helping companies ensure that their new hires are fit for their roles.",
      "mission": "To assist companies in making informed hiring decisions by providing comprehensive pre-employment testing.",
      "language": "React js, Zustand, Type Script, React query, Chacra UI",
      "images": gts_office,
      "link": "",
      "github": "https://github.com/abdulazizsaidovcode"
    },
    {
      "name": "Bookers",
      "type": "Mobile Application for Beauty and Wellness Services",
      "des": "Bookers is a mobile application dedicated to beauty and wellness services. Users can easily book various services, manage their time and statistics. They also have the option to choose service times in beauty salons.",
      "mission": "To provide users with the best beauty and health services and make them easily accessible.",
      "language": "React js, Tailwindcss, Firebase, Ant Design",
      "images": bookers,
      "link": "",
      "github": "https://github.com/abdulazizsaidovcode"
    }
  ]);


  return (
    <section>
      <div className='w-full generall__border py-5'>
        <div className='w-max generall__border mx-auto py-5'>

          <div className="font-museo-moderno font-system mt-0 mb-10 text-center text-[5vw] flex justify-center items-end md:px-36" >
            <p data-cursor-style>My Projects</p>
          </div>

          <div className=" text-center max-w-[500px] m-auto flex justify-center items-end" >
            <p className='px-3'>A brief overview of my projects.</p>
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
                  <img src={value.images} alt="rasm" className='w-full h-full rounded-xl hover:scale-105 transition-all object-cover' />
                </div>
              </div>

              <div className="col-start-1 col-end-2 row-start-1">
                <div className='generall__border p-4'>

                  <div className='md:p-5 p-3 generall__border mb-3'>
                    <h3 data-cursor-style className='text-5xl m-0 w-max'>{value.name}</h3>
                    <p data-cursor-style className="text-left w-full text-white mt-5">{value.des}</p>
                  </div>

                  <div className='md:p-5 p-2 generall__border'>

                    <div className="rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1">
                      <div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                      <div>
                        <h4 data-cursor-style className='w-max'>Mission</h4>
                        <div data-cursor-style className="text-xs">{value.mission}</div>
                      </div>
                    </div>

                    <div className="rel grid grid-cols-[70px,1fr] items-center md:gap-3 gap-1 mt-3">
                      <div className='bg-[#cccccc54] md:w-14 md:h-14 w-10 h-10 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                        <h4 data-cursor-style className='w-max'>Languages</h4>
                        <div data-cursor-style className="">{value.language}</div>
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
