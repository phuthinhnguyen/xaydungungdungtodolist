const {useState, useEffect} = React;
function App(){
  const [todolist, setTodolist] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(res=>setTodolist(res.data))
    .catch(err=>{throw err})
  },[])
  const add = ()=>{
    axios.post("https://jsonplaceholder.typicode.com/todos",{
      id: "20"
    })
    .then(res=>setTodolist([...todolist,res.data]))
    document.getElementById("input").value=""
  }
  return (
    <>
      <h2>Todo List</h2>
      <input id="input"></input>
      <button onClick={add}>Submit</button>
      <ul>
        {todolist.map((item,index)=><li key={index}>todo {item.id}</li>)}
      </ul>
    </>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);