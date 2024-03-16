import React from 'react'
import { useNavigate } from 'react-router-dom';

const ThreePage = () => {
  const navigate = useNavigate();
  const changePageForward = () => {
    navigate('/goit');
  }

  const changePageBack = () => {
    navigate('/ofv');
  }

  return (
    <div className='bgImg'>
      <div className='bgT min-h-screen h-full'>
        <div className='text-center'>
          <p className='text-white text-5xl font-serif py-10'>Fullstack Developer Intern, Evvent</p>

          <div className='flex justify-center'>
            <div className='w-8/12'>
              <p className='text-white font-serif text-2xl mt-10 text-justify'>A job that isn't IT! Amazing, isn't it? That's why I am grossly underqualified for this. Evvent is a startup company looking for fullstack developers to create a website that caters to the Muslim community in Norway and all over the world. Very interesting stuff, and I'd like to be apart of it. They ask for experience in Next.js, Typescript, React, Prisma ORM, Tailwind, and Stripe Checkout API, among others. By the time I graduate I most likely wouldn't have touched Prisma or Stripe, so I would need to learn those myself. If I did get the job, my goal would be to help the website get off the ground and help expand it as it grows more popular.</p>
              <div className='mt-10'>
                <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://evvent.no'>Link to Evvent's Website</a>
              </div>
              <div>
                <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://arbeidsplassen.nav.no/stillinger/stilling/aec86ec2-1d99-411d-b32d-2cb78fe36ef9'>Link to Evvent's Job Listing</a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center pb-10'>
          <button onClick={changePageBack} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Go back to the second listing</button>
          <button onClick={changePageForward} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Check out the fourth job listing</button>
        </div>
      </div>
    </div>
  )
}

export default ThreePage
