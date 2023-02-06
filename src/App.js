import { Component } from 'react';
import { Posts } from './components/Posts';
import './App.css';

import {loadPosts} from './utils/load-posts';

class App extends Component {
  //Public class fields
 state = {
      //counter: 0,
      posts: []      
      
    };

    //timeoutUpdate = null;

    componentDidMount() {
      this.loadPosts();
    }


       
    loadPosts = async () => {
      const postsAndPhotos = await loadPosts();      
      this.setState({ posts: postsAndPhotos });
    }

  render() {  
    
    const { posts, counter } = this.state;
  return (
    <section className='container'>
      <Posts posts={posts} />
    </section>
    );
  }
}

export default App;
