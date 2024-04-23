import { useSignal } from 'use-signals';
import { counter } from './counter.state';

const Counter: React.FC = (): JSX.Element => {
  const count = useSignal(counter);
  const inc = (): void => counter.set(counter.get() + 1);
  return (
    <>
      <div>Count: {count}</div>
      <button type="button" onClick={inc}>
        +1
      </button>
    </>
  );
};

export default Counter;