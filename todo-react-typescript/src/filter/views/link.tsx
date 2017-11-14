import * as React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const Link = ({active, children, onClick}: 
            {
                active: boolean,
                children: string,
                onClick: () => void
            }) => {
    if (active) {
        return <b className="filter selected">{children}</b>
    } else {
        return (
            <a 
                href="#"
                className="filter not-selected"
                onClick={
                    (ev) => {
                        ev.preventDefault()
                        onClick()
                    }
                }
            >
                {children}
            </a>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}