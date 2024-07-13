import React from 'react';
import ReactDOM from 'react-dom'

const Modal = ({isOpen,isClose}) => {

    console.log('from modal')

    if (!isOpen) return null;

    return ReactDOM.createPortal (
        <>

            <main className='modal'>
                <section className='w-8/12 h-screen bg-gray-200 '>
                <button onClick={isClose}>X</button>
                    from modal
                </section>
            </main>


        
        </>,
        document.getElementById('modal-portal-root')
    );
};

export default Modal;