import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
function MainMain() {
const [show, setShow] = useState(true);
const [size, setSize] = useState('');
const [array, setArray] = useState([]);
const [element, setElement] = useState('');
const [id,setId]=useState(100);
const [colorCodesArr, setColorCodesArr] = useState([]);
const [edgeStore, setEdgeStore] = useState([]);
const [Nodes,setNodes]=useState([]);
const [flow, setFlow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





// Creating array
const handleInput = (e) => {
    setSize(e.target.value);
};

const handleElement = (e) => {
    setElement(e.target.value);
};

const handleArrayInput = () => {
    const newArray = element.split(',').map((item) => parseInt(item.trim(), 10));
    setArray(newArray); 
    // console.log(array)
};
// var count=0


// Creating initial Nodes and trying to save array within it 

let TotalNodes= Math.pow(2,3+1)-1;
console.log(TotalNodes)
// let Nodes=[]
let nodeSize=size*32;

const initialNodeCreation=()=>{
for (let index = 0; index < TotalNodes; index++){
     Nodes[index] = [];
}
console.log("Inintial Nodes : ", Nodes);
setNodes(Nodes)
}
// Colourcode generation
let counter=Math.pow(2,size);
let TempList=[0]
let curTemp=[]
let subsetCount=Math.pow(2,size);
// let colorCodesArr=[];

const colorCodeGen = () => {
// let colorCodesArr = [];
const number = size;
const white = '0'.repeat(number);
const red = '1' + '0'.repeat(number - 1);
const green = '2' + '0'.repeat(number - 1);
colorCodesArr.push(white);
colorCodesArr.push(red);
colorCodesArr.push(green);
let rnum = parseInt(red);
let wnum = parseInt(green);
rnum /= 10;
wnum /= 10;
let curArr = [];
let pointer = 1;
while (curArr.length <subsetCount) {
    curArr = [];
    for (let index = pointer; index < colorCodesArr.length; index++) {
        for (let j = 0; j < 2; j++) {
            if (j == 0) {
                curArr.push((parseInt(colorCodesArr[index]) + rnum).toString());
            } else {
                curArr.push((parseInt(colorCodesArr[index]) + wnum).toString());
            }
        }
    }
    pointer = colorCodesArr.length;
    colorCodesArr.push(...curArr);
    rnum /= 10;
    wnum /= 10;
}
console.log(colorCodesArr);
setColorCodesArr(colorCodesArr);
}




// const [white,SetWhite]=useState(true)

const renderWhiteNodes = () => {
let strings = [];
let variable=400;
let inc=1.1
// let id=0
for (let index = 0; index < size; index++) {
    
    if (index === 0) {
        strings[index] = { id: '0', position: { x: variable, y: 10 }, data: { label: array[index] }, style: { backgroundColor: "white", width: "2rem" } };

    } else {
       
        variable+=32
         strings[index] = { id:  `${(300+inc).toString()}`, position: { x: variable, y: 10 }, data: { label: array[index] }, style: { backgroundColor: "white", width: "2rem" } };

        // strings[index] = `{ id: ${(target+inc).toString()}, position: { x: ${x1 + 32}, y: ${y1} }, data: { label: ${array[index]}}, style:{backgroundColor: ${colour},width:"2rem"}},`;
    }
    inc+=1;
    // edgeId+=1;

    
}


setNodes(prevNodes => {
    const newNodes = [...prevNodes];
    newNodes[0] = strings;
    return newNodes;
});
};

const [tempTarget, setTempTarget]=useState(100);

const StringBuilder = (ind, x1, y1, str, source, target) => {
// let x=500;
let strings = [];
let colour = "white";
let inc=1.1;
let edgeId=100;
console.log("String length : ", str.length)
let wh=500;




for (let index = 0; index < str.length; index++) {
    
    if (index === 0) {
        if (str.charAt(index) === '0') colour = "white";
        else if (str.charAt(index) === '1') colour = "red";
        else colour = "green";
        //  strings[index] = `{ id: ${(target).toString()}, position: { x: ${x1}, y: ${y1} }, data: { label: ${array[index]}}, style:{backgroundColor: ${colour}, width:"2rem"}},`;
         strings[index] = { id: `${(target).toString()}`, position: { x: x1, y: y1 }, data: { label: array[index] }, style: { backgroundColor: colour, width: "2rem" } };

    } else {
        if (str.charAt(index) === '0') colour = "white";
        else if (str.charAt(index) === '1') colour = "red";
        else colour = "green";
        x1+=32
         strings[index] = { id: `${(target+inc).toString()}`, position: { x: x1, y: y1 }, data: { label: array[index] }, style: { backgroundColor: colour, width: "2rem" } };

        // strings[index] = `{ id: ${(target+inc).toString()}, position: { x: ${x1 + 32}, y: ${y1} }, data: { label: ${array[index]}}, style:{backgroundColor: ${colour},width:"2rem"}},`;
    }
    inc+=1;
    edgeId+=1;

    
}



setNodes(prevNodes => {
    const newNodes = [...prevNodes];
    newNodes[ind] = strings;
    return newNodes;
});

// Update edgeStore state
// setId(id + 1);

setEdgeStore(prevEdgeStore => {
    const newEdgeStore = [...prevEdgeStore];
    newEdgeStore.push({ id: edgeId, source: source.toString(), target: target.toString()});
    // newEdgeStore.push(`{ id: ${edgeId}, source: ${source.toString()}, target: ${target.toString()} },`);
    return newEdgeStore;
});
}

const updateTemptarget=(e)=>{
setTempTarget(e);
console.log(tempTarget)
}

let temp=tempTarget;
const StringBuilderNew = (ind, x1, y1, str, source, target) => {
// let x=500;
let strings = [];
let colour = "white";
let inc=1.1;
let edgeId=100;
console.log("String length : ", str.length)
let wh=500;

for (let index = 0; index < str.length; index++) {
    console.log("tempTarget : ",tempTarget)
    if (index === 0) {
        if (str.charAt(index) === '0') colour = "white";
        else if (str.charAt(index) === '1') colour = "red";
        else colour = "green";
        //  strings[index] = `{ id: ${(target).toString()}, position: { x: ${x1}, y: ${y1} }, data: { label: ${array[index]}}, style:{backgroundColor: ${colour}, width:"2rem"}},`;
         strings[index] = { id: `${(target).toString()}`, position: { x: x1, y: y1 }, data: { label: array[index] }, style: { backgroundColor: colour, width: "2rem" } };

    } else {
        if (str.charAt(index) === '0') colour = "white";
        else if (str.charAt(index) === '1') colour = "red";
        else colour = "green";
        x1+=32
        temp+=100;
        
        strings[index] = { id: `${(temp).toString()}`, position: { x: x1, y: y1 }, data: { label: array[index] }, style: { backgroundColor: colour, width: "2rem" } };
        // let temp=tempTarget;

        // strings[index] = `{ id: ${(target+inc).toString()}, position: { x: ${x1 + 32}, y: ${y1} }, data: { label: ${array[index]}}, style:{backgroundColor: ${colour},width:"2rem"}},`;
    }
    // temp+=temp;
    // updateTemptarget(temp);
    inc+=1;
    edgeId+=1;

    
}



setTempTarget(prevTempTarget => {
    // Calculate the new tempTarget value based on the previous value
    const newTempTarget = prevTempTarget + temp; // Modify as needed
    
    // Log the previous and new tempTarget values for debugging purposes
    console.log('Previous tempTarget:', prevTempTarget);
    console.log('New tempTarget:', newTempTarget);
    
    // Return the new tempTarget value
    temp=newTempTarget;
    return newTempTarget;
});

setNodes(prevNodes => {
    const newNodes = [...prevNodes];
    newNodes[ind] = strings;
    return newNodes;
});

// Update edgeStore state
// setId(id + 1);

setEdgeStore(prevEdgeStore => {
    const newEdgeStore = [...prevEdgeStore];
    newEdgeStore.push({ id: edgeId, source: source.toString(), target: target.toString()});
    // newEdgeStore.push(`{ id: ${edgeId}, source: ${source.toString()}, target: ${target.toString()} },`);
    return newEdgeStore;
});
}



console.log(Nodes[0])

// console.log(colorCodesArr[2])
const updateIdEdgeStore = () => {
const updatedEdgeStore = edgeStore.map((edge, index) => {
    return { ...edge, id: (index + 1).toString() }; // Update the id property with a new value
});

setEdgeStore(updatedEdgeStore); // Update the state with the updated edgeStore
};

const xFactor=500

const SettingValuesInsideNodes = () => {
let TempList = [0];
let curTemp = [];
let counter = subsetCount*2; 
console.log(counter)
let colourCounter=1;
let y=0;
let xStore=[500]
let Xcur=[]

while (TempList.length < subsetCount) {
    y+=100;

    counter=counter/2;
    console.log(counter)
    for (let index = 0; index < TempList.length; index++) {
        nodeSize+=10;
        
        for (let j = 0; j < 2; j++) {  
            if (j == 0) {
                curTemp.push(TempList[index] + 1);
                Xcur.push(xStore[index]-nodeSize)
                StringBuilder(TempList[index] + 1,xStore[index]-nodeSize,y,colorCodesArr[colourCounter].toString(),TempList[index],TempList[index]+1)
                colourCounter+=1;
                console.log(y," at index ",index)
                // nodeSize+=20;
                // Add your logic for setting other values inside the node
            } else {
                curTemp.push(TempList[index] + counter);
                // nodeSize+=20;
                // Add your logic for setting other values inside the node
                Xcur.push(xStore[index]+nodeSize)
                StringBuilder(TempList[index] + counter,xStore[index]+nodeSize,y,colorCodesArr[colourCounter].toString(),TempList[index],TempList[index]+counter)
                console.log(y," at index ",index)

                colourCounter+=1;
            }
        }
        console.log(Xcur)
    }
    // Replace TempList with the newly generated list
    TempList = curTemp.slice(); // Copy the contents of curTemp to TempList
    curTemp = []; // Clear curTemp for the next iteration
    xStore=Xcur.slice();
    Xcur=[];
}
}

const SettingValuesInsideNodesNew  = () => {
let TempList = [0];
let curTemp = [];
let counter = subsetCount*2; 
console.log(counter)
let colourCounter=1;
let y=0;
let xStore=[300]
let Xcur=[]
let xFactorCounter=1;

while (TempList.length < subsetCount) {
    y+=200;

    counter=counter/2;
    console.log(counter)
    xFactorCounter=1;
    // if(counter < 4){
    //     nodeSize=300
    // }
    // xStore[0]+=200
    for (let index = 0; index < TempList.length; index++) {
        nodeSize+=10;
        
        for (let j = 0; j < 2; j++) {  
            if (j == 0) {
                curTemp.push(TempList[index] + 1);
                Xcur.push(xStore[index]-nodeSize)
                StringBuilderNew(TempList[index] + 1,xStore[0]*xFactorCounter+nodeSize,y,colorCodesArr[colourCounter].toString(),TempList[index],TempList[index]+1)
                colourCounter+=1;
                console.log(y," at index ",index)
                xFactorCounter+=1;
                // nodeSize+=20;
                // Add your logic for setting other values inside the node
            } else {
                curTemp.push(TempList[index] + counter);
                // nodeSize+=20;
                // Add your logic for setting other values inside the node
                Xcur.push(xStore[index]+nodeSize)
                StringBuilderNew(TempList[index] + counter,xStore[0]*xFactorCounter+nodeSize,y,colorCodesArr[colourCounter].toString(),TempList[index],TempList[index]+counter)
                console.log(y," at index ",index)
                xFactorCounter+=1;
                colourCounter+=1;
            }
        }
        console.log(Xcur)
    }
    // Replace TempList with the newly generated list
    TempList = curTemp.slice(); // Copy the contents of curTemp to TempList
    curTemp = []; // Clear curTemp for the next iteration
    // xStore=Xcur.slice();
    Xcur=[];
    xStore[0]=xStore[0]+nodeSize;
        // xStore[0]+=60

}
}






let myList = [];
myList.push(0)


const [flattenedNodes, setFlattenedNodes] = useState([]);



    const flattenNodes = () => {
        let flattenedArray = [];

        Nodes.forEach(subarray => {
            flattenedArray = flattenedArray.concat(subarray);
        });

        setFlattenedNodes(flattenedArray);
    };

    // useEffect hook to call flattenNodes when Nodes state changes
    useEffect(() => {
        flattenNodes();
    }, [Nodes]);

const Display=()=>{
// flattenNodes();
console.log("Edges Array: ",edgeStore);
console.log(" ")
console.log("Final Nodes : ", Nodes)
console.log(flattenedNodes)
}


const [renderArray,setRenderArray]=useState([]);


//Displaying the Nodes
const renderWithDelay = () => {
    setFlow(true); 
    for (let i = 0; i < flattenedNodes.length; i++) {
   
    setTimeout(() => {
        setRenderArray(prevNodes => [...prevNodes, flattenedNodes[i]]);
    }, (i + 1) * 1000);
    
}
  };

  const displayArray = () => {
    const updatedNodes = [...flattenedNodes]; // Create a copy of initialNodes
  console.log(updatedNodes)
    for (let index = 0; index < array.length; index++) {
      updatedNodes[index].data.label = array[index];
    //   updatedNodes[index].data.label = 3;


      console.log("hello"+updatedNodes[index].data.label)
      console.log(array[index])
    }
  
    // Update the state with the modified nodes
    setFlattenedNodes(flattenedNodes);
    setRenderArray(flattenedNodes);
    console.log(updatedNodes[0].data.label)
    setFlow(true)
    // AddnewElements();
  };
//   const renderWithDelay = () => {
//     setFlow(true); // Set flow to true to start rendering ReactFlow

//     // Loop through each initial node and render ReactFlow with a delay
//     for (let i = 0; i < initialNodes.length; i++) {
//       setTimeout(() => {
//         setInitialNodes(initialNodes.slice(0, i + 1));
//       }, (i + 1) * 1000); // Delay increases for each iteration (i * 1000 ms)
//     }
//   };



const generation = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
    
    // Call your functions one after the other with delays
    // await handleArrayInput();
    await initialNodeCreation();
    await colorCodeGen();
    await SettingValuesInsideNodesNew();

    await renderWhiteNodes();
    // await Display();
    // await displayArray();
  };
  


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      {/* <input value={size} onChange={handleInput}></input>
            <p>Enter the elements of the array</p>
            <input value={element} onChange={handleElement}></input>
            <button onClick={handleArrayInput}>Create Array</button> */}



      <Modal show={show} onHide={handleClose}  centered>
        <Modal.Header closeButton>
          <Modal.Title>RECURSION SUBSET</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ENTER THE SIZE OF THE ARRAY </Form.Label>
              <Form.Control
                type="email"
                placeholder="size = 3 "
                autoFocus
                value={size}
                onChange={handleInput}
                // value={size}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>ENTER THE ELEMENTS OF THE ARRAY</Form.Label>
              <Form.Control type="textarea" rows={3} 

               value={element}
              onChange={handleElement}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleArrayInput}>
           Double Click Save Array
          </Button>
          <Button variant="primary" onClick={generation}>
           Produce the requirements
          </Button>
          <Button variant="primary" onClick={updateIdEdgeStore}>
           Update the edges
          </Button>
          <Button variant="primary" onClick={Display}>
           Connect the Final Recursion tree
          </Button>
          <Button variant="primary" onClick={displayArray}>
           Show it
          </Button>
        </Modal.Footer>
      </Modal>

      <div style={{ width: '97vw', height: '95vh' }}>
      {flow ? (
        //  <ReactFlow>
        // <ReactFlow nodes={flattenedNodes} edges={edgeStore} 
        // style={{ backgroundColor: '#f0f0f0', border: '1px solid #000' ,display:"none"}}
        // />
        // hi
        // </ReactFlow>


<ReactFlow nodes={renderArray} edges={edgeStore} />

        // panOnDrag={false}
      ) : (
        <div>Click to render</div>
      )}
        </div>

    </>
  );
}

export default MainMain;