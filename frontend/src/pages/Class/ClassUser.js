import React from "react";

class User extends React.Component {
    user = this.props.user
    render() {
        return (
            <tr className="tableMainRow">
            <td>...</td>
            <td><a href="profile.html" className="student">{this.user.first_name} {this.user.last_name} {this.user.patronymic}</a></td>
            <td>
              <label id="label1">Выберите оценку:</label>
              <button id="chooseFive1" className="chooseFive" type="submit">5</button>
              <button id="chooseFour1" className="chooseFour" type="submit">4</button>
              <button id="chooseThree1" className="chooseThree" type="submit">3</button>
              <button id="chooseTwo1" className="chooseTwo" type="submit">2</button>

              <div class="gradeGrid">
                <div id="fiveGrade1" className="fiveGrade turnedOff">5</div>
                <div id="fourGrade1" className="fourGrade turnedOff">4</div>
                <div id="threeGrade1" className="threeGrade turnedOff">3</div>
                <div id="twoGrade1" className="twoGrade turnedOff">2</div>

                <div id="cancel1" className="cancelGrade turnedOff">➦</div>
              </div>
            </td>
            <td><input type="file" /></td>
          </tr>
        )
    }
}

export default User