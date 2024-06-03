'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import styles from '../styles/footer.module.css'

const navLinks = [
    {
        name: 'Inicio',
        href: '/'
    },
    {
        name: 'Nosotros',
        href: '/nosotros'
    },
    {
        name: 'Tienda',
        href: '/tienda'
    },
    {
        name: 'Blog',
        href: '/blog'
    }
]

function Footer() {

    const pathname = usePathname();
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.nav}>
                {
                    navLinks.map(({ name, href }) => (
                        <Link
                            key={href}
                            href={href}
                        >
                            {name}
                        </Link>
                        ))
                }
            </nav>
            <p className={styles.copyright}>Todos los derechos reservados &copy;{new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer