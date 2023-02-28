import React from 'react'

const ClickableText = ({onClick, text}) => {
  return (
    <button onClick={onClick} className="text-blue-color text-base underline">{text}</button>
  )
}

export default ClickableText