import * as React from 'react'
import * as enzyme from 'enzyme'
import Hello from './Hello'

it('renders ths correct text when no enthusiasm level is given', () => {
    const hello = enzyme.shallow(<Hello name="Daniel"/>)
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
})

it('renders ths correct text with an explicit enthusiasm of 1', () => {
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1}/>)
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
})

it('throws when the enthusiasm level is 0', () => {
    expect(() => {
        enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={0}/>)
    }).toThrow()
})