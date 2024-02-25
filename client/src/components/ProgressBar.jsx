import React, { useEffect, useState } from 'react';

function ProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (props.goal > 0) {
      const percent = (props.raised / props.goal) * 100;
      // Ensure percentage doesn't exceed 100
      const clampedPercentage =Math.round( Math.min(percent, 100));
      setPercentage(clampedPercentage);
    }
  }, [props.raised, props.goal]);

  return (
    <div className='w-full'>
      <div className='mt-8 mx-6'>
        <div className='relative h-2.5 w-full rounded-2xl border border-gray-300'>
          <div
            className='bg-blue-500 absolute top-0 left-0 h-full'
            style={{ width: `${percentage}%`, borderRadius: '0 2.5rem 2.5rem 0' }}
          >
            <span className='bg-blue-500 absolute -right-11  bottom-full mb-2  rounded-sm px-2.5 py-1 text-sm text-white -translate-x-1/2 '>
                 <span className="bg-blue-500 absolute bottom-[-2px] left-1/2 -translate-x-1/2 -z-10 h-2 w-2 rotate-45 rounded-sm"></span>
              {percentage}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
