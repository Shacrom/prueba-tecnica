export const getCards = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}