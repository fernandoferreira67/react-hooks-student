import Button from '../components/Button.jsx'

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="py-2 font-semibold text-teal-800 rounded w-full text-center text-4xl uppercase">Hooks</h1>
      <div className="flex">
        <Button to="/useState">useState</Button> 
      </div>
    </div>
  )
}

export default HomePage