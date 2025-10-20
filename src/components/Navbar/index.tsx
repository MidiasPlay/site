import React, { useState, useEffect } from 'react';
import './style.css';
import logo from '../../assets/logo-horizontal-2.png';
import { pageList } from '../../data/pages.data';

interface NavbarProps {
    className?: string;
}

type NavItem = {
    label: string;
    href: string;
    children?: {
        section: string;
        items: {
            label: string;
            href: string;
            description?: string;
        }[];
    }[];
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
                {
                    section: 'Por segmento',
                    items: pageList.map((page) => ({
                        label: page.heroTitle,
                        href: `/${page.slug}`,
                        description: page.heroSubtitle,
                    })),
                },
                {
                    section: 'Por Conteúdo',
                    items: [
                        { 
                            label: 'Ofertas e Promoções', 
                            href: '/solucoes/conteudo',
                            description: 'Criação e gestão de conteúdo digital para suas mídias'
                        },
                        { 
                            label: 'Cardápios e Menus', 
                            href: '/solucoes/negocios',
                            description: 'Soluções completas para impulsionar seus negócios'
                        },
                        { 
                            label: 'Publicidade e Anúncios', 
                            href: '/solucoes/seguimento',
                            description: 'Monitoramento e análise de performance'
                        },
                    ],
                },
            ],
        },
        {
            label: 'Produtos',
            href: '/produtos',
            children: [
                {
                    section: 'Plataformas',
                    items: [
                        { 
                            label: 'MídiasPlay', 
                            href: '/produtos/midiasplay',
                            description: 'Plataforma completa de gestão de mídias digitais'
                        },
                        { 
                            label: 'MídiasPlay Fila', 
                            href: '/produtos/midiasplay-fila',
                            description: 'Sistema avançado de gerenciamento de filas'
                        },
                    ],
                },
                {
                    section: 'Recursos',
                    items: [
                        { 
                            label: 'Analytics', 
                            href: '/produtos/analytics',
                            description: 'Análise detalhada de dados e métricas'
                        },
                        { 
                            label: 'Automação', 
                            href: '/produtos/automacao',
                            description: 'Automatização de processos e workflows'
                        },
                    ],
                },
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
                                <div className="dropdown-menu">
                                    {item.children.map((section) => (
                                        <div key={section.section} className="dropdown-section">
                                            <div className="dropdown-section-title">{section.section}</div>
                                            {section.items.map((link) => (
                                                <a key={link.label} href={link.href} className="dropdown-link">
                                                    <span className="dropdown-link-title">{link.label}</span>
                                                    {link.description && (
                                                        <span className="dropdown-link-description">{link.description}</span>
                                                    )}
                                                </a>
                                            ))}
                                        </div>
                                    ))}
                                </div>
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
                                    {item.children.map((section) => (
                                        <div key={section.section}>
                                            <div className="mobile-section-title">{section.section}</div>
                                            {section.items.map((link) => (
                                                <li key={link.label}>
                                                    <a
                                                        href={link.href}
                                                        className="mobile-dropdown-link"
                                                        onClick={closeMobileMenu}
                                                    >
                                                        {link.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </div>
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