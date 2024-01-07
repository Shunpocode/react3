import { useEffect, useState } from "react";
import Card from "./card/card";
import Button from '../../button/button';
import "./cards.css";
import Preloader from "../../preloader/preloader";

export default function Cards({ type }) {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState(null);
    const [currentUsers, setCurrentUsers] = useState(0);
    const [apiButton, setApiButton] = useState('yellow');
    const [preloader, setPreloader] = useState(false)

    useEffect(() => {
      setPreloader(true);
      fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
      .then((response) => response.json())
      .then(data => {
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
      })
      .catch(error => {
        console.error('Ошибка при получении данных о пользователях:', error);
      });
    }, [page]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6');
          const data = await response.json();
          if (currentUsers < data.total_users) {
            setUsers(data.users);
            setCurrentUsers(data.total_users);
          }
        } catch (error) {
          console.error('Ошибка при получении дополнительных данных о пользователях:', error);
        }
      };

      const intervalId = setInterval(fetchData, 5000);

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
        {preloader ? <Preloader /> : <Button text="Show more" type={apiButton} func={apiGet} />}``
      </section>
    );
  }