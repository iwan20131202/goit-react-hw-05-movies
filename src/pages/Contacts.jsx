import { Link, Outlet } from "react-router-dom";

export const Contacts = () => {
  return (
    <div>
      <h1>Контакты</h1>
      <ul>
        <li>
          {/* относительные пути: contacts + /email, contacts + /phone ... */}
          <Link to="email">Email</Link>
        </li>
        <li>
          <Link to="phone">Телефон</Link>
        </li>
        <li>
          <Link to="social">Соцсети</Link>
        </li>
      </ul>

      {/* без Outlet вложенные маршруты (email/phone/social)
          никогда не отобразятся, даже если URL им соответствует */}
      <Outlet />
    </div>
  );
};
