import Image from 'next/image'

export default function Pokemon( {pokemon} ) {
    return(
          <div className="border-[3px] border-green-400 hover" key={pokemon.id}>
            <span>#{String(pokemon.id).padStart(3, '0')}</span>
            <h1> {pokemon.name} </h1>
            <Image
            src={pokemon.image}
            width={250}
            height={250}
            alt={pokemon.name}
            />
          </div>
    )
}