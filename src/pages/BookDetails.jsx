import { useParams } from "react-router-dom";

export const BookDetails = () => {
  // useParams возвращает объект { bookId: "..." },
  // имя ключа совпадает с именем параметра в path="/catalog/:bookId"
  const { bookId } = useParams();

  return (
    <div>
      <h1>Информация о книге</h1>
      <p>Сейчас отображается книга с id: {bookId}</p>
    </div>
  );
};
