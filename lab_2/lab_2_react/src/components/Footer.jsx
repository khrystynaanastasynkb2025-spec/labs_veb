import React, { useState, useEffect } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState({
        userAgent: '',
        platform: ''
    });

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform
        };

        // Зберігаємо у localStorage
        localStorage.setItem('systemInfo', JSON.stringify(info));

        // Оновлюємо стан
        setSystemInfo(info);
    }, []);

    return (
        <footer className="p-4 bg-[#110c17] border-t border-[#2d203b] text-center text-sm text-purple-300/80">
            <p>
                Контакти: khrystyna.anastasyn.kb.2025@lpnu.ua | {' '}
                <a
                    href="https://github.com/khrystynaanastasynkb2025-spec"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#bb8fce] font-bold hover:underline"
                >
                    GitHub Profile
                </a>
            </p>

            <div className="system-info mt-2 text-xs opacity-75">
                <p>Платформа: {systemInfo.platform}</p>
                <p>Браузер (User Agent): {systemInfo.userAgent}</p>
            </div>
        </footer>
    );
}

export default Footer;