import React from 'react';
import { render, cleanup, getByTestId, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };
  const mockToggleModal = jest.fn();

  describe('Modal component', () => {
    it('renders', () => {
      <Modal currentPhoto={currentPhoto}/>
    })
    it('matches snapshot DOM node structure', () => {
        // Arrange the snapshot - declare variables
        // Assert the match
      })
}) 