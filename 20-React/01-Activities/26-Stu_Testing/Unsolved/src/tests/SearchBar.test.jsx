import pretty from 'pretty';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

describe('SearchBar', () => {
  // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before saving it as a snapshot
  it('should render and match snapshot', () => {
    act(() => {
      // Render the component
      render(<SearchBar />);
    });

    // Format the rendered output
    const html = pretty(document.querySelector(".search.b-r".outerHTML));

    // Verify the output
    expect(html).toMatchSnapshot();
  });
});
