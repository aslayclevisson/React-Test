import { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    posts: [
      {id: 1, title: 'Abacate cate 1'},
      {id: 2, title: 'Abacate cate 2'},
      {id: 3, title: 'Abacate cate 3'},
    ]
  };
  
  componentDidMount() {
    this.loadPosts();
  };

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const photoAndContent = postsJson.map((post, index) => {
      return {...post, cover: photosJson[index].url}
    })

    this.setState({ posts: photoAndContent });
  };

  render(){
    const { posts } = this.state;

    return (
      <section className="App">
        <header className="posts">
          {posts.map(post => (
            <div className="posts-complete">
              <div className="photos">
                <img src={post.cover} alt={post.title} />
              </div>
              <div key={post.id} className="posts-content">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
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

export default App;
