import * as React from 'react'
import { connect, Dispatch } from 'react-redux'
import { setFilter, SetFilter } from '../actions'
import StoreState from '../../StoreTypes'

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

const mapStateToProps = (state: StoreState, ownProps: {filter: string}) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = () => (dispatch: Dispatch<SetFilter>, ownProps: {filter: string}) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter));
      }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link);
