import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav/>)
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav/>)
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji visibility', () => {
    it('inserts camera emoji into h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links created', () => {
    it('inserts text content into links', () => {
        //arrange
        const { getByTestId } = render(<Nav/>)
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me')
    })
})