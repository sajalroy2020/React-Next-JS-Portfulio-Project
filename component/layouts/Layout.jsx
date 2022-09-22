import Footer from './Footer';
import Navigation from './NavBar';


export default function Layout({children}) {
  return (
    <div>
        <Navigation/>
            {children}
        <Footer/>
    </div>
  )
}