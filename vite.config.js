// import { defineConfig } from 'vite';

// export default defineConfig({
//     build: {
//         rollupOptions: {
//             input: {
//                 main: 'index.html',
//                 work: 'work.html',
//                 about: 'about.html',
//                 view: 'view.html',
//             }
//         }
//     }
// });
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                work: path.resolve(__dirname, 'work.html'),
                about: path.resolve(__dirname, 'about.html'),
                view: path.resolve(__dirname, 'view.html'),
            }
        }
    }
});
