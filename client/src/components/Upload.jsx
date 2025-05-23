import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Upload = () => {

    const { removeBG } = useContext(AppContext)

    return (
        <div className='pb-16'>
            {/* Title */}
            <h1 className='text-center py-6 md:py-16 text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>See the magic. Try now</h1>

            <div className='text-center mb-24'>
    <input onChange={e => removeBG(e.target.files[0])} type="file" id="upload2" hidden />
    <label 
        htmlFor='upload2' 
        className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer m-auto hover:scale-105 transition-all duration-700' 
        style={{ 
            backgroundImage: 'linear-gradient(to right, #1b354c, #33948a, #2a875f, #4db98a, #5ab9b1)' 
        }}
    >
        <img width={20} src={assets.upload_btn_icon} alt="" />
        <p className='text-white text-sm'>Upload your image</p>
    </label>
</div>

        </div>
    )
}

export default Upload