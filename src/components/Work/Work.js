import React from 'react';
import TheGigawatt from '../../assets/TheGigawatt.jpg'
import Megaventory from '../../assets/megaventory1.PNG'
import UdreamDental from '../../assets/UdreamDental.PNG'


const Work = () => {
    return (
        <div name='work' className='w-full text-gray-300 bg-[#0a192f] py-10'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full py-4'>
                <div className='py-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${TheGigawatt})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                The Gigawatt
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://the-gigawatt.web.app/' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Rasel105/The-Gigawatt-Server' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Server Code
                                    </button>
                                </a>
                                <a href='https://github.com/Rasel105/The-Gigawatt-Client' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Client Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Megaventory})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Megaventory
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://assignment-0011.web.app/' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Rasel105/Megaventory-Server' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Server Code
                                    </button>
                                </a>
                                <a href='https://github.com/Rasel105/Megaventory-Client' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Client Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${UdreamDental})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='https://assignment-0010.web.app/' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Live Demo
                                    </button>
                                </a>
                                <a href='https://github.com/Rasel105/UDream_Dental' target="_blank" without rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Gihub Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Work;