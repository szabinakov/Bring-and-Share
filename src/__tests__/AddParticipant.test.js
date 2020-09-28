import React from "react";
import { render, fireEvent} from "@testing-library/react";
import AddParticipant from "../components/AddParticipant";



describe("AddParticipant component", () => {
  const mockId = 123;

  it("renders correctly", () => {
    const { asFragment } = render(<AddParticipant eventId={mockId} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the button element to be able to add participants", () => {
    const { getByTestId } = render(<AddParticipant eventId={mockId}/>);

    expect(getByTestId("addParticipantNavButton")).toBeInTheDocument();

  });

  it('renders the addparticipant form with the correct inputs when the button has been pressed', () => {
      const {getByTestId}=render(<AddParticipant eventId={mockId}/>)
      
      fireEvent.click(getByTestId('addParticipantNavButton'))

      expect(getByTestId('name')).toBeValid()
      expect(getByTestId('toBring')).toBeValid()
      expect(getByTestId('dislikes')).toBeValid()
      expect(getByTestId('dietInfo')).toBeValid()
      expect(getByTestId('participantEmail')).toBeValid()
      expect(getByTestId('addParticipantForm')).toBeInTheDocument()
  })
});
