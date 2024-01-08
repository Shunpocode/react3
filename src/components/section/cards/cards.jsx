import { useEffect, useState } from "react";
import Card from "./card/card";
import Button from '../../button/button';
import "./cards.css";
import Preloader from "../../preloader/preloader";

const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/users";

export default function Cards({ type }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [currentUsers, setCurrentUsers] = useState(0);
  const [apiButton, setApiButton] = useState('yellow');
  const [preloader, setPreloader] = useState(false);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      throw error;
    }
  };

  const handleApiResponse = (data) => {
    setPreloader(false);
    setCurrentUsers(data.total_users);
    setMaxPage(data.total_pages);

    if (page === 1) {
      setUsers(data.users);
    } else if (page > 1) {
      setUsers((prevUsers) => [...prevUsers, ...data.users]);
    }

    if (page >= data.total_pages) {
      setApiButton('disabled');
    }
  };

  useEffect(() => {
    setPreloader(true);
    fetchData(`${API_URL}?page=${page}&count=6`)
      .then(handleApiResponse)
      .catch(() => {}); // Обработка ошибок здесь, если необходимо
  }, [page]);

  useEffect(() => {
    const fetchDataInterval = async () => {
      try {
        const data = await fetchData(`${API_URL}?page=1&count=6`);
        if (currentUsers < data.total_users) {
          setUsers(data.users);
          setCurrentUsers(data.total_users);
        }
      } catch (error) {
        // Обработка ошибок здесь, если необходимо
      }
    };

    const intervalId = setInterval(fetchDataInterval, 3000);

    return () => clearInterval(intervalId);
  }, [currentUsers]);

  const apiGet = () => {
    if (page < maxPage) {
      setPage((prevPage) => prevPage + 1);
    } else if (page === maxPage) {
      setApiButton('none');
    }
  };

  return (
    <section id="users" className={type}>
      <div id="cards">
        {users.map((user, index) => (
          <Card
            key={index}
            avatar={user.photo}
            name={user.name}
            position={user.position}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </div>
      {preloader ? <Preloader /> : <Button text="Show more" type={apiButton} func={apiGet} />}
    </section>
  );
}
