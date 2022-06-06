import Guitarra from "./Guitarra"

const Listado = ({guitarrasInfo}) => {
  return (
    <div>
        {guitarrasInfo.map(guitarra => (
            <Guitarra
                key={guitarra.url}
                guitarra={guitarra}
            />
        ))}
    </div>
  )
}

export default Listado