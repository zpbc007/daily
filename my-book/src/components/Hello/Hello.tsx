import * as React from 'react'

export interface HelloProps {
    complier: string,
    framework: string
}

export class Hello extends React.Component <HelloProps, {}> {
    render () {
        return <h1>Hello from {this.props.complier} and {this.props.framework}</h1>
    }
}