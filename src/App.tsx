import { themeStore } from '@/stores';

const App = () => {
  const { updateTheme } = themeStore();
  const handle = () => {
    updateTheme();
  };
  return (
    <>
      <div style={{ display: 'flex' }}>This is Main</div>
      <button onClick={handle}>XXX</button>
    </>
  );
};

export default App;
