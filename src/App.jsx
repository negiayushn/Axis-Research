import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Navbar from "./components/sections/Navbar"
import SiteFooter from "./components/sections/SiteFooter"
import HomePage from "./pages/HomePage"
import ProblemsPage from "./pages/ProblemsPage"
import CareersPage from "./pages/CareersPage"
import AboutPage from "./pages/AboutPage"

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const timer = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
          window.scrollTo({ top: 0, behavior: "instant" })
        }
      }, 120)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [pathname, hash])

  return null
}

function Shell() {
  return (
    <>
      <Navbar />
      <Outlet />
      <SiteFooter />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/problems" element={<ProblemsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}