
import React, { useEffect, useState } from 'react';
import ReactFlow from 'reactflow';
 
import 'reactflow/dist/style.css';

  
const initialEdges = [
{ id: 'e0-00', source: '0', target: '00',label:'Exclude first element' },
{id:'e0-0/0',source:'0',target:'0/0' ,label:'Include first element'},

{id:'01-10',source:'01',target:'11', label:'Exclude second element'},
{id:'01-1/0',source:'01',target:'1/1',label:'Include second element'},

{id:'12-10',source:'12',target:'22',label:'Exclude third element'},
{id:'12-1/0',source:'12',target:'2/2',label:'Include third element'},

{id:'1/2-212',source:'1/2',target:'212' ,label:'Exclude third element'},
{id:'1/2-21/2',source:'1/2',target:'21/2' ,label:'Include third element'},

{id:'0/0-111',source:'0/0',target:'111', label:'Exclude second element'},
{id:'0/0-11/0',source:'0/0',target:'11/1',label:'Include second element'},

{id:'112-222',source:'112',target:'222' ,label:'Exclude third element'},
{id:'112-22/2',source:'112',target:'22/2' ,label:'Include third element'},

{id:'11/2-2202',source:'11/2',target:'2202' ,label:'Exclude third element'},
{id:'11/2-220/2',source:'11/2',target:'220/2' ,label:'Include third element'},
// {id:'00-01',source:'00',target:'01'},
// {id:'00-0/1',source:'00',target:'0/1'},

];

const arr=[];

