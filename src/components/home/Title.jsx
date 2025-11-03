import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <p className="text-gray-600 text-lg">{description}</p>
    </div>
  )
}

export default Title
