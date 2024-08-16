import styled from 'styled-components';

export const Follower = styled.div`
  position: fixed;
  width: 150px;
  height: 150px;
  background-color: #00a2ff5e;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity 0.5s ease;
  opacity: ${({ opacity }) => opacity};
  filter: blur(50px);
  z-index: 1; /* Coloca o seguidor no fundo, mas ainda visível */
  top: 0;
  left: 0;
`;