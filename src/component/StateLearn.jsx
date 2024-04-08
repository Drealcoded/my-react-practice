import React,{ useState} from 'react'

const StateLearn = () => {
    // const [state, setState,] = useState('sam')
    // const [selim, setselim,] = useState('iam selim')

    const [name, setName] = useState("Renildo");
    const [students, setStudents] = useState("precious", "Mary", "029");
    // const handleBtnClick = (newName) => {
    //     setName(newName)
    // }
    const handleInputChange = (event) => {
        setName(event.target.value);
    }
    const handleAddNewStudent = (...newStudent) => {
        setStudents((currentStudent)=>{return [
            ...currentStudent, ...newStudents
        ]});
        console.log(name);
        console.log("student aray is :", students);
    }
  return (
    <div>
      
        <p>Hello World</p>
        {/* <button onClick={() => setName("jinadu")}>Click me</button>
        <button onClick={() => handleBtnClick("Mr Bayo")}>Click me too</button> */}

        <br />
        <br />
        
      <input type="text" placeholder='Enter student name'  onChange={handleInputChange}/>

      <button onClick={() => handleAddNewStudent("Ade", "Jide", "Bola", "Lolu", "Tasha")}>Add New Student</button>
    </div>
  )
}

export default StateLearn
