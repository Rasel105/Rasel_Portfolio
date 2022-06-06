import React from 'react';

const GetInTouch = () => {
    return (
        <div>
            <h2 className='text-center text-6xl font-bold mt-8'>GET IN <span className='text-yellow-400'>TOUCH</span></h2>
            <div className='grid md:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <h2>Hello</h2>
                </div>
                <div>
                    <form>
                        <div>
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <input type="text" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;