import React, { useState } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';

const Dynamic = () => {
    const [size, setSize] = useState('');
    const [array, setArray] = useState([]);
    const [element, setElement] = useState('');

    const handleInput = (e) => {
        setSize(e.target.value);
    };

    const handleElement = (e) => {
        setElement(e.target.value);
    };

    const handleArrayInput = () => {
        // Convert the input elements to an array of integers
        const newArray = element.split(',').map((item) => parseInt(item.trim(), 10));
        setArray(newArray); // Update the state with the new array
    };
    console.log(array)
    var count=0

    let myList = [];
    myList.push(0)
    
    let initalNode=[];
    let Edges=[];
    let arr=[];
    let string=[];
    
    const createNodes=()=>{
        setElemArrSize();
        arr = new Array(count).fill(0);
        let num=Math.pow(2,size);
        let sum,pointer=0;
        let k=0;
        for (let index = 0; index < array.length; index++) {
            sum=index+1;
            pointer=sum;
            for (let j = 0; j < 2; j++) {
                if(j==0){
                arr[myList[k] + 1] = { id: `${myList[0]+1}`, label: `${myList[0]+1}`, position: { x: 436 + 32, y: 100 + 72  } };
                myList.push(myList[k]+1);
                Edges.push({ id: `${a+myList[k]+1}`, source:` ${myList[k]}`, target: `${myList[k]+1}`,label:'Exclude first element' })
                }
                else{
                arr[myList[k] + num] = { id: `${myList[0]+num}`, label: `${myList[0]+num}`, position: { x: 436 + 32, y: 100 + 72  } };
                myList.push(myList[k]+num);
                Edges.push({ id: `${a+myList[k]+num}`, source:` ${myList[k]}`, target: `${myList[k]+num }`,label:'Exclude first element' })

                }

                console.log(myList)
                // pointer--;
            }
            
        }
        console.log(arr)
    }


let a=600;
let b=100;


const stringCreate=()=>{
    for (let index = 0; index < size; index++) {
        string[index]={ id: `${0+b}`, label: `${myList[0]+1}`, position: { x: a,y:b },style:{width:'1rem'} };
        b+=20;
    }
    console.log(string)
}

const setElemArrSize=()=>{
    var num=Math.pow(2,size);
    count+=num
    while(num>0){
        count+=num/2;
        num=num/2;
    }
    // count+=1;
}

let edgeCount=0;
let source =0;
let target=0;
let edgeId="a";
let label="Exclude element"
const EdgeFill=()=>{
    var num=Math.pow(2,size);
    var edgeSize=(num-1)*2;
    for (let index = 0; index < edgeSize; index++) {
        Edges[index]={ id: `${edgeId}`, source:` ${source}`, target: `${target}`,label:`${label}` };
        edgeId+=1;
    }
}

const TwoDMatrix=()=>{
    setElemArrSize();
    for (let index = 0; index < count; index++) {
         initalNode[index]=string;
        
    }
    EdgeFill();
    console.log(initalNode)
    console.log(Edges)
}

const colorMatrix=()=>{

}

const ManipulateArray=()=>{
Edges[0].id="30";
}


console.log(Edges)



    return (
        <>
            <div style={{ height: "40px", background: "skyblue", textAlign: "center", width: "99vw", padding: "12px 15px" }}>RECURSION : PRINT ALL SUBSETS OF AN ARRAY</div>
            <p>Enter the desired size of the array</p>
            <input value={size} onChange={handleInput}></input>
            <p>Enter the elements of the array</p>
            <input value={element} onChange={handleElement}></input>
            <button onClick={handleArrayInput}>Create Array</button>
            <button onClick={createNodes}>Create Nodes</button>

            <button onClick={stringCreate}>Create Strings</button>
            <button onClick={TwoDMatrix}>Create 2D matrix</button>
            <button onClick={ManipulateArray}>ManipulateArray</button>



        </>
    );
}

export default Dynamic;
