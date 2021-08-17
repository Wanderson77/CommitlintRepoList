import React, { useState, useEffect } from 'react';

function RepoListHooks() {

  const [repositories, setRepositories] = useState([
    'Repo 1',
    'Repo 2',
    'Repo 3',
  ]);

  const [loading, setLoading] = useState(false);

  useEffect( () => {
    async function getRepo() {
      const response = await fetch('https://api.github.com/users/diego3g/repos');
      const data = await response.json();

      setRepositories (data);
    }

    getRepo(true);
    setRepo();
    setLoading(false);

  }, []);

  return (
    <ul>
      <li>repo 1</li>
      <li>repo 2</li>
      <li>repo 3</li>
      {repositories.map(repo => <li key={repo}>{repo}</li>)}
    </ul>
  )
}

export default RepoListHooks;