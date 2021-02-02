
function Grid(props: any) {
    function colorSelector(num: number) {
        if (num == 2) return "#81591c";
        if (num == 4) return "#d1c4e9"
        if (num == 8) return "#7e57c2"
        if (num == 16) return "#512da8"
        if (num == 32) return "#311b92"
        if (num == 64) return "#2196f3"
        if (num == 128) return "#0d47a1"
        if (num == 256) return "#80cbc4"
        if (num == 512) return "#cddc39"
        if (num == 1024) return "grey"
        if (num == 2048) return "gold"
    }


    return (
        <div className="board">
            <table>
                <tbody>
                    {props.board.map((row: any, index: number) => {
                        let className = "two";
                        return (
                            <tr>
                                <td style={{ backgroundColor: colorSelector(row[0]) }}>{row[0]}</td>
                                <td style={{ backgroundColor: colorSelector(row[1]) }}>{row[1]}</td>
                                <td style={{ backgroundColor: colorSelector(row[2]) }}>{row[2]}</td>
                                <td style={{ backgroundColor: colorSelector(row[3]) }}>{row[3]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Grid;