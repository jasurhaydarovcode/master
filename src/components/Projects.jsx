import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';
import Project1 from "../Assets/projects/Reactideas.png"
import LinkBtn from './buttons/link';
import Tegs from './tegs';
function Projects() {
  const [listProjects] = useState([
    {
      name: 'Project Real-time chating in website',
      des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
      mission: 'Back-end Developer, system analysis and design',
      language: 'HTML5, CSS3, React JS, SockerIO,...',
      images: Project1,
    },
    {
      name: 'Project Real-time chating in website',
      des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
      mission: 'Back-end Developer, system analysis and design',
      language: 'HTML5, CSS3, React JS, SockerIO,...',
      images: '/project2.PNG'
    },
    {
      name: 'Project Real-time chating in website',
      des: 'Eu voluptate sit do labore consectetur in ad esse qui laborum ad eiusmod. Esse ea velit culpa exercitation anim enim reprehenderit. Fugiat nostrud non dolore aliquip quis in ea amet duis.',
      mission: 'Back-end Developer, system analysis and design',
      language: 'HTML5, CSS3, React JS, SockerIO,...',
      images: '/project2.PNG'
    },

  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  
  return (
    <section ref={scrollTab}>
      <div className="font-museo-moderno font-system mt-0 mb-10 text-center text-[5vw] flex justify-center items-end" ref={(el) => el && divs.current.push(el)}>
        <Tegs teg={"h1"} className=""><p>My Projects</p></Tegs>
      </div>

      <div className=" text-center max-w-[500px] m-auto flex justify-center items-end" ref={(el) => el && divs.current.push(el)}>
        <Tegs teg={"p"}>
          <p className='px-3'>Lorem ipsum dolor sit amet.</p>
        </Tegs>
      </div>
      <div className="list mt-14">
        {
          listProjects.map((value, key) => (
            <div className='h-max grid grid-cols-2 justify-between items-center mb-56 gap-20' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="col-start-2 col-end-3 bg-gradient-to-tr from-[#1808ae87] to-[#3600fb68] p-10 text-center rounded-xl overflow-hidden">
                <img className='h-[400px] rounded-xl shadow-md' src={value.images} alt="projects rasmlari" />
              </div>
              <div className="col-start-1 col-end-2 row-start-1">
                <Tegs teg={"h2"} row={true}>
                  <h3 className='text-5xl m-0'>{value.name}</h3>
                </Tegs>
                <Tegs teg={"p"} row={true}>
                  <p className="text-left w-full text-white mt-5">{value.des}</p>
                </Tegs>
                <div className=" grid grid-cols-[70px,1fr] items-center gap-3 mt-3">
                  <div className='bg-[#cccccc54] w-14 h-14 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Mission</h4>
                    <div className="">{value.mission}</div>
                  </div>
                </div>
                <div className="grid grid-cols-[70px,1fr] items-center gap-3 mt-3">
                  <div className='bg-[#cccccc54] w-14 h-14 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Languages</h4>
                    <div className="">{value.language}</div>
                  </div>
                </div>
                <div className="grid grid-cols-[70px,1fr] items-center gap-3 mt-3">
                  <div className='relative z-40'>
                    <LinkBtn />
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
