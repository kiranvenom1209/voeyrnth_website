import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');

if (container.hasChildNodes()) {
    ReactDOM.hydrateRoot(
        container,
        <React.StrictMode>
            <HelmetProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </HelmetProvider>
        </React.StrictMode>
    );
} else {
    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <HelmetProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </HelmetProvider>
        </React.StrictMode>
    );
}
