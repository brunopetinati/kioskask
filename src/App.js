import './App.css';
import AppRoutes from "./routes"
import { GlobalContainer } from './global/styles';


function App() {
  return (
    <GlobalContainer>
      <AppRoutes />
    </GlobalContainer>
  );
}

export default App;
