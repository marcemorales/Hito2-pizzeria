import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
// import Home from './pages/Home.jsx'          // comentado para validar formularios
// import RegisterPage from './pages/RegisterPage.jsx'  // comentar para probar Login
import LoginPage from './pages/LoginPage.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      <LoginPage />
      <Footer />
    </div>
  )
}

export default App
