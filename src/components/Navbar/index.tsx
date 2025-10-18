import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../../assets/logo-horizontal-2.png';

interface NavbarProps {
    className?: string;
}

type NavItem = {
    label: string;
    href: string;
    children?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const navItems: NavItem[] = [
        {
            label: 'Soluções',
            href: '#',
            children: [
                { label: 'Conteúdo', href: '/solucoes/conteudo' },
                { label: 'Negócios', href: '/solucoes/negocios' },
                { label: 'Seguimento', href: '/solucoes/seguimento' },
            ],
        },
        {
            label: 'Produtos',
            href: '/produtos',
            children: [
                { label: 'MídiasPlay', href: '/produtos/midiasplay' },
                { label: 'MídiasPlay Fila', href: '/produtos/midiasplay-fila' },
            ],
        },
        { label: 'Planos e Serviços', href: '/planos-e-servicos' },
        { label: 'Demonstração', href: '/demonstracao' },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            const target = event.target as HTMLElement;
            if (!target.closest('.navbar')) {
                setIsMobileMenuOpen(false);
                setActiveDropdown(null);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = (): void => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveDropdown(null);
    };

    const toggleMobileDropdown = (label: string): void => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const closeMobileMenu = (): void => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    const DropdownIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
        <svg className={className} width="12" height="8" viewBox="0 0 12 8">
            <path d="m1 1 5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
    );

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${className}`}>
        <div className="nav-container">
            {/* Logo */}
            <div className="nav-logo">
                <a href="/">
                    {/* <img src="/logo.svg" alt="Mídias Play" className="logo-img" /> */}
                    {/* <span className="logo-text">Mídias Play</span> */}
                    <img src={logo.src} alt="MidiasPlay" style={{ height: 45 }} />
                </a>
            </div>

            {/* Desktop Menu */}
            <ul className="nav-menu">
                {navItems.map((item) => (
                    <li key={item.label} className={`nav-item ${item.children ? 'dropdown' : ''}`}>
                        {item.children ? (
                            <>
                                <a href={item.href} className="nav-link dropdown-toggle">
                                    {item.label}
                                    <DropdownIcon className="dropdown-icon" />
                                </a>
                                <ul className="dropdown-menu">
                                    {item.children.map((child) => (
                                        <li key={child.label}>
                                            <a href={child.href} className="dropdown-link">{child.label}</a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <a href={item.href} className="nav-link">{item.label}</a>
                        )}
                    </li>
                ))}
            </ul>

            {/* CTA Button */}
            <div className="nav-cta">
                <a href="/contato" className="cta-button">Falar Conosco</a>
            </div>

            {/* Mobile Menu Toggle */}
            <div
                className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={toggleMobileMenu}
                role="button"
                tabIndex={0}
                aria-label="Toggle mobile menu"
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleMobileMenu();
                    }
                }}
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="mobile-nav-list">
                {navItems.map((item) => (
                    <li key={item.label} className={item.children ? 'mobile-dropdown' : ''}>
                        {item.children ? (
                            <>
                            <div className={`mobile-dropdown ${activeDropdown === item.label ? 'active' : ''}`}>
                                <a
                                    href={item.href}
                                    className="mobile-nav-link mobile-dropdown-toggle"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleMobileDropdown(item.label);
                                    }}
                                >
                                    {item.label}
                                    <DropdownIcon className="mobile-dropdown-icon" />
                                </a>
                                <ul className="mobile-dropdown-menu">
                                    {item.children.map((child) => (
                                        <li key={child.label}>
                                        <a
                                            href={child.href}
                                            className="mobile-dropdown-link"
                                            onClick={closeMobileMenu}
                                        >
                                            {child.label}
                                        </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            </>
                        ) : (
                            <a
                                href={item.href}
                                className="mobile-nav-link"
                                onClick={closeMobileMenu}
                            >
                                {item.label}
                            </a>
                        )}
                    </li>
                ))}
                <li>
                    <a href="/contato" className="mobile-cta-button" onClick={closeMobileMenu}>
                    Falar Conosco
                    </a>
                </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;