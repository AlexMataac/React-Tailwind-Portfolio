import React from 'react';

import Image from '../assets/Program.jpg';
import {HiOutlineGift} from 'react-icons/hi';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {SlGameController} from 'react-icons/sl';
import {MdOutlinePlace} from 'react-icons/md';
import {RxPerson} from 'react-icons/rx';
import {RxCalendar} from 'react-icons/rx';
import {SlGraduation} from 'react-icons/sl';

const AboutMe = () => {

    const info = [
        {
            id: 1,
            childs: (
                <>
                <RxPerson size={30} />
                <p className='ml-1'>Name:  Alex John Vincent O. Mataac</p>
                </>
            ),
        },
        {
            id: 2,
            childs: (
                <>
                <HiOutlineGift size={30}/>
                <p className='ml-1'>Birthday: August 31, 1999</p>
                
                </>
            ),
        },
        {
            id: 3,
            childs: (
                <>
                <RxCalendar size={30} />
                <p className='ml-2'>Age: 23 years old</p>
                </>
            ),
        },
        {
            id: 4,
            childs: (
                <>
                <SlGraduation size={30} />
                <p className='ml-1'>Education:  Bachelor of Science in Computer Engineering</p>
                </>
            ),
        },
        {
            id: 5,
            childs: (
                <>
                <HiOutlineBookOpen size={30} />
                <p className='ml-1'>Study: Emilio Aguinaldo College- Cavite</p>
                </>
            ),
        },
        {
            id: 6,
            childs: (
                <>
                <SlGameController size={30}  />
                <p className='ml-1'>Hobbies: Playing basketball, online games</p>
                
                </>
            ),
        },
        {
            id: 7,
            childs: (
                <>
                <MdOutlinePlace size={30} />
                <p className='ml-1'>Location: Bacoor, Cavite</p>
                </>
            ), 
        },
       
    ]
  return (
    <div name='about me' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About Me
                    </p>
                    <div className='items-center justify-center grid md:grid-cols-2'>
                        <img src={Image} alt='' className='py-5 object-scale-down h-50 md: w-96 '/>
                    
                    <div>
                        {
                            info.map(({id, childs}) => (
                                <div key={id}
                                className='items-center font-medium inline-flex px-5 py-2 mt-2'>
                                    {childs}
                                    </div>
                            ))
                        }
                    </div>
                        </div>

                    </div>
            </div>
           
        </div>
  )
}

export default AboutMe