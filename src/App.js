import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Filters from './Components/Filters/Filters'
import News from './Components/News/News'

export default function App() {
  return (
    <div>
      <Navbar />
      <Filters />
      <News />
    </div>
  )
};
