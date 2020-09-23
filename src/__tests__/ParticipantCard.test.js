import React from "react";
import { render, getByTestId } from "@testing-library/react";
import ParticipantCard from "../components/ParticipantCard";

describe('ParticipantCard component', () => {
    const mockDate = {
        id: 1234,
        name: 'MyName',
        toBring: 'IAmBringing',
        dislikes: 'MyDislikes',
        dietInfo: 'MyDietInfo'
    } 
    const mockRemove = jest.fn()

    it('matches the snapshot', () => {
        const {asFragment} = render (
            <ParticipantCard
                id={mockDate.id}
                name={mockDate.name}
                toBring={mockDate.toBring}
                dislikes={mockDate.dislikes}
                dietInfo={mockDate.dietInfo}
                removeParticipant={mockRemove} />)

        expect(asFragment()).toMatchSnapshot()
    })

    it('gets all elements', () => {
        const {getByTestId} = render (
            <ParticipantCard
                id={mockDate.id}
                name={mockDate.name}
                toBring={mockDate.toBring}
                dislikes={mockDate.dislikes}
                dietInfo={mockDate.dietInfo}
                removeParticipant={mockRemove} />)

        expect(getByTestId('name')).toHaveClass('participantName')
        expect(getByTestId('toBring')).toHaveClass('participantBrings')
        expect(getByTestId('dislikes')).toHaveClass('participantDislikes')
        expect(getByTestId('dietInfo')).toHaveClass('participantDietInfo')
        expect(getByTestId('removeButton')).toBeInTheDocument()

    })



})