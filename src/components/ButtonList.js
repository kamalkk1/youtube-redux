import Button from './Button'
import React from 'react'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All" />
        <Button name="Gaming" />
        <Button name="Songs" />
        <Button name="Cricket" />
        <Button name="Cooking" />
        <Button name="Live" />
        <Button name="Valentines" />
        <Button name="Soccer" />
        <Button name="Comedy" />
        <Button name="Techno" />
        <Button name="Music" />
    </div>
  )
}

export default ButtonList