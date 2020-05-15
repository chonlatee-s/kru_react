import React, {Component} from 'react'
import { connect } from 'react-redux'
class TestRedux extends Component {
    render() {
        const all = this.props.stateFromStore
        return (
            <div className="boxExam">
                Hello Test Redux Component
                {
                    all.map(item => (
                        <div key={item.id}>{item.name}</div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        stateFromStore : state.data
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         dispatchFromStore : () => {
//             return dispatch({type:'MY_ACTION'})
//         }
//     }
// }
export default connect(mapStateToProps, null) (TestRedux)