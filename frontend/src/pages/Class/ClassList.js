import React from "react";
import User from "./ClassUser";

class ListUsers extends React.Component {
    render() {
        console.log(this.props.users)
        if (this.props.users.length > 0)
            return (
                <table className="classTable">
                        <thead className="classTableHead">
                            <th>№</th>
                            <th>ФИО ученика</th>
                            <th>Оценки</th>
                            <th>Д/З</th>
                        </thead>

                        <tbody>
                            {this.props.users.map((el) => (
                            <User key={el.id} user={el}/>
                        ))}
                        </tbody>
                </table> 
            )
        else
            return (
                <h2>Список пуст</h2>
            )
    }
}

export default ListUsers