import React from "react";
import { render } from "@testing-library/react";
import AddParticipant from "../components/AddParticipant";


describe('AddParticipant component', () => {

    const mockId = 123

    it('renders correctly', () => {

        const {asFragment} = render (<AddParticipant eventId={mockId}/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders the correct form elements', () => {
        const { getByTestId } = render (<AddParticipant eventId={mockId}/>)

        expect(getByTestId('name')).toBeValid()
        expect(getByTestId('toBring')).toBeValid()
        expect(getByTestId('dislikes')).toBeValid()
        expect(getByTestId('dietInfo')).toBeValid()
        expect(getByTestId('addButton')).toBeInTheDocument()

    })
})