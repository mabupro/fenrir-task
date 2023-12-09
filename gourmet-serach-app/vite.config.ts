import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // TODO:あとで削除（ローカルのみで運用expressを後で使用）
  server: {
    proxy: {
      // プロキシの設定
      '/api': {
        target: 'https://webservice.recruit.co.jp',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
