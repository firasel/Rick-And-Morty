import React from 'react';
import logoImg from "../../assets/images/Logo.png";

const PageLoading = () => {
  return (
    <div className='w-full min-h-screen bg-customBlack flex items-center justify-center'>
      <img className='px-2 md:px-5 animate-pulse' src={logoImg} alt='logo'/>
    </div>
  );
};

export default PageLoading;