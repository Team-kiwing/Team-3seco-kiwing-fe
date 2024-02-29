import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  plugins: [react()],
  build: {
    sourcemap: 'hidden',
  },
  server: {
    proxy: {
      // /api 라는 문자열이 target 에 지정한 문자열 https://api-dev.kiwing.kr/ 로 변환되어 사용된다.
      // 예를 들어 요청 도메인이 http://localhost:5173/api/v1/tags 라면 프록시에 의하여
      // https://api-dev.kiwing.kr/api/v1/tags 로 요청이 되는 것이다.
      '/api': {
        // 프록시가 적용될 요청 경로의 시작 부분. 클라이언트가 보낸 요청의 URL이 api로 시작되면 이 설정이 적용된다.
        target: 'https://api-dev.kiwing.kr', // 사용할 요청 도메인을 설정한다.
        changeOrigin: true, // HTTP 요청 헤더의 Host 값을 서버의 호스트와 일치하도록 변경한다. 이를 통해 클라이언트의 요청을 target에 설정된 도메인에서 온 것 처럼 변경할 수 있다.
      },
    },
  },
});
