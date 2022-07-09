import React, { useState } from 'react';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';

export default function Header() {
    const themes = ['light', 'dark'];
    const imgs = [Moon, Sun];

    const [theme, setTheme] = useState(themes[0]);
    const [themeImg, setThemeImg] = useState(imgs[0]);

    const themeColors = {
        darkTheme: [
            'hsl(235, 24%, 19%)',
            'hsl(235, 21%, 11%)',
            'hsl(234, 11%, 52%)',
            'hsl(234, 39%, 85%)',
            'hsl(233, 14%, 35%)'
        ],
        lightTheme: [
            'hsl(0, 0%, 98%)',
            'hsl(236, 33%, 92%)',
            'hsl(233, 11%, 84%)',
            'hsl(236, 9%, 61%)',
            'hsl(235, 19%, 35%)'
        ]
    }

    const handleThemeChange = () => {
        const variables = [
            '--very-light-gray',
            '--very-light-grayish-blue',
            '--light-grayish-blue',
            '--dark-grayish-blue',
            '--very-dark-grayish-blue'
        ];

        if (theme === themes[0]) {
            setTheme(themes[1]);
            setThemeImg(imgs[1]);
            return changeThemeRootColors(variables, themeColors.darkTheme);
        } else {
            setTheme(themes[0]);
            setThemeImg(imgs[0]);
            return changeThemeRootColors(variables, themeColors.lightTheme);
        }
    }

    const changeThemeRootColors = (variable, color) => {
        for (let i = 0; i < variable.length; i++) {
            document.documentElement.style.setProperty(variable[i], color[i]);
        }
    }

    return <header>
        <h1>TODO</h1>
        <img className='theme-icon' src={themeImg} alt='Moon' onClick={handleThemeChange}/>
    </header>
}
