import React from 'react'
import banner from '../../assets/banner.jpg'
// import EmailForm from '../../components/Email'

const Header = () => {
    return (
        <div className='header section-padding' id='home'>
            <div className='header-content'>
                <h1 className='txt-gradient'>
                    කලෙක, <br /></h1>
                <h3 className='txt-gradient'>අප මහ පොළොව, <br /> ප්‍රභල වූද, <br /> අමුතු ආකාර ගත්තා වූද ගෝත්‍රයන්හී රාජධානියක්ව පැවතිනි...</h3>



                <p className='mt-3'>මේ ඔවුන්ගේ කථාන්දරයයි. සුරාසුර විශ්වයයි.
                    ඔවුන් සමඟ මෙසේ අතීත අනාගත වර්තමාන කාල හරහා ගමන් කිරීමට ඔබට ආරාධනා….
                </p>
                {/* <div className='header-input'>
                    <input type="email" placeholder='Your Email Address' />
                    <button type='button' className='primary'>Get Started</button>
                </div> */}
                {/* <EmailForm /> */}

            </div>

            <div className='header-image'>
                <img src={banner} alt="kalasara" />
            </div>
        </div>
    )
}

export default Header
