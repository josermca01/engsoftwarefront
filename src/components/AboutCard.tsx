import React from 'react'

export const AboutCard = () => {
  return (
  <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2">Card title</h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
    </div>
  </div>
</div>
  )
}
export default AboutCard