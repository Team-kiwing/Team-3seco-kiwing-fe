import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { GlobalStyle } from './styles/globalStyles.ts';
import { ManagedUIContext } from './styles/uiContext.tsx';

const queryClient = new QueryClient();

console.log(
  `%c
잠깐만요! 멈춰주세요!
`,
  'font-size: 1.5rem; font-weight: bold; color:#FF4433'
);
console.log(
  `%c혹시 누군가 여기에서 뭔가를 하라고 했다면%c무조건 사기꾼일 가능성이 200% 입니다!%c타인에게 원치 않게 Kiwing의 접근 권한과 정보를 빼앗길 수 있어요!
`,
  'font-size: 1rem; font-weight: 550; color:#FF4433',
  'font-size: 1.5rem; font-weight: 700; color:red',
  'font-size: 1rem; font-weight: 550; color:#FF4433'
);
console.log(
  `%c어떤 일인지 잘 모르신다면 개발자 도구를 바로 닫아주시면 좋을 것 같아요. 단축키는 F12입니다.%c어떤 일이 일어나고 있는지 정확히 알고 계신다면 저희 팀에 합류하시는 건 어때요?
문의 : https://kiwing.kr/report
팀 깃허브 : https://github.com/Team-kiwing
`,
  'font-size: 1rem; color:#48DA79',
  'font-size: 1rem; font-weight: 600; color:#009c4d'
);

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ManagedUIContext>
        <GlobalStyle />
        <App />
      </ManagedUIContext>
    </BrowserRouter>
    <div
      style={{
        fontSize: '16px',
      }}
    >
      <ReactQueryDevtools
        initialIsOpen={false}
        position="right"
      />
    </div>
  </QueryClientProvider>
);
