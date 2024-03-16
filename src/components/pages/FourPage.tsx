import React from 'react'
import { useNavigate } from 'react-router-dom';

const FourPage = () => {
  const navigate = useNavigate();
  const changePageForward = () => {
    navigate('/paccoast');
  }

  const changePageBack = () => {
    navigate('/evvent');
  }

  return (
    <div className='bgImg min-h-screen h-full'>
      <div className='text-center'>
        <p className='text-white text-5xl font-serif py-10'>IT Support Engineer, GroupOne IT</p>

        <div className='flex justify-center'>
          <div className='w-8/12'>
            <p className='text-white font-serif text-2xl mt-10 text-justify'>Do you want a job that actually tells you it's pay and benefits? Indeed you do. A local job listing based in Folsom, GroupOne IT is a consulting company that is looking for 2-10 years experience in PC repain and IT administration and Microsoft sever certifications. While the position would require working with servers and backup systems, in the process using C# and SQL, the experience requirement automatically makes me unqualified for the job. The main draws the the job in the first place is the local position, 401k matching, health insurance, and up to 50 dollars an hour. As with most IT jobs, the goal is to further advance into data and backend management.</p>
            <div className='mt-10'>
              <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://grouponeit.com'>Link to GroupOne IT's Website</a>
            </div>
            <div>
              <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://www.indeed.com/q-IT-jobs.html?vjk=d06b57c53bfbded4&advn=1301865915172365'>Link to GroupOne IT's Job Listing</a>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center pb-10'>
        <button onClick={changePageBack} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Go back to the third listing</button>
        <button onClick={changePageForward} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Check out the fifth job listing</button>
      </div>
    </div>
  )
}

export default FourPage
