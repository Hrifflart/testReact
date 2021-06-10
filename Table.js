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

const Table3 = ({props}) => {
    console.log(props);
    console.log(props.meetings);
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
    return <tbody>
                <div action="{{url_for('delete', _id=meeting['_id'])}}" method="post" >
                    <input type="submit" value="Delete" class="btn btn-danger"/>
                </div>
            </tbody>
}

class Table extends Component {
    render(props) {
        const {resultData} = this.props;
        console.log(JSON.stringify(this.props.resultData));
        return (
            <body>
                <h1>Meetings : </h1><br></br>
                <table>
                    <Table1/>
                    <Table3 props={resultData} />
           </table>
            </body>
        )
    }
}

export default Table