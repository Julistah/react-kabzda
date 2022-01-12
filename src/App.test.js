import { render} from '@testing-library/react';
import MainApp from "./App";

test('renders without crashing', () => {
  let view = render(<MainApp />);
  expect(view).toEqual(view);
});
