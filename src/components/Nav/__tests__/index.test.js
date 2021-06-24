import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [{name: 'portraits', description: 'Portriats of people in my life.'}]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav
        categories ={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        />)
    })

    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories ={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />)
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('emoji visibility', () => {
    it('inserts camera emoji into h2', () => {
        //arrange
        const { getByLabelText } = render(<Nav
            categories ={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />);
        //assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links created', () => {
    it('inserts text content into links', () => {
        //arrange
        const { getByTestId } = render(<Nav
            categories ={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />)
        //assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About Me')
    })
})