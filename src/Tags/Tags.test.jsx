import React from 'react';
import { render, screen } from '@testing-library/react';
import TagList from './Tags';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

const store = mockStore({});

describe('TagList component', () => {
  it('should render the TagList', () => {
    render(
      <Provider store={store}>
        <TagList position="top">
          <TagList.Title>Test Title</TagList.Title>
          <TagList.Content>
            <TagList.Tag
              href="https://example.com"
              openLinkInNewTab
              showTagIcon
            >
              Test Tag
            </TagList.Tag>
          </TagList.Content>
        </TagList>
      </Provider>,
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
    expect(screen.getByText('Test Tag').closest('a')).toHaveAttribute(
      'href',
      'https://example.com',
    );
  });
});
