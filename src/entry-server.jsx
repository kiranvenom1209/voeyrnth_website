import { renderToPipeableStream } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Writable } from 'stream';
import i18n from './i18n';
import App from './App';

export async function render(url, helmetContext) {
    // SSR Language Switching logic:
    // Determine language from URL
    const lang = (url === '/de' || url.startsWith('/de/')) ? 'de' : 'en';
    await i18n.changeLanguage(lang);

    return new Promise((resolve, reject) => {
        let html = '';

        const { pipe } = renderToPipeableStream(
            <HelmetProvider context={helmetContext}>
                <MemoryRouter initialEntries={[url]}>
                    <App />
                </MemoryRouter>
            </HelmetProvider>,
            {
                onAllReady() {
                    const writable = new Writable({
                        write(chunk, encoding, callback) {
                            html += chunk.toString();
                            callback();
                        },
                        final(callback) {
                            resolve(html);
                            callback();
                        }
                    });
                    pipe(writable);
                },
                onError(error) {
                    reject(error);
                }
            }
        );
    });
}
