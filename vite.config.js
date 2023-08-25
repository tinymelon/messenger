import { resolve } from 'path';
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src', 'index.html'),
                reg: resolve(__dirname, 'src', 'registration.html'),
                profile: resolve(__dirname, 'src', 'profile.html'),
                profileEd: resolve(__dirname, 'src', 'profile_edit.html'),
                profilePas: resolve(__dirname, 'src', 'profile_password.html'),
                err404: resolve(__dirname, 'src', 'error404.html'),
                err500: resolve(__dirname, 'src', 'error500.html'),
            },
        },
    },
    appType: 'mpa',
    plugins: [handlebars({
        partialDirectory: resolve(__dirname, 'src/partials')
    })],
    css: {
        preprocessorOptions: {
            less: {
                math: "always",
                relativeUrls: true,
                javascriptEnabled: true,
            },
        },
    },
})
