/* eslint-disable react/prop-types */
import React from "react"

export const Image = ({ ...props }) => {
  return <img src={props.src} alt={props.alt} className='img' />
}