import { useEffect, useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import SearchBar from "./components/SearchBar";
import Theme from "./components/Theme";

const url = `https://api.github.com/users`;

function App() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchUser, setSearchUser] = useState("torvalds");
  const [theme, setTheme] = useState("LIGHT");

  useEffect(() => {
    async function getUser() {
      try {
        const username = searchUser;
        const response = await fetch(`${url}/${username}`);
        const data = await response.json();
        if (response.status >= 400) {
          const errorMsg = data.message;
          throw new Error(errorMsg);
        }
        if (response.status === 200) {
          setUserData(data);
          setError(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, [searchUser]);

  return (
    <main data-center data-stack style={{ "--gutter": "1rem" }}>
      <div className="page-title">
        <h1 className="title">devfinder</h1>
        <Theme theme={theme} setTheme={setTheme} />
      </div>
      <SearchBar
        setIsLoading={setIsLoading}
        setSearchUser={setSearchUser}
        error={error}
        setError={setError}
      />
      <UserCard loading={isLoading} userData={userData} />
    </main>
  );
}

export default App;
