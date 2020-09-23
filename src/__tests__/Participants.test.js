import React from "react";
import { render } from "@testing-library/react";
import Participants from "../components/Participants";

describe('Partcipants components', () =>{
    const mockId = 123

    it('matches the snapshot', () => {
        const {asFragment} = render (<Participants eventId={mockId}/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('returns the right elements', () => {
        const {getByTestId} = render (<Participants eventId={mockId}/>)

        expect(getByTestId('participants')).toBeInTheDocument()
    })
})