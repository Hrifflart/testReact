import React, {Component} from 'react'

const Table1 = () => {
    return (
        <thead>
            <tr>
                <th>User</th>
                <th>Start hour</th>
                <th>End hour</th>
                <th>Topic</th>
                <th>Link</th>
            </tr>
        </thead>
    )
}

const Table2 = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.user}</td>
                <td>{row.start_hour}</td>
                <td>{row.end_hour}</td>
                <td>{row.topic}</td>
                <td>{row.link}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table3 = ({props}) => {
    const rows = props.meetings.map((row, index) => {
        return (
            <tr key={row._id}>
                <td>{row.start_hour}</td>
                <td>{row.end_hour}</td>
                <td>{row.topic}</td>
                <td>{row.link}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        
        const {characterData, resultData} = this.props;
        console.log(JSON.stringify(this.props.resultData));
        return (
            <body>
                <h1>Meetings : </h1><br></br>
                <table>
                    <Table1/>
                    <Table2 characterData={characterData} />
                    <Table3 props={resultData} />
                </table>
            </body>
        )
    }
}

export default Table