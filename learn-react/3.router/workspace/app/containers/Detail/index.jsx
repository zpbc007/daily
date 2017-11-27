import React from 'react'

class Detail extends React.Component {
    render () {
        return (
            <div>
                Detail 参数： {this.props.match.params.id}
            </div>
        )
    }
}

export default Detail