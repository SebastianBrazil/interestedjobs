import React from 'react'
import { useNavigate } from 'react-router-dom';

const TwoPage = () => {
  const navigate = useNavigate();
  const changePageForward = () => {
    navigate('/evvent');
  }

  const changePageBack = () => {
    navigate('/carnegie');
  }

  return (
    <div className='bgImg min-h-screen h-full'>
      <div className='text-center'>
        <p className='text-white text-5xl font-serif py-10'>IT Support, OFV</p>

        <div className='flex justify-center'>
          <div className='w-8/12'>
            <p className='text-white font-serif text-2xl mt-10 text-justify'>First job listing, and it's a Norwegian-based company. Carnegie is an investment bank that invests into infastructure and technology. The job itself is dedicated to solving technical problems, as well as assisting with daily operations of systems. This is where the company's technologies come in; Carnegie uses Windows, Linux, and VMware. Those technologies would require adequate knowledge of C#, C, and Java. The latter two, I have no experience with, so I would need to learn those languages. From the initial starting point, my goal would be to advance more into data management and continue working on Linux and virtual machines. The job offerings are quite vauge, however, showing no potential pay or stated benefits. This will be common on all Norwegian jobs, they just do hiring differently. The main draw for me is that its a job with relatively low entry requirements in a country that requires a job to apply for residency.</p>
            <div className='mt-10'>
              <a className='text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://ofv.no'>Link to Carnegie's Website</a>
            </div>
            <div>
              <a className='text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://arbeidsplassen.nav.no/stillinger/stilling/6feb5d11-8684-4d63-9a28-b32879f1c492'>Link to Carnegie's Job Listing</a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center pb-10'>
        <button onClick={changePageBack} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-56 font-serif'>Go back to the first listing</button>
        <button onClick={changePageForward} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-56 font-serif'>Check out the third job listing</button>
      </div>
    </div>
  )
}

export default TwoPage