export default function Display() {
    const [size, setSize] = useState('');
    const [flow, setFlow] = useState(false);

const [array, setArray] = useState([]);
const [element,setElement]=useState("");
const [initialNodes, setInitialNodes] = useState([
    { id: '0', position: { x: 600, y: 20 }, data: { label: '1' },style:{width:"2rem"}  },
    { id: '1', position: { x: 632, y: 20}, data: { label: '2' } ,style:{width:"2rem"} },
    { id: '2', position: { x: 664, y: 20}, data: { label: '3' } ,style:{width:"2rem"} },

    { id: '00', position: { x: 436, y: 100 }, data: { label:  '1'}, style:{backgroundColor:"red",width:"2rem"}},
    { id: '01', position: { x: 468, y: 100 }, data: { label: '2' },style:{width:"2rem"} },
    { id: '02', position: { x: 500, y: 100 }, data: { label:  '3' },style:{width:"2rem"} },

    
    { id: '0/0', position: { x: 728, y: 100 }, data: { label:  arr[0] ? arr[0] : '1' }, style:{backgroundColor:"green",width:"2rem"} },//
    { id: '0/1', position: { x: 760, y: 100 }, data: { label:  '2' } ,style:{width:"2rem"}},
    { id: '0/2', position: { x: 792, y: 100 }, data: { label:  '3'} ,style:{width:"2rem"}},
    
    { id: '10', position: { x: 332, y: 200 }, data: { label: '1' }, style:{backgroundColor:"red",width:"2rem"}},
    { id: '11', position: { x: 364, y: 200 }, data: { label: '2' },style:{backgroundColor:"red",width:"2rem"} },
    { id: '12', position: { x: 396, y: 200 }, data: { label:  '3' },style:{width:"2rem"}  },//
    { id: '1/0', position: { x: 470, y: 200 }, data: { label:  '1' }, style:{backgroundColor:"red",width:"2rem"} },
    { id: '1/1', position: { x: 502, y: 200 }, data: { label:  '2' },style:{backgroundColor:"green",width:"2rem"} },
    { id: '1/2', position: { x: 534, y: 200 }, data: { label:  '3'},style:{width:"2rem"}  },

        
    { id: '20', position: { x: 230, y: 300 }, data: { label: '1' }, style:{backgroundColor:"red",width:"2rem"}},
    { id: '21', position: { x: 262, y: 300 }, data: { label: '2' },style:{backgroundColor:"red",width:"2rem"} },
    { id: '22', position: { x: 294, y: 300 }, data: { label:  '3' },style:{backgroundColor:"red",width:"2rem"} },//

    { id: 'a1', position: { x: 230, y: 340 }, data: { label: 'Subset = {}' }, style:{backgroundColor:"blue",width:"6rem", color:"white"}},

    { id: '2/0', position: { x: 360, y: 300 }, data: { label:  '1' }, style:{backgroundColor:"red",width:"2rem"} },
    { id: '2/1', position: { x:392, y: 300 }, data: { label:  '2' },style:{backgroundColor:"red",width:"2rem"} },
    { id: '2/2', position: { x: 424, y: 300 }, data: { label:  '3'},style:{backgroundColor:"green",width:"2rem"}  },

    { id: 'a2', position: { x: 360, y: 340 }, data: { label: 'Subset = {3}' }, style:{backgroundColor:"blue",width:"6rem",color:"white"}},

    { id: '210', position: { x: 490, y: 300 }, data: { label: '1' }, style:{backgroundColor:"red",width:"2rem"}},
    { id: '211', position: { x: 522, y: 300 }, data: { label: '2' },style:{backgroundColor:"green",width:"2rem"} },
    { id: '212', position: { x: 554, y: 300 }, data: { label:  '3' },style:{backgroundColor:"red",width:"2rem"} },
    { id: 'a3', position: { x: 490, y: 340 }, data: { label: 'Subset = {2}' }, style:{backgroundColor:"blue",width:"6rem",color:"white"}},
    { id: '21/0', position: { x: 610, y: 300 }, data: { label:  '1' }, style:{backgroundColor:"red",width:"2rem"} },
    { id: '21/1', position: { x:642, y: 300 }, data: { label:  '2' },style:{backgroundColor:"green",width:"2rem"} },
    { id: '21/2', position: { x: 674, y: 300 }, data: { label:  '3'},style:{backgroundColor:"green",width:"2rem"}  },

    { id: 'a4', position: { x: 610, y: 340 }, data: { label: 'Subset = {2,3}' }, style:{backgroundColor:"blue",width:"6rem",color:"white"}},

    { id: '110', position: { x: 720, y: 200 }, data: { label: '1' }, style:{backgroundColor:"green",width:"2rem"}},
    { id: '111', position: { x: 752, y: 200 }, data: { label: '2' },style:{backgroundColor:"red",width:"2rem"} },
    { id: '112', position: { x: 784, y: 200 }, data: { label:  '3' },style:{backgroundColor:"",width:"2rem"}  },
    
    { id: '11/0', position: { x: 840, y: 200 }, data: { label:  '1' }, style:{backgroundColor:"green",width:"2rem"} },
    { id: '11/1', position: { x: 872, y: 200 }, data: { label:  '2' },style:{backgroundColor:"green",width:"2rem"} },
    { id: '11/2', position: { x: 904, y: 200 }, data: { label:  '3'},style:{backgroundColor:"",width:"2rem"}  },

    { id: '220', position: { x: 730, y: 300 }, data: { label: '1' }, style:{backgroundColor:"green",width:"2rem"}},
    { id: '221', position: { x: 762, y: 300 }, data: { label: '2' },style:{backgroundColor:"red",width:"2rem"} },
    { id: '222', position: { x: 794, y: 300 }, data: { label:  '3' },style:{backgroundColor:"red",width:"2rem"} },
   
    { id: 'a5', position: { x: 730, y: 340 }, data: { label: 'Subset = {1}' }, style:{backgroundColor:"blue",width:"6rem", color :"white"}},

    { id: '22/0', position: { x: 850, y: 300 }, data: { label:  '1' }, style:{backgroundColor:"green",width:"2rem"} },
    { id: '22/1', position: { x:882, y: 300 }, data: { label:  '2' },style:{backgroundColor:"red",width:"2rem"} },
    { id: '22/2', position: { x:914, y: 300 }, data: { label:  '3'},style:{backgroundColor:"green",width:"2rem"}  },
    { id: 'a6', position: { x: 850, y: 340 }, data: { label: 'Subset = {1,3}' }, style:{backgroundColor:"blue",width:"6rem",color:"white"}},

    { id: '2200', position: { x: 960, y: 300 }, data: { label: '1' }, style:{backgroundColor:"green",width:"2rem"}},
    { id: '2201', position: { x: 992, y: 300 }, data: { label: '2' },style:{backgroundColor:"green",width:"2rem"} },
    { id: '2202', position: { x: 1024, y: 300 }, data: { label:  '3' },style:{backgroundColor:"red",width:"2rem"} },
   
    { id: 'a7', position: { x: 960, y: 340 }, data: { label: 'Subset = {1,2}' }, style:{backgroundColor:"blue",width:"6rem",color:"white"}},

    { id: '220/0', position: { x: 1080, y: 300 }, data: { label:  '1' }, style:{backgroundColor:"green",width:"2rem"} },
    { id: '220/1', position: { x:1112, y: 300 }, data: { label:  '2' },style:{backgroundColor:"green",width:"2rem"} },
    { id: '220/2', position: { x:1144, y: 300 }, data: { label:  '3'},style:{backgroundColor:"green",width:"2rem"}  },
    { id: 'a8', position: { x: 1080, y: 340 }, data: { label: 'Subt = {1,2,3}' }, style:{backgroundColor:"blue",width:"6.4rem",color:"white"}},


  ]);
const handleInput = (e) => {
  setSize(e.target.value);
};
const handleElement = (e) => {
  setElement(e.target.value);
};
console.log(arr[0])
// const handleArrayInput = () => {
//   const newArray = element.split(',').map((item) => parseInt(item.trim(), 10));
//   setArray(newArray);
// };
const handleArrayInput = () => {
    const newArray = element.split(',').map((item) => parseInt(item.trim(), 10));
    arr.splice(0, arr.length, ...newArray); // Replace the content of arr with the new array
    console.log(arr); // Just for debugging to see the updated arr
    setArray(newArray); // Update the state with the new array
  };

const displayArray = () => {
    const updatedNodes = [...initialNodes]; // Create a copy of initialNodes
  console.log(updatedNodes)
    for (let index = 0; index < array.length; index++) {
      updatedNodes[index].data.label = array[index];
    //   updatedNodes[index].data.label = 3;


      console.log("hello"+updatedNodes[index].data.label)
      console.log(array[index])
    }
  
    // Update the state with the modified nodes
    setInitialNodes(initialNodes);
    console.log(updatedNodes[0].data.label)
    setFlow(true)
    AddnewElements();
  };



const AddnewElements = () => {
    const updatedNodes = [...initialNodes];    
    setInitialNodes(updatedNodes);
  };

 
  
  const renderWithDelay = () => {
    setFlow(true); // Set flow to true to start rendering ReactFlow

    // Loop through each initial node and render ReactFlow with a delay
    for (let i = 0; i < initialNodes.length; i++) {
      setTimeout(() => {
        setInitialNodes(initialNodes.slice(0, i + 1));
      }, (i + 1) * 1000); // Delay increases for each iteration (i * 1000 ms)
    }
  };

  return (
    <>
    <div style={{height:"40px", background:"skyblue", textAlign:"center", width:"99vw", padding:"12px 15px"}}>RECURSION : PRINT ALL SUBSET OF AN ARRAY</div>

    <div style={{ width: '97vw', height: '95vh' }}>
          {/* <p>Enter the desired size of array</p>
      <input value={size} onChange={handleInput}></input>
      <p>Enter the elements of the array</p>
      <input value={element} onChange={handleElement}></input> */}


      {/* <button onClick={handleArrayInput}>Create Array</button> */}

      {/* Displaying the size of the array */}

      {/* <p>Array Size: {array.length}</p> */}

      {/* Displaying each element of the array in a box */}
      {/* <div className='array_main_component'>
        {array.map((item, index) => (
          <>
          <div
            key={index}
           className='array_inner_component'
          >
            {item}           
         
          </div>
            </>
        ))}

      </div> */}
      <button onClick={displayArray}>click</button>
      <button onClick={()=>setFlow(false)}>reset</button>

      {/* {flow?
      <ReactFlow nodes={initialNodes} edges={initialEdges} />  
      :<>hjhj</>}
     */}
   

<button onClick={renderWithDelay}>Render With Delay</button>
      {flow ? (
         <ReactFlow>
        <ReactFlow nodes={initialNodes} edges={initialEdges} panOnDrag={false}
        style={{ backgroundColor: '#f0f0f0', border: '1px solid #000' ,display:"none"}}
        /></ReactFlow>
        // panOnDrag={false}
      ) : (
        <div>Click to render</div>
      )}
    </div>

    </>
  );
}

