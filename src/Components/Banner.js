import React from 'react';
function Banner() {
  return (
    <div className='h-[20vh] md:h-[30vh] bg-center bg-no-repeat flex items-end'
    style={{
        
        backgroundImage : `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCoyEWOc6La087URzNxzb2K20kYhxreIX2A&usqp=CAU)`,
        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    }}>

<div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 text-white text-center w-full'>
    <a href="https://example.com/home" style={{ marginRight: '40px' }}>Home</a>
    <a href="https://example.com/inprogress" style={{ marginRight: '40px' }}>InProgress</a>
    <a href="https://example.com/completed" style={{ marginRight: '40px' }}>Completed</a>
</div>
        </div>
        )}
export default Banner