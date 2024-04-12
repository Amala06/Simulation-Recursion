In order to create dynamic recursion display module, some challenges needed to be tackled.
challenges:
ReactFlow only accepts the pre-wriiten format of data
Passing the array is the challenge


Formulas:
Total subsets that will be formed will be Math.pow(2,size)
Total number of nodes will be Math.pow(2,(size+1))-2

Solutions:
Create two variables to determine x and y axis
Set the size of the one piece of rectangle
compute the total size of the rectangle
pass two colours

create an array with all nodes
All nodes must contain an array, whose colour will be changed accordingly
Maintain a list for updating array also and the indexes also
