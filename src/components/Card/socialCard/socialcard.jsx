import React from 'react';

function SocialCard() {
  const socialLinks = [
    {
      href: 'https://t.me/Abdulaziz_saidov',
      icon: 'fa-brands fa-telegram',
      title: 'Abdul Aziz',
      username: '@abdulaziz_saidov',
    },
    {
      href: 'https://www.instagram.com/Abdulazizsaidov_/',
      icon: 'fa-brands fa-instagram',
      title: 'Abdul Aziz',
      username: '@abdulazizsaidov_',
    },
    {
      href: 'https://leetcode.com/u/AbdulAzizSaidov/',
      icon: 'fa-solid fa-code',
      title: 'LeetCode profile',
      username: '@AbdulAzizSaidov',
    },
  ];

  return (
    <div className='flex gap-5 md:mt-36 flex-col md:flex-row'>
      <div className='flex flex-col gap-5'>
        {socialLinks.slice(0, 2).map((link, index) => (
          <a
            key={index}
            href={link.href}
            className='rounded-2xl flex items-center p-2 w-64 mb-2 hover:scale-105 transition-all generall__border'
          >
            <i className={`${link.icon} rounded-full md:w-12 md:h-12 mr-3 md:text-5xl text-4xl`}></i>
            <div className='rounded-2xl'>
              <div className='font-semibold text-sm text-start'>{link.title}</div>
              <div className='text-xs text-gray-500'>{link.username}</div>
            </div>
          </a>
        ))}
      </div>
      {socialLinks.slice(2).map((link, index) => (
        <a
          key={index}
          href={link.href}
          className='rounded-2xl flex items-center gap-3 p-2 w-64 hover:scale-105 transition-all generall__border'
        >
          <i className={`${link.icon} rounded-full md:w-12 md:h-12 mr-3 md:text-5xl text-4xl`}></i>
          <div className='rounded-2xl'>
            <div className='font-semibold text-sm text-start'>{link.title}</div>
            <div className='text-xs text-gray-500'>{link.username}</div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialCard;
