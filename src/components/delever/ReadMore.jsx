import React, { useState } from 'react';

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => { setIsReadMore(!isReadMore); };

  return (
    <p className='text-black font-normal text-sm px-10 lg:px-0'>
      {isReadMore ? text.slice(0, 269) : text}
      {text.length > 150 &&
        <span onClick={toggleReadMore} className='text-orange cursor-pointer'>
          {isReadMore ? '...read more' : ' ...show less'}
        </span>
      }
    </p>
  );
};

export default ReadMore;