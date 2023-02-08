import { Component } from 'react';

import './styles.css';

import { Posts } from '../../components/Posts';
import {loadPosts} from '../../utils/load-posts';

export class Home extends Component {
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


