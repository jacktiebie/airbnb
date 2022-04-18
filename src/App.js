import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
   
    const cards = data.map(item => {
        return (
            <Card
    img={item.coverImg}
    rating={item.stats.rating}
    reviewCount={item.stats.reviewCount}
    country={item.location}
    title={item.title}
    price={item.price}
    soldOut={item.openSpots}
    />
        )
    })

    return (
        <div>
<Nav />
<Hero />
<div className='grid'>
{cards}
</div>
    </div>
    )
}