import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Button } from "antd";

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.list);
  return (
    <div>
      <Button onClick={() => dispatch({ type: "FETCH_BOOKS" })}>fetch</Button>
      {books && books.map((book: any) => <div>{book.title}</div>)}
    </div>
  );
}

export default App;
