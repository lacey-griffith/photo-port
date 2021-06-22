import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg"

const About = () => {
    return(
        <section className='my-5'>
            <h1 id='about'>Who am I?</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover'></img>
            <div className='my-2'>
                <p>
                    Id dolor labore est Lorem deserunt sunt cillum laborum exercitation cillum aliquip laborum consequat est. 
                    Duis laboris et occaecat aute fugiat. Aliqua quis dolor ea labore minim ea mollit ut commodo ex sit labore ut consequat. 
                    Eiusmod velit officia enim sunt cupidatat consectetur anim sunt aliquip fugiat dolore eu nostrud irure.
                </p>
            </div>
        </section>
    )
};


export default About;