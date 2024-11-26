import { Header } from './components/header/Header';
import { Post } from './Post'

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Diego Fernandes" 
        context="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi repellendus quam dolorem itaque mollitia voluptatem obcaecati vero dignissimos blanditiis, ullam veniam inventore et natus exercitationem odit facere magnam eius magni!" 
      />
      <Post 
        author="Gabriel" 
        context="Um novo post muito legal" 
      />
    </div>
  );
};


