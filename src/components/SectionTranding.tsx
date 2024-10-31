import React from 'react'

const SectionTranding: React.FC = () => {
  return (
    <>
    <div className='mt-10'>
        <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-x-2'>
                <img src="/icon-trending.png" alt="trending" />
                <p className='font-bold text-xl'>Trending</p>
            </div>
            <div>
                <p>see More</p>
            </div>
        </div>
        <div className='grid grid-cols-6 gap-x-3 py-2'>
            <div>
                <img src="/movie/guardians-of-the-galaxy.png" alt=""  className='h-64'/>
                <p className='font-semibold text-lg'>Guardians of the..</p>
            </div>
            <div>
                <img src="/movie/shazam.png" alt=""  className='h-64'/>
                <p className='font-semibold text-lg'>Shazam! Fury ...</p>
            </div>
            <div>
                <img src="/movie/dungeons.png" alt=""  className='h-64'/>
                <p className='font-semibold text-lg'>Dungeons & Drag..</p>
            </div>
            <div>
                <img src="/movie/medellin.png" alt=""  className='h-64'/>
                <p className='font-semibold text-lg'>Medellin</p>
            </div>
            <div>
                <img src="/movie/johnwick.png" alt=""  className='h-64'/>
                <p className='font-semibold text-lg'>John Wick: Chapt..</p>
            </div>
            <div>
                <img src="/movie/spiderman.png" alt=""  className='h-64'/>
                <p className='font-semibold text-lg'>Spider-Man: Acro..</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionTranding