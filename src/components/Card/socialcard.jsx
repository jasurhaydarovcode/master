import React from 'react';
import "./style.css"

function SocialCard() {
  return (
    <a href='https://t.me/Abdulaziz_saidov' className="rounded-2xl flex items-center p-2 w-64 cardd ">
      <i class="fa-brands fa-telegram rounded-full w-12 h-12 mr-3 text-5xl"></i>
      <div className='rounded-2xl'>
        <div className="font-semibold text-sm text-start">Abdul Aziz</div>
        <div className="text-xs text-gray-500">@abdulaziz_saidov</div>
      </div>
    </a>
  );
}

export default SocialCard;
