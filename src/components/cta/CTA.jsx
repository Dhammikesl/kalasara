import React, { useState } from 'react'

const CTA = () => {

    const [toggle, setToggle] = useState();


    return (
        <>
            <h1>The toggle is {toggle}</h1>
            <div>
                <button className='primary' onClick={() => setToggle("Now On")}>On</button>
                <button className='primary' onClick={() => setToggle("Now Off")}>Off</button>
            </div>
        </>
    )
}

export default CTA;
