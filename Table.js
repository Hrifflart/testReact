import React, {Component} from 'react'

const Table1 = () => {
    return (
        <thead>
            <tr>
                <th>Id</th>
                <th>Start hour</th>
                <th>End hour</th>
                <th>Topic</th>
                <th>Link</th>
            </tr>
        </thead>
    )
}

const Table3 = ({props}) => (
    <tbody>{props.meetings.map((row, index) => {
        console.log(props);
        return (
            <tr key={row._id}>
                <td>{row.start_hour}</td>
                <td>{row.end_hour}</td>
                <td>{row.topic}</td>
                <td>{row.link}</td>
            </tr>
        )
    })}
    </tbody>
)

class Table extends Component {

    render() {
        const {resultData} = this.props;
        console.log(JSON.stringify(this.props.resultData));
        return (
            <body>
                <h1>Meetings : </h1><br></br>
                <table>
                    <Table1/>
                    <Table3 props={this.meetings} />
           </table>
            </body>
        )
    }
}

export default Table