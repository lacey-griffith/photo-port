import React from 'react';

const Gallery = (props) => {
    const currentCategory = {
        name: 'commercial',
        description: 'Photos of grocery stores, food trucks, and other commerical projects.'
    }
    return(
        <section>
            <h1>
                {currentCategory.name}
            </h1>
            <p>
                {currentCategory.description}
            </p>
        </section>
    )
}
export default Gallery;