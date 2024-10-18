import Employee from "./components/EmployeeList/Employee";
import "./App.css";
import Team from "./components/TeamList/Team";
import employeesJson from './static/employees.json'
import {useReducer} from  'react'

function App() {
  
  
  
  const masterData ={
    employeeList : employeesJson,
    teamList : [],
    averageAge:0
  }
  
  const reducerFn = (state,action)=>{
    console.log("dispatxh triger",state,action);
    if(action.action==='ADD_TO_TEAM'){
      return{
        ...state,
        teamList:[...state.teamList,action.payload]
      }
    }else if(action.type==='REMOVE_FROM_TEAM_LIST'){
       //
    }else if(action.type==='AVERAGE_AGE'){
      const aveAge = (state.employeeList.reduce((acc,cur)=>acc+cur.age,0)/state.teamList.length).toFixed(2)
      const stateCopy ={
        ...state
      }
      stateCopy.averageAge=aveAge;
      return stateCopy;
    }else if(action.type==='SORT_BY_AGE'){
       //
    }else{
        // dont any
    }
  }


  const [state,dispatch] = useReducer(reducerFn,masterData)
  




  return (
    <>
      <h1>Employee App</h1>
      <div style={{
        display:'flex',
        gap:'8rem',
        alignItems:'center',
        justifyContent:'center',

       }}>
        <div style={{
            border :'2px Solid Black'
        }}> 
          <Employee employees={state.employeeList}   dispatch={dispatch} />
        </div>
        <div style={{
          border :'2px Solid Black'
        }}>
          <Team  employees={state.teamList} dispatch={dispatch}  averageAge={state.averageAge}/>
        </div>
      </div>
    </>
  );
}

export default App;
