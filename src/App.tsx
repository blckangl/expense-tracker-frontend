import { useState } from 'react';
import toast from 'react-hot-toast';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-center">Tailwind active</div>
      <button
        onClick={() => {
          toast.success('toast works', {
            duration: 4000,
            position: 'top-center',

            // Styling
            style: {},
            className: '',

            // Custom Icon
            icon: '👏',

            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },

            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          });
        }}
      >
        Show
      </button>
    </>
  );
}

export default App;
