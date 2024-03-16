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
        <p className='text-white text-5xl font-serif py-10'>IT Support Technician II, Pacific Coast Companies</p>

        <div className='flex justify-center'>
          <div className='w-8/12'>
            <p className='text-white font-serif text-2xl mt-10 text-justify'>Yet another IT job. Okay, here we go: This is a higher-level IT job compared to preceding jobs, requiring 3 years of experience. Being close to Sacramento, it is a local job that offers benefits such as health, vision, and dental insurance as well as paid time off. While not directly stated, I assume that C# and SQL are necessary due to IT's tendencey to work with server-side systems. While I don't have the experience to apply, I do have the skillset to a degree. My goal in advancement would be to go further into managing systems and databases. What draws me to this company in particular is that it's a construction company, which I'm fond of.</p>
            <div className='mt-10'>
              <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://paccoast.com/our-companies/'>Link to PCC's Website</a>
            </div>
            <div>
              <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://www.indeed.com/jobs?q=IT&l=&vjk=27e79e07174f4e42&advn=5476334519095774'>Link to PCC's Job Listing</a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center pb-10'>
        <button onClick={changePageBack} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Go back to the fourth listing</button>
        <button onClick={changePageForward} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Go Home</button>
      </div>
    </div>
  )
}

export default FivePage
