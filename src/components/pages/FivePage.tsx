import React from 'react'
import { useNavigate } from 'react-router-dom';

const FivePage = () => {
  const navigate = useNavigate();
  const changePageForward = () => {
    navigate('/');
  }

  const changePageBack = () => {
    navigate('/goit');
  }

  return (
    <div className='bgImg min-h-screen h-full'>
      <div className='text-center'>
        <p className='text-white text-5xl font-serif py-10'>Hello, and welcome to this website! </p>

        <div className='flex justify-center'>
          <div className='w-8/12'>
            <p className='text-white font-serif text-2xl mt-10'>Here, I will show off five jobs that I would like to be able to apply in the near future, in no particular order. Something that you will notice is that many of these jobs aren't located here in the United States, or are even in English! This is because it is my dream to move to Norway, a nordic country in Europe that is about the size of California. Norway doesn't want me to move to them but that won't stop me :)</p>
            <p>https://paccoast.com/our-companies/</p>
            <p>https://www.indeed.com/jobs?q=IT&l=&vjk=27e79e07174f4e42&advn=5476334519095774</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <button onClick={changePageBack} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-56 font-serif'>Go back to the fourth listing</button>
        <button onClick={changePageForward} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-56 font-serif'>Go Home</button>
      </div>
    </div>
  )
}

export default FivePage
