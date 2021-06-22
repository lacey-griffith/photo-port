import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//after each test, no leftover memory data to give false results
afterEach(cleanup)

describe('About component', () => {
    //first test
    //it function takes two arguments
    //first being string declares what is being tested
    //second argument is the callback function that runs the test
    it('renders', () => {
        render(<About/>);
    });

    //second test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About/>)
        expect(asFragment()).toMatchSnapshot();
    })
})