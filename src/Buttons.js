import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`;
const ThreeDButton = styled.button`
  --b: 1px; /* border thickness */
  --s: 0.45em; /* size of the corner */
  --color: #ffffff;

  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
    cursor: pointer;
  }

  &:active {
    background: var(--color);
    color: #fff;
  }
`;

export default function Button(props) {
  return (
    <ButtonContainer>
      <ThreeDButton className="change-perspective-button" data-perspective="">
        View {props.view}
      </ThreeDButton>
    </ButtonContainer>
  );
}
