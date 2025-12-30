import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Filters from './Components/Filters/Filters'
import News from './Components/News/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function App() {

  let pageSize = 10;

  return (
    <>
      <Router>
        <Navbar />
        <Filters />
        <Routes>
          {/* <Route exact path="/general" > <News pageSize={pageSize} category="general" /> </Route>
          <Route exact path="/business"> <News pageSize={pageSize} category="business" /> </Route>
          <Route exact path="/entertainment"> <News pageSize={pageSize} category="entertainment" /> </Route>
          <Route exact path="/health"> <News pageSize={pageSize} category="health" /> </Route>
          <Route exact path="/science"> <News pageSize={pageSize} category="science" /> </Route>
          <Route exact path="/sports"> <News pageSize={pageSize} category="sports" /> </Route>
          <Route exact path="/technology"> <News pageSize={pageSize} category="technology" /> </Route> */}
          <Route exact path="/general" element={<News pageSize={pageSize} key="general" category="general" />} />
          <Route exact path="/business" element={<News pageSize={pageSize} key="business" category="business" />} />
          <Route exact path="/entertainment" element={<News pageSize={pageSize} key="entertainment" category="entertainment" />} />
          <Route exact path="/health" element={<News pageSize={pageSize} key="health" category="health" />} />
          <Route exact path="/science" element={<News pageSize={pageSize} key="science" category="science" /> } />
          <Route exact path="/sports" element={<News pageSize={pageSize} key="sports" category="sports" /> } />
          <Route exact path="/technology" element={<News pageSize={pageSize} key="technology" category="technology" />} />
        </Routes>
      </Router>
    </>
  )
};
