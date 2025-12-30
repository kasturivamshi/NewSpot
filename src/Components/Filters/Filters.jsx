import React, { useState } from 'react'
import './Filters.css'

export default function Filters() {
const [menu, setMenu ] = useState("All News");

  return (
      <div className="filters">
        <ol className="filter-items">
            <li onClick={() => setMenu("All News")} className={menu==="All News"?"active":""}>All News</li>
            <li onClick={() => setMenu("Sports")} className={menu==="Sports"?"active":""}>Sports</li>
            <li onClick={() => setMenu("Politics")} className={menu==="Politics"?"active":""}>Politics</li>
            <li onClick={() => setMenu("Celebrities")} className={menu==="Celebrities"?"active":""}>Celebrities</li>
            <li onClick={() => setMenu("Technologies")} className={menu==="Technologies"?"active":""} >Technologies</li>
            <li onClick={() => setMenu("Movies")} className={menu==="Movies"?"active":""}>Movies</li>
        </ol>
      </div>
  )
}
