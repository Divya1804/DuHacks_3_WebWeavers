import React, { useEffect, useState } from 'react'

function ProgressBar() {
  const [data, setData] = useState(80);

  useEffect(() => {
    setData(85);
  }, []);

  console.log(data, "daata")
  return (
    <div className='mb-6 w-full'>
       <div className='mt-8 mx-6'>
        <div className=' relative h-2.5 w-full rounded-2xl border border-gray-300'>
          <div className={`bg-blue-500 absolute top-0 left-0 h-full w-[10%] rounded-2xl`}>
          <span className='bg-blue-500 absolute  -right-11  bottom-full mb-2  rounded-sm px-2.5 py-1 text-sm text-white -translate-x-1/2 '>
                 <span className="bg-blue-500 absolute bottom-[-2px] left-1/2 -translate-x-1/2 -z-10 h-2 w-2 rotate-45 rounded-sm"></span>
              75%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar