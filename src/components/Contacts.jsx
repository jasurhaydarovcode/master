import React, { useState, useRef } from 'react'
import CustomHook from './CustomHook';
import Tegs from './tegs';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+998 91 959 5599'
    }, {
      title: 'Email',
      value: 'abdulazizsaidovcode@gmail.com'
    }, {
      title: 'Instagram',
      value: '@Abdulazizsaodov_'
    }
  ])


  return (
    <section className='contacts flex flex-col items-center' id='box' >
      <h1 className="text-center text-5xl font-museo-moderno font-sans flex justify-center items-end mb-7" >
        <Tegs teg={"h1"}>
          My Contacts
        </Tegs>
      </h1>
      <h1 className="text-[#eee5] max-w-[700px] flex justify-end" >
        <Tegs teg={"p"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
        </Tegs>
      </h1>
      <div className="list" >
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Contacts
