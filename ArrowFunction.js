const inventory = [
    {type:   "machine", value: 5000},  
  
    {type:   "machine", value:  650},  
  
    {type:      "duck", value:   10},  
  
    {type: "furniture", value: 1200},
    
    {type:   "machine", value:   77}  
  ]  

  let total_machine = 0;
  let totalMachineValue = () => {
    for(let item of inventory){
        if(item.type === "machine"){
        total_machine += item.value;
        }
    }
    return total_machine;
}   
  console.log(totalMachineValue())