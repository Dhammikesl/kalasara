import React from 'react'
import { kalasara, mahasona, gotainbara, mantha } from './import';

const Brand = () => {
    return (
        <div className='brand section-padding'>
            <a href="https://blog.kaalasara.com/" className='wrap-img '>
                <img src={kalasara} alt="kalasara" />
                <div className='txt-brand'>කාලසර</div>
            </a>
            <a href='https://blog.kaalasara.com/' className='wrap-img'>
                <img src={mahasona} alt="mahasona" />
                <div className='txt-brand'> මහසෝනා</div>
            </a>
            <a href='https://blog.kaalasara.com/' className='wrap-img shadow-pop-tr'>
                <img src={gotainbara} alt="gotinbara" />
                <div className='txt-brand'> ගෝඨයිම්බර</div>
            </a>

            <a href='https://blog.kaalasara.com/' className='wrap-img shadow-pop-tr'>
                <img src={mantha} alt="mantha" />
                <div className='txt-brand'> මන්තා</div>
            </a>
        </div>
    )
}

export default Brand;
