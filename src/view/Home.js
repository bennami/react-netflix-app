import React from 'react';
import Card from '../components/Card'
import Search from '../components/Search'

function Home(props) {
 return (
     <div className="home">
         <div>
             <Search/>
         </div>
         <section>
             {props.movies.map(movie =>
                 <Card key={movie.id} {...movie}
                 />)}
         </section>
     </div>
 );
}

export default Home;