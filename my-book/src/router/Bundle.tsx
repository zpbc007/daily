import React from 'react'

export interface BundleProps {
    load: React.Component,
    children: React.ReactChildren
}

class Bundle extends React.Component<BundleProps> {

    constructor (props: BundleProps) {
        super(props)
    }

    componentWillMount () {
        this.load(this.props)
    }

    componentWillReceiveProps (nextProps: BundleProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load (props: BundleProps) {
        this.setState({
            mod: null
        })
        props.load((mod) =>  {
            this.setState({
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render () {
        return this.props.children(this.state.mod)
    }
}

export default Bundle