import "./section.css";
import Button from '../button/button';
import Card from "./card/card";
import { useEffect, useState } from "react";

export function Section({type, bg}){

    return(
        <section className={type + ' ' + bg}>
            <div>
                <h1>
                    Test assignment for front-end developer
                </h1>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
            </div>
            <Button text={'Sign up'} type={'yellow'}/>
        </section>
    )

}

export function Cards({ type }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(null);
  const [currentUsers, setCurrentUsers] = useState(0);
  const [apiButton, setApiButton] = useState('yellow');

  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`)
      .then((response) => response.json())
      .then(data => {
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
        const response = await fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=1');
        const data = await response.json();

        if (currentUsers < data.total_users) {
          setUsers((prevUsers) => [data.users[0], ...prevUsers]);
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
      <Button text="Show more" type={apiButton} func={apiGet} />
    </section>
  );
}
