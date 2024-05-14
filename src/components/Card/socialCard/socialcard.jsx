import React from 'react';

function SocialCard() {
  return (
    <div className='flex gap-5 md:mt-36'>
      <a href='https://t.me/Abdulaziz_saidov' className="rounded-2xl flex items-center p-2 w-64 rel  hover:scale-105 transition-all generall__border">
        <i class="fa-brands fa-telegram rounded-fullmd:w-12 md:h-12  mr-3 md:text-5xl text-4xl"></i>
        <div className='rounded-2xl'>
          <div className="font-semibold text-sm text-start">Abdul Aziz</div>
          <div className="text-xs text-gray-500">@abdulaziz_saidov</div>
        </div>
      </a>
      <a href='https://www.instagram.com/Abdulazizsaidov_/' className="rounded-2xl flex items-center p-2 w-64 rel  hover:scale-105 transition-all generall__border">
        <i class="fa-brands fa-instagram rounded-full md:w-12 md:h-12  mr-3 md:text-5xl text-4xl"></i>
        <div className='rounded-2xl'>
          <div className="font-semibold text-sm text-start">Abdul Aziz</div>
          <div className="text-xs text-gray-500">@abdulazizsaidov_</div>
        </div>
      </a>
    </div>
  );
}

export default SocialCard;
