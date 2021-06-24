import React from 'react';
import { render, cleanup, getByTestId, getByAltText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PhotoList from '..';

describe('PhotoList rendering', () => {
    it('renders', () => {
        render(<PhotoList />)
    });

    it('renders', () => {
        const {asFragment} = render(<PhotoList/>)
        expect(asFragment()).toMatchSnapshot();
    })
})