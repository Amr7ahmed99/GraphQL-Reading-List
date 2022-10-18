import './App.css';
import  ApolloClient  from 'apollo-boost';
import { ApolloProvider} from 'react-apollo';
//Components
import Booklist from './components/Booklist/Booklist';
function App() {
  const client= new ApolloClient({
    uri: 'http://localhost:4000/graphql'//The end point SERVER
  });
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1> Ninja's Reading List</h1>
        <Booklist/>
      </div>
    </ApolloProvider>

  );
}

export default App;
