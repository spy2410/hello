import { Provider } from 'react-redux';
import store from './redux/store';
import Index from "../src/components/Index";

function App() {
  return (
    <Provider store={store}>
      <div>
      <Index />
      </div>
    </Provider>

  );
}

export default App;
