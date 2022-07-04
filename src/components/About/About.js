import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pb-16'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right py-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Rasel, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I’m familiar with a variety of programming languages, Frameworks, Libraries, and Tools including HTML, CSS, Bootstrap, Tailwind-CSS, DaisyUi, JavaScript, React.js, React-Router, Rest API, Firebase, Node.js, Express.js, and MongoDB. I am also familiar with Typescript, and Next Js. but I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;