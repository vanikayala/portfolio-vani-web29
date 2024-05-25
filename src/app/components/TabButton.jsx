

import React from 'react'

const TabButton = ({active, selectTab, children }) => {
    const buttonClasses = active ? "hover:text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 border-b border-white" : "text-orange";

  return (
    <button onClick = {selectTab}>
        <p className={`mr-3 lg:text-2xl font-semibold hover:text-orange ${buttonClasses}`}>
            {children}
        </p>
        </button>
  )
}

export default TabButton