import axios from "axios";

interface Posts {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Posts[]> {
  const response = await axios.get<Posts[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((users) => {
  console.log(users[0].title);
});
