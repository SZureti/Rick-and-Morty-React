import { Button } from "react-bootstrap";
import { useOutletContext } from "react-router";

function WatchCounter() {
  const { count, setCount } = useOutletContext();

  return (
    <div className="text-center my-4">
      <p className="mb-2">Who’s watching with me?</p>
      <Button onClick={() => setCount(count + 1)}>🍿 Watching: {count}</Button>
    </div>
  );
}

export default WatchCounter;
