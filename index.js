const {Link, useState ,useEffect,createContext, useContext,useRef, useCallback,useMemo } = React;
const {Route, Routes, BrowserRouter} = React;

function App(){
  const [users,setUser] = useState([]);
  const [todolist,setTodolist] = useState([])
  const [addform,setAddform] = useState(false);
  useEffect(()=>{
    axios.get("https://6470a7eb3de51400f724b713.mockapi.io/users")
    .then(res=>{setUser(res.data)})
    .catch(err=>{throw err});
  },[])
  function click(id){
      axios.get(`https://6470a7eb3de51400f724b713.mockapi.io/users/${id}/todolist`)
      .then(res=>{setTodolist(res.data)})
      .catch(err=>{throw err}); 
  }
  function addformclick(){
    setAddform(!addform);
  }
  function submit(id){
    // axios.post(`https://6470a7eb3de51400f724b713.mockapi.io/users/${id}/todolist`, {
    //   id:3,name:"sdf",title:"sdf"
    // })
    // .then(res=>{console.log(res.data)})
    // .catch(err=>{throw err}); 
    console.log(id)
  }
  function handleChange(e){
    // setTodolist([...todolist,{[e.target.name]:e.target.value}])
  }
  return(
    <>
      {(users.map((item,index)=><button key={index} onClick={()=>click(item.id)} className="btn btn-success ml-4 pl-3 pr-3">{item.id}</button>))}
      {/* {(!addform) ? <button className="btn btn-success ml-5" onClick={addformclick}>Add</button> 
      : (
       <>
         <form>
           <input placeholder="input id" value={todolist.id} name="id" onChange={(e)=>handleChange(e)} ></input>
           <input placeholder="input name" value={todolist.name} name="name" onChange={(e)=>handleChange(e)}></input>
           <input placeholder="input title" value={todolist.title} name="title" onChange={(e)=>handleChange(e)}></input>
           <button onClick={()=>submit(item.id)}>Submit</button>
         </form>
         <button className="btn btn-success ml-5" onClick={addformclick}>Close</button>
       </>
      )} */}
      <form>
        <input placeholder="input id" value={todolist.id} name="id" onChange={(e)=>handleChange(e)} ></input>
        <input placeholder="input name" value={todolist.name} name="name" onChange={(e)=>handleChange(e)}></input>
        <input placeholder="input title" value={todolist.title} name="title" onChange={(e)=>handleChange(e)}></input>
        <button onClick={()=>submit(3)}>Submit</button>
      </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th >Name</th>
            <th >Title</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map((item,index)=>
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
            </tr>)}
        </tbody>
      </table>
    </>
 
  )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);