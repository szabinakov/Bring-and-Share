import React from "react";
import { render } from "@testing-library/react";
import CreateEvent from "../components/CreateEvent";

describe('CreateEvent component', () => {

    it('renders correctly', () =>{

        const {asFragment} = render (<CreateEvent/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders the correct form', () => {
        const { getByTestId } = render (<CreateEvent/>)

        expect(getByTestId('eventName')).toBeValid()
        expect(getByTestId('hostName')).toBeValid()
        expect(getByTestId('date')).toBeValid()
        expect(getByTestId('time')).toBeValid()
        expect(getByTestId('address')).toBeValid()
        expect(getByTestId('eventName')).toBeInTheDocument()
    })
})