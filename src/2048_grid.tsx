import Block from "./2048_block"


function Grid () {

    let boardNumbers = [
        [ <Block/>,  <Block/>,  <Block/>, <Block/>],
        [ <Block/>,  <Block/>,  <Block/>, <Block/>],
        [ <Block/>,  <Block/>,  <Block/>, <Block/>],
        [ <Block/>,  <Block/>,  <Block/>, <Block/>],
    ];
    // let row1 = boardNumbers[0].map(block => {block});
    // let row2 = boardNumbers[1].map(block => {block});
    // let row3 = boardNumbers[2].map(block => {block});
    // let row4 = boardNumbers[3].map(block => {block});

    return (
        <div>
          <table>
            {/* <thead>
              <tr>
                {students[0].map((item, index) => {
                  return <th>{item}</th>;
                })}
              </tr>
            </thead> */}
            <tbody>
              {boardNumbers.map((row, index) => {
                return (
                  <tr>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    
}

export default Grid;