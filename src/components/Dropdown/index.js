import React, { useState } from "react";
import './dropdown.css';
import { ReactComponent as ReactIcon } from '../../icons/react.svg';
import { ReactComponent as JavaScriptIcon } from '../../icons/javascript.svg';
import { ReactComponent as HtmlIcon } from '../../icons/html.svg';
import { ReactComponent as CssIcon } from '../../icons/css.svg';
import { ReactComponent as BootstrapIcon } from '../../icons/bootstrap.svg';

const Dropdown = ({ selected, setSelected }) => {

    const [isActive, setIsActive] = useState(false);
    const options = [
        {
            title: 'React JS',
            Icon: ReactIcon,
        },
        {
            title: 'JavaScript',
            Icon: JavaScriptIcon,
        },
        {
            title: 'Html',
            Icon: HtmlIcon,
        },
        {
            title: 'CSS',
            Icon: CssIcon,
        },
        {
            title: 'Bootstrap',
            Icon: BootstrapIcon,
        }
    ];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                <span className="span">{selected}</span>
                {!isActive ? <span className="fas fa-caret-down"></span> : <span className="fas fa-caret-up"></span>}
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map(({ title, Icon }) => (
                        <div
                            onClick={(e) => {
                                setSelected(title);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            <Icon className="icon" />
                            <span className="span">{title}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
