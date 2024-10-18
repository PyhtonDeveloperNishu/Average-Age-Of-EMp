import style from './Team.module.css'

function Team(props) {
  return (
    <>
    <h1>Team List</h1>
    <div>
      <button className="" onClick={()=>props.dispatch({type:'SORT_BY_AGE',payload:{}})}> SORT BY AGE</button>
      
    {props.employees.map((data, index) => {
        return (
          <div className={style.data_con} key={index}>
            <div  className={style.data}>

              {data.first_name} - {data.age} years old 
              <button className={style.add_btn} onClick={()=>props.dispatch({type:'REMOVE_FROM_TEAM_LIST',payload:data})}>Remove</button>
            </div>
          </div>
        );
      })}
      <br />
      Average Age: {props.averageAge} <br /><br />
      <button className="" onClick={()=>props.dispatch({type:'AVERAGE_AGE',payload:{}})}> Average Age </button>
      
    </div>
    </>
  )
}

export default Team;