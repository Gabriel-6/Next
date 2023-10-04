import Pokemon from './components/Pokemon'

async function getData() {
  const res = await fetch('http://localhost:3000/api/pokemon')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData()
  return (
    <main className="grid grid-cols-2 md:grid-cols-3 gap-3 min-h-screen p-24">
        {data.data.results.map((pokemon) => <Pokemon pokemon={pokemon}/>
    )}
    </main>
  )
}
