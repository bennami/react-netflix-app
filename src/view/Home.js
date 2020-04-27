import React from 'react';
import Card from '../components/Card'

function Home(props) {
 return (
     <section>
         {props.movies.map(movie =>
             <Card key={movie.id} {...movie}
             />)}
     </section>
 );
}

export default Home;