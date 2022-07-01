import Navbar from './Navbar'
import Footer from './Footer'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

export default function Layout({ children, headerTop=false, activeNav='Home' }) {

  const navMenu = [
    { name: 'Home', link: '/', current: true },
    { name: 'About', link: '/about', current: false },
    { name: 'Resume', link: '/resume', current: false },
    { name: 'Portofolio', link: '/portofolio', current: false },
    { name: 'Contact', link: '/contact', current: false },
  ];

  console.log({activeNav})

  return (
    <>
      {/* <Navbar /> */}
      
      <main className="min-h-screen">
        <div className="dark-fade"></div>
        <header id="header" className={`${headerTop ? 'header-top' : ''}`}>
          <div className="container mx-auto">
            <h1>Farly Wuwungan</h1>
            <h2>I'm a <span>programmer</span> from Indonesia</h2>
            <nav id="navbar" className="navbar">
              <ul>
                {navMenu.map(i => <li key={i.name}>
                  <a className={`nav-link ${activeNav.trim() == i.name.trim() ? 'active' : ''}`} href={i.link}>{i.name}</a>
                </li>)}
              </ul>
              <i className="mobile-nav-toggle">
                <MenuIcon height={24} width={24}/>
              </i>
            </nav>
          </div>
        </header>
        <section id={activeNav.toLowerCase()} className={`${activeNav.toLowerCase()} section-show`}>
          {children}
        </section>
      </main>
      {/* <Footer /> */}
    </>
  )
}