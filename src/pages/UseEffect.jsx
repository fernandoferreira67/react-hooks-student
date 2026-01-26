import {useState, useEffect} from "react"

const UseEffectPage = () => {
  const [items, setItems] = useState([])
  const [resourceType, setResourceType] = useState("post");


  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)

      const responseJSON = await response.json();

      setItems(responseJSON);
    }

    fetchResourceTypes();

  }, [resourceType])

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  }

  return (
    <div className="mt-4">
      <h2 className="flex justify-center mb-4 font-semibold">UseEffect</h2>
      <span className="flex justify-center mb-4 text-3xl uppercase font-bold">{resourceType}</span>
      <div className="flex justify-center gap-2">
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={()=> changeResourceType("posts")}>Posts</button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={()=> changeResourceType("comments")}>Comentários</button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={()=> changeResourceType("todos")}>Todos</button>
      </div>
      <div className="flex flex-col">
        {items.map((item) => (
            <p className="text-center mb-2">{item.id}</p>
        ))}
      </div>

    </div>
  )

}

export default UseEffectPage;