import React from "react";
import { render } from "@testing-library/react";
import EventPage from "../components/EventPage";

describe('EventPage component', () => {
    const mockId = 1234

    it('it renders correctly', () => {

        const {asFragment} = render (<EventPage eventId={mockId}/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders Participants, and AddParticipant components', () => {
        const {getByTestId} = render (<EventPage eventId={mockId}/>)

        expect(getByTestId('eventdetails')).toBeInTheDocument()
    })


})