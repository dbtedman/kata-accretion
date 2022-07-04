/// <reference types="vitest" />

import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    root: "./spa",
    test: {
        environment: "jsdom",
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./spa", import.meta.url)),
        },
    },
    server: {
        proxy: {
            "/query": "http://localhost:8080",
        },
    },
});
