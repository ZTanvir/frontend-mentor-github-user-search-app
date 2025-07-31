import { useEffect, useState } from "react";

const url = `https://api.github.com/users`;

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchUser, setSearchUser] = useState("octocat");

  useEffect(() => {
    async function getUser() {
      try {
        const username = searchUser;
        const response = await fetch(`${url}/${username}`);
        if (response.status >= 400) {
          throw new Error("Error on getting user data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, []);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading</p>;

  return <></>;
}

export default App;
