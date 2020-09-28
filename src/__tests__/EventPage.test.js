import React from "react";
import { render } from "@testing-library/react";
import EventPage from "../components/EventPage";

describe('EventPage component', () => {
    

    xit('it renders correctly', () => {
        const {asFragment} = render (<EventPage props={{match:{params:{eventId:1234}}}}/>)

        expect(asFragment()).toMatchSnapshot()
    })

    it('renders Participants, and AddParticipant components', () => {
        const {getByTestId} = render (<EventPage/>)

        expect(getByTestId('eventdetails')).toBeInTheDocument()
    })


})