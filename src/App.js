import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

export default function App() {
   
    const cards = data.map(item => {
        return (
            <Card
    key={item.id}
    {...item}
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