import { useSignal } from 'use-signals';
import { counter } from './counter.state';

const SecondCounter: React.FC = (): JSX.Element => {
  const count = useSignal(counter);
  const inc = (): void => counter.set(counter.get() + 1);
  return (
    <>
      <div>SecondCounter: {count}</div>
      <button type="button" onClick={inc}>
        +1
      </button>
    </>
  );
};

export default SecondCounter;