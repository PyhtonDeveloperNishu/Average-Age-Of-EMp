import Employee from "./components/EmployeeList/Employee";
import "./App.css";
import Team from "./components/TeamList/Team";
import employeesJson from './static/employees.json'
import {useReducer} from  'react'

function App() {
  
  
  
  const initialState ={
    employeeList : employeesJson,
    teamList : [],
    averageAge:0
  }
  
  const reducerFn = (state,action)=>{
    console.log("dispatxh triger",state,action);
    if(action.type==='ADD_TO_TEAM'){
      return{
        ...state,
        teamList:[...state.teamList,action.payload]
      }

    }else if(action.type==='REMOVE_FROM_TEAM_LIST'){
       return{
        ...state,
        teamList:state.teamList.filter((team)=>team.id!==action.payload.id)
       }

    }else if(action.type==='AVERAGE_AGE'){
      const aveAge = (state.teamList.reduce((acc,cur)=>acc+cur.age,0)/state.teamList.length).toFixed(2)
      return{
        ...state,
        averageAge:aveAge,
      };

    }else if(action.type==='SORT_BY_AGE'){
      const sortedTeam =[...state.teamList].sort((a,b)=>a.age-b.age);
      return{
        ...state,
        teamList:sortedTeam
      }

    }else{
      //
    }
  }


  const [state,dispatch] = useReducer(reducerFn,initialState)
  




  return (
    <>
      <h1>Employee App</h1>
      <div style={{
        display:'flex',
        gap:'8rem',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:'2rem'
       

       }}>
        <div style={{
            border :'2px Solid Black'
        }}> 
          <Employee employees={state.employeeList}   dispatch={dispatch} />
        </div>
        <div style={{
          border :'2px Solid Black',
          alignItems:'center',
          justifyContent:'center',
          width:'25vw',
          height:'100vh',

        }}>
          
          <Team  employees={state.teamList} dispatch={dispatch}  averageAge={state.averageAge}/>
         
        </div>
      </div>
    </>
  );
}

export default App;
