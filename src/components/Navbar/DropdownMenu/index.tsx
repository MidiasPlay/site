import type { NavItemChildren } from "../types";
import './style.css';

type DropdownMenuProps = {
    children: NavItemChildren[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
    return (
        <div className="dropdown-menu">
            {children.map((section) => {
                // Determina a classe baseada no número de itens
                const itemCount = section.items.length;
                let sizeClass = '';
                if (itemCount > 8) {
                    sizeClass = 'large';
                } else if (itemCount <= 4) {
                    sizeClass = 'compact';
                }

                return (
                    <div key={section.section} className="dropdown-section">
                        <div className="dropdown-section-title">{section.section}</div>
                        <div className={`dropdown-section-links ${sizeClass}`}>
                            {section.items.map((link) => (
                                <a key={link.label} href={link.href} className="dropdown-link">
                                    <span className="dropdown-link-title">{link.label}</span>
                                    {/* {link.description && (
                                        <span className="dropdown-link-description">{link.description}</span>
                                    )} */}
                                </a>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DropdownMenu;