import { defineConfig } from 'vite';
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                work: 'work.html',
                about: 'about.html',
                view: 'view.html',
            }
        }
    }
});