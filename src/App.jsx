import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout";

import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { BookDetails } from "./pages/BookDetails";
import { Contacts } from "./pages/Contacts";
import { Email } from "./pages/contacts/Email";
import { Phone } from "./pages/contacts/Phone";
import { Social } from "./pages/contacts/Social";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      {/* Всё дерево маршрутов вложено в SharedLayout —
          там общий хедер с навигацией и <Outlet /> */}
      <Route path="/" element={<SharedLayout />}>
        {/* index-маршрут: рендерится на тот же путь, что и родитель ("/") */}
        <Route index element={<Home />} />

        <Route path="catalog" element={<Catalog />} />
        {/* динамический параметр :bookId */}
        <Route path="catalog/:bookId" element={<BookDetails />} />

        {/* вложенные маршруты внутри Contacts */}
        <Route path="contacts" element={<Contacts />}>
          <Route path="email" element={<Email />} />
          <Route path="phone" element={<Phone />} />
          <Route path="social" element={<Social />} />
        </Route>

        {/* маршрут-заглушка для несуществующих путей */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
