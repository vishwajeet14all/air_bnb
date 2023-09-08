import Card from './components/Card/Card'
import './App.css';
import data from './data'






export default function App() {

  const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots = {item.openSpots}
        ////!(or)
        // item={item}
        ////!(or)
        {...item}
      />
    );
  });

  return (
  <section className='cards-list'>    
    {cards}
  </section>  
  )
  
}


