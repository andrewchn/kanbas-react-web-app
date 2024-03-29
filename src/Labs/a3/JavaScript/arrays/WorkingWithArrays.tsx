function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];
  
    let variableArray1 = [
      functionScoped,
      blockScoped,
      constant1,
      numberArray1,
      stringArray1,
    ];
  
    let todoLineItems = [
      <li>Buy Milk</li>,
      <li>Buy Bread</li>,
      <li>Buy Eggs</li>,
    ];
  
    return (
      <div>
        <h2>Working with Arrays</h2>
        {/* functionScoped = {functionScoped}
        <br />
        blockScoped = {blockScoped}
        <br />
        constant1 = {constant1}
        <br /> */}
        numberArray1 = {numberArray1}
        <br />
        stringArray1 = {stringArray1}
        <br />
        variableArray1 = {variableArray1}
        {/* <br />
        <h4>Todos</h4>
        <ul>{todoLineItems}</ul>
        <ol>{todoLineItems.map((item, index) => item)}</ol> */}
      </div>
    );
  }
  
  export default WorkingWithArrays;