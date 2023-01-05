import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FaGraduationCap} from 'react-icons/fa';
import {MdWork} from 'react-icons/md';

const Resume = () => {
  return (
    <div name='resume' 
    className='bg-gradient-to-b from-black to-gray-800 w-full h-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:h-screen'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Resume</p>
            </div>
            <VerticalTimeline lineColor='rgb(16, 204, 82)'>
                <VerticalTimelineElement className='vertical-timeline-element--education'
                contentStyle={{ background: '#0081C9', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #0081C9' }}
                iconStyle={{ background: '#0081C9', color: '#fff' }}
                icon={<FaGraduationCap className='text-white' />}
                date='2018-2022'>
                    <h3 className='text-black'>BS Computer Engineering</h3>
                    <p className='text-black'>Emilio Aguinaldo College-Cavite</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element--work'
                contentStyle={{ background: '#C85C8E', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #C85C8E' }}
                iconStyle={{ background: '#C85C8E', color: '#fff' }}
                icon={<MdWork className='text-white'/>}
                date='2022-present'>
                    <h3 className='text-black'>Junior Software Engineer</h3>
                    <p className='text-black'>Cognizant Softvision</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Resume