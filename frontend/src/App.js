import { useEffect, useState } from 'react';
import axios from 'axios';

const API = `${process.env.REACT_APP_API_URL}/api/posts`;

function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get(API).then(res => setPosts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(API, form);
    setPosts([res.data, ...posts]);
    setForm({ title: '', content: '' });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })} /><br />
        <textarea placeholder="Content" value={form.content}
          onChange={e => setForm({ ...form, content: e.target.value })} /><br />
        <button type="submit">Submit</button>
      </form>

      <h3>All Posts</h3>
      {posts.map(p => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;