import { Component } from 'react';

import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';
import {loadPosts} from '../../utils/load-posts';

export class Home extends Component {
  //Public class fields
 state = {
      posts: [],
      allPosts: [],
      page: 0,
      postsPerPage: 10      
      
    };

    //timeoutUpdate = null;

    async componentDidMount() {
      await this.loadPosts();
    }


       
    loadPosts = async () => {
      const { page, postPerPage } = this.state;

      const postsAndPhotos = await loadPosts();      
      this.setState({ 
        posts: postsAndPhotos.slice(page, postPerPage),
        allPosts: postsAndPhotos,
       });
    }

    loadMorePosts = () => {
      const {
        page,
        postsPerPage,
        allPosts,
        posts
      } = this.state;

      const nextPage = page + postsPerPage;
      const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
      posts.push(...nextPosts)

      this.setState({posts, page: nextPage})
      
    }

  render() {  
    
    const { posts, page, postsPerPage, allPosts } = this.state;
  return (
    <section className='container'>
      <Posts posts={posts} />
      <div class="button-container">
      <Button 
        text="Load more posts"
        onClick={this.loadMorePosts}
        />
      </div>
    </section>
    );
  }
}


