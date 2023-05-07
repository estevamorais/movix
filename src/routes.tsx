import { BrowserRouter, Route, Routes as RoutesDOM } from 'react-router-dom'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import Home from './pages/home/Home'
import NotFound from './pages/404/NotFound'
import SearchResults from './pages/searchResults/SearchResults'

const Routes = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <RoutesDOM>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResults />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<NotFound />} />
      </RoutesDOM>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default Routes
