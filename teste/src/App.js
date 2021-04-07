import ContainerApp from './App.styles';
import Data from './components/Date';
import ExercicioHooks from './components/HooksUseState';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <ContainerApp>
      <ExercicioHooks />
      <Data />
      <ToDoList />
    </ContainerApp>
  );
}

export default App;
