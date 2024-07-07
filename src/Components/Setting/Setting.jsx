import React, { useState, useEffect } from 'react';
import './Setting.css';

const Setting = () => {
    const [selectedColor, setSelectedColor] = useState(null)
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const colors = [
        '#FF5733',
        "#508D4E",
        '#009FBD',
        '#7776B3',
    ];

    const containerStyle = {
        borderRadius: '10px',
        borderLeft: `3px solid ${selectedColor}`,
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.28)',
        borderBottom: `3px solid ${selectedColor}`,
        transition: 'all 0.3s linear',
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const storedColor = localStorage.getItem('selectedColor');
        if (storedColor) {
            setSelectedColor(storedColor);
        }
    }, []);

    const handleWhiteClick = () => {
        setTheme('light');
    };

    const handleBlackClick = () => {
        setTheme('dark');
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
        localStorage.setItem('selectedColor', color);
    };

    return (
        <>
            <div className={`container-fluid ${theme}`} id='setting'>
                <div className="setting__title">
                    <div className="col-12 py-3">
                        <h2 className='text-center primary__theme_title' style={{ color: selectedColor }}>Settings</h2>
                    </div>
                </div>

                <div className="primary__theme">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='primary__theme_title' style={{ color: selectedColor }}>Primary Theme</h4>
                        </div>
                    </div>
                    <div className="primary__theme-buttons" style={containerStyle}>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    onClick={handleWhiteClick}
                                    className={`toggle-button white ${theme === 'light' ? 'active' : ''}`}
                                >
                                </button>
                                <button
                                    onClick={handleBlackClick}
                                    className={`toggle-button black ${theme === 'dark' ? 'active' : ''}`}
                                ></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="preferred__theme">
                    <div className="row">
                        <div className="col-12">
                            <h4 className='primary__theme_title mt-3' style={{ color: selectedColor }}>Preferred Theme</h4>
                        </div>
                    </div>
                    <div className="preferred__theme-buttons" style={containerStyle}>
                        <div className="row">
                            {colors.map((color, index) => (
                                <div key={index} className="col-12">
                                    <button
                                        className="toggle-button"
                                        style={{ backgroundColor: color, color: selectedColor === color ? 'white' : 'black' }}
                                        onClick={() => handleColorChange(color)}
                                    >
                                    </button>
                                </div>
                            ))}
                        </div >
                    </div >
                </div >
            </div >
        </>
    );
};

export default Setting;
