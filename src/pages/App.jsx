import { api } from '../services/api';
import { Container } from './styles';
import gitHubLogo from '../assets/github.png'
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import Button from '../components/Button';

import { useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState('');

  const handleBuscarRepositorio = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if(data.id){
      const repositorioExitente = repos.find(repo => repo.id === data.id)

      if(!repositorioExitente)
      {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
      }

    }
  }

  const handleRemoverRepositorio = id => {
    setRepos(repos.filter(repo => repo.id !== id));
  }

  return (
    <Container className="App">
      <img src={gitHubLogo} alt="Logo do GitHub" width={72} height={72} />
      <Input placeholder="username/nome-do-repositorio" value={currentRepo} onChange={ (event) => setCurrentRepo(event.target.value)}/>
      <Button onCLick={handleBuscarRepositorio}/>
      {repos.map(repo => <ItemRepo repositorio={repo} handleRemoverRepositorio={handleRemoverRepositorio} />)}
      
    </Container>
  );
}

export default App;
