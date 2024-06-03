'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import styles from '../styles/header.module.css'


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

function Header() {
    const pathname = usePathname();

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Link href={'/'}>
                <Image src="/img/logo.svg" alt="Logo" width={300} height={40}/>
            </Link>
                <nav className={styles.navegacion}>
                    {
                        navLinks.map(({ name, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className={pathname === href ? styles.active : ''}
                            >
                                {name}
                            </Link>
                        ))
                    }
                    <Link href="/carrito">
                        <Image src="/img/carrito.png" width={30} height={25} alt="Imagen Carrito"/>
                    </Link>
                </nav>
        </div>
    </header>
  )
}

export default Header