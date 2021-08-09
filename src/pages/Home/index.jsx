import { Component } from 'react';
import './styles.css';
import { PostCard } from '../../components/PostCard';
import { loadPost } from '../../useful/LoadPosts';

export class Home extends Component {
  state = {
    posts: [
      {id: 1, title: 'Abacate cate 1'},
      {id: 2, title: 'Abacate cate 2'},
      {id: 3, title: 'Abacate cate 3'},
    ]
  };
  
  async componentDidMount() {
    await this.loadPosts();
  };

  loadPosts = async () => {
    const photoAndContent = await loadPost()
    this.setState({ posts: photoAndContent });
  };

  render(){
    const { posts } = this.state;

    return (
      <section className="App">
        <header className="posts">
          {posts.map(post => (
            <PostCard key={post.id} post = {post} /> 
          ))}

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
      </section>
    );
  }
}

