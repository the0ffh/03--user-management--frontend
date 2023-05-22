import { createRoot } from 'react-dom/client';
import App from './modules/App/App';
/*
use shell env in production -> vite preview (dockerized)
ref: https://github.com/vitejs/vite/issues/3105
ref: https://stackoverflow.com/questions/12709074/how-do-you-explicitly-set-a-new-property-on-window-in-typescript
*/

declare global {
  interface Window {
    UM_CONFIG: {
      apiHost: string;
      apiPort: string;
    };
  }
}

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
