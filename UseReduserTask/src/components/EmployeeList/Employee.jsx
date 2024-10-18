
import style from "./Employee.module.css";


function Employee( props ) {
  
  

  return (
    <>
      <h1>EmployeList</h1>
      
      {props.employees.map((data, index) => {
        return (
          <div className={style.data_con} key={index}>
            <div  className={style.data}>

              {data.first_name} - {data.age} years old
              <button className={style.add_btn} onClick={()=>props.dispatch({action:"ADD_TO_TEAM",payload:data})}>ADD</button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Employee;
