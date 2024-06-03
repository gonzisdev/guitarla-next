
import './styles/normalize.css'
import './styles/globals.css'
import Header from './components/header'
import Footer from './components/footer'
import { CarritoProvider } from './components/carritoContext'


export const metadata = {
  title: 'GuitarLA - Next',
  description: 'GuitarLA - Venta de guitarras y blog de música'
}

export default function RootLayout({ children }) {
  

  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          <Header/>

            {children}

          <Footer/>
        </CarritoProvider>
        </body>
    </html>
  )
}