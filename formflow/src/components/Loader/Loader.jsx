import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='w-screen opacity-5 bg-slate-500 '>
            <div>
                <DotLoader size={60}/>
            </div>
            
        </div>
    );
};

export default Loader;