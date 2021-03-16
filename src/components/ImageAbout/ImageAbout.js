import React from 'react'
import './ImageAbout.css'


const ImageAbout = ({source, alt}) => {
    return (
        <img src = {source} alt = {alt} className = 'imageAbout_style'/>
    )
}

export default ImageAbout