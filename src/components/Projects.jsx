import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import Project1 from "../Assets/projects/Reactideas.png"
import Tegs from './tegs';
import Btnfirst from './buttons/First';
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


  return (
    <section>
      <div className='w-full generall__border py-5'>
        <div className='w-max generall__border mx-auto py-5'>
          <div className="font-museo-moderno font-system mt-0 mb-10 text-center text-[5vw] flex justify-center items-end" >
            <Tegs teg={"h1"} className=""><p>My Projects</p></Tegs>
          </div>

          <div className=" text-center max-w-[500px] m-auto flex justify-center items-end" >
            <Tegs teg={"p"}>
              <p className='px-3'>Lorem ipsum dolor sit amet.</p>
            </Tegs>
          </div>
        </div>
      </div>
      <div className="list mt-14 ">
        {
          listProjects.map((value, key) => (
            <div className='h-max grid grid-cols-2 justify-between  mb-56 gap-20 ' key={key} >

              <div className='generall__border p-4 flex items-center'>
                <div className=" rel col-start-2 col-end-3 bg-gradient-to-tr from-[#100e2887] to-[#3600fb68] p-10 text-center rounded-xl overflow-hidden h-full w-full">
                  <img className='h-[400px] rounded-xl shadow-md' src={value.images} alt="projects rasmlari" />
                </div>
              </div>

              <div className="col-start-1 col-end-2 row-start-1">
                <div className='generall__border p-4'>

                  <div className='p-5 generall__border mb-3'>
                    <Tegs teg={"h2"} row={true}>
                      <h3 className='text-5xl m-0'>{value.name}</h3>
                      <p className="text-left w-full text-white mt-5">{value.des}</p>
                    </Tegs>
                  </div>

                  <div className='p-5 generall__border'>
                    <div className="rel grid grid-cols-[70px,1fr] items-center gap-3 ">
                      <div className='bg-[#cccccc54] w-14 h-14 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                      <div>
                        <h4>Mission</h4>
                        <div className="">{value.mission}</div>
                      </div>
                    </div>
                    <div className="rel grid grid-cols-[70px,1fr] items-center gap-3 mt-3">
                      <div className='bg-[#cccccc54] w-14 h-14 text-xl flex justify-center items-center rounded-md'><FontAwesomeIcon icon={faEarthAmericas} /></div>
                      <div>
                        <h4>Languages</h4>
                        <div className="">{value.language}</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-[70px,1fr] items-center gap-3 mt-10">

                    <div className='flex gap-3'>
                      <Btnfirst text='github' link='https://github.com/abdulazizsaidovcode' />
                      <Btnfirst text='live' />
                      <Btnfirst text='view more' />
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
