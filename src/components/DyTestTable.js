import dataTable from "../data/table1.json";
import { Component } from "react";
import "../index.css";

class DyTestTable extends Component {

    render() {
        return(
            <div>
                <table>
                    {
                        dataTable.map((row, i) => {
                        return (
                            <tr key={i}>
                                    <td>
                                        {row.h}
                                    </td>
                                    
                                    <td>
                                        {row.b}
                                    </td>
                                    
                                    <td>
                                        {row.f}
                                    </td>
                            </tr>
                            
                        );
                    })
                    }
                </table>
          </div>
        )
    }
  }

export default DyTestTable;
