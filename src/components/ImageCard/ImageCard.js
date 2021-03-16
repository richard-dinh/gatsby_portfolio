import React from 'react'
import './Image.css'

const ImageCard = ({source, alt}) => {
    return <img src = {source} className = 'image_sty' alt = {alt ? alt : source}/>
}

export default ImageCard

