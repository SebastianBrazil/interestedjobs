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
    <div className='bgImg'>
      <div className='bgT min-h-screen h-full'>
        <div className='text-center'>
          <p className='text-white text-5xl font-serif py-10'>IT Support, OFV</p>

          <div className='flex justify-center'>
            <div className='w-8/12'>
              <p className='text-white font-serif text-2xl mt-10 text-justify'>The Information Council For Road Traffic, or OFV, has an IT position open similar to that of Carnegie's. Same as before, vague job offerings, with the main reason I want to apply is that its in Norway. Here, one of the assigned tasks would be Windows scripting as well as documentation through Jira. The job also requires knowledge of SQL and C#. And the Norwegian language too but that's besides the point. While I haven't touched Jira yet, I will have already used it by the time I graduate, and I do have experience with C# and SQL, even if limited. This is a job position I am mostly qualified for. If I did get this job, my goal would probably further my experience in windows scripting and use my SQL knowledge to possibly move into backend development.</p>
              <div className='mt-10'>
                <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://ofv.no'>Link to OFV's Website</a>
              </div>
              <div>
                <a className='underline text-white font-serif text-2xl' target="_blank" rel="noreferrer" href='https://arbeidsplassen.nav.no/stillinger/stilling/6feb5d11-8684-4d63-9a28-b32879f1c492'>Link to OFV's Job Listing</a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center pb-10'>
          <button onClick={changePageBack} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Go back to the first listing</button>
          <button onClick={changePageForward} className='bg-yellow-200 mx-5 p-5 w-80 rounded-2xl mt-10 font-serif'>Check out the third job listing</button>
        </div>
      </div>
    </div>
  )
}

export default TwoPage
