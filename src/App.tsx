import { themeStore } from '@/stores';

const App = () => {
  const { updateTheme } = themeStore();
  const handle = () => {
    updateTheme();
  };

  const handler = async () => {
    try {
      const res = await fetch('/question', { method: 'GET' });
      const response = await res.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>This is Main</div>
      <button onClick={handle}>XXX</button>
      <button onClick={handler}>OOO</button>
    </>
  );
};

export default App;
