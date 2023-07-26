import React, {useState} from 'react'

function Display({challenge}) {

    const [x, setx] = useState('');
    const [y, sety] = useState('');
    const [z, setz] = useState('');
    const [arrayValue, setArrayValue] = useState('')
    const [array, setarray] = useState([]);

    const handleXChange = ((event) => {
        setx([event.target.value])
    })
    const handleYChange = ((event) => {
        sety([event.target.value])
    })
    const handleZChange = ((event) => {
        setz([event.target.value])
    })
    const handleArrayValueChange = ((event) => {
        setArrayValue([event.target.value])
    })
    const handleArrayChange = (() => {
       if (arrayValue !== "") {
           setarray((currentArray) => [...currentArray, arrayValue]) 
           setArrayValue('')
           console.log(array)
        }
    })
   const clearArray = (() => {
    setarray([])
   })

  return (
    <div>
        <div className='displayBox'>
            <div className="variableBox">
                <div className="x">
                   Value for X: <input type='number' name='x' onChange={handleXChange}></input> {x}
                </div>
                <div className="y" >
                Value for Y:<input type='number' name='y' onChange={handleYChange}></input>{y}
                </div>
                <div className="z">
                Value for Z:<input type='number' name='z' onChange={handleZChange}></input>{z}
                </div>
            
                </div>
                <div className="array">
                    Value for array:<input type='number' name='array' onChange={handleArrayValueChange}></input>
                    <button type='button' onClick={handleArrayChange}>Add to array</button>
                    <button type='button' onClick={clearArray}>Clear the array</button>
                    <div>({JSON.stringify(array).replace(/[^0-9,]/gi,'')}) </div>
                </div>

            
            {challenge}
           
            

        </div>
        

    </div>
  )
}

export default Display