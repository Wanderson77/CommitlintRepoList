// Component Repo

import React, { Component } from 'react';

class RepoList extends Component {  
  state = {
    repositories: [],
    myInput: '',
    loading: false,
  };

  async componentDidMount() {
    const response = await fetch('https://api.github.com/users/diego3g/repos');
    const data = await response.json();

    this.setState({ repositories: data });
  }

  render() { 
    return (
      <ul>
        {this.state.repositories.map(repo => <li key={repo.id}>{repo.full_name}</li>)}
      </ul>
    )
  }
}
 
export default RepoList;