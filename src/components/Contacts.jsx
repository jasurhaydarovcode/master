import React, { useState } from 'react';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+998 91 959 5599',
    },
    {
      title: 'Email',
      value: 'abdulazizsaidovcode@gmail.com',
    },
  ]);

  return (
    <section className='flex flex-col items-center py-36'>
      <h1 className='generall__border mx-10 px-20 py-10 text-center text-5xl font-museo-moderno font-sans flex justify-center items-end mb-7'>
        My Contacts
      </h1>
      <div className='flex flex-col md:flex-row py-10 gap-10 justify-center'>
        {listContacts.map((value, key) => (
          <div className='generall__border p-5 w-full md:w-64' key={key}>
            <h3 className='text-3xl'>{value.title}</h3>
            <div className='flex items-center'>
              <div className='text-xl'>{value.value}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contacts;
