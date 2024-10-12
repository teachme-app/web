import styled from 'styled-components'

export const ChatContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`

export const Profile = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
  border-left: 3px solid ${({ active }) => (active ? '#7159c1' : 'transparent')};
  background-color: ${({ active }) => (active ? '#ff9741' : 'white')};
`

export const ProfileImg = styled.div`
  margin-right: 10px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    /* Torna a imagem circular */
    object-fit: cover;
  }
`

export const Info = styled.div`
  flex-grow: 1;
`

export const Name = styled.h3`
  font-weight: bold;
`

export const LastMessage = styled.p`
  font-size: 0.85em;
  color: gray;
`

export const Time = styled.span`
  font-size: 0.75em;
  color: gray;
  white-space: nowrap;
`

export const Sidebar = styled.div`
  width: 250px;
  background-color: #f3f2f1;
  padding: 10px;
  border-right: 1px solid #ddd;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }
`

export const ChatContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: white;
`

export const Messages = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: #f3f2f1;
`

export const MessageSent = styled.div`
  background-color: #ff9741;
  color: white;
  margin-left: auto;
  text-align: left;
`

export const MessageReceived = styled.div`
  background-color: #e1dfdd;
  color: #333;
`

export const MessageTimestamp = styled.span`
  font-size: 12px;
  opacity: 0.7;
  margin-top: 5px;
  text-align: right;
`

export const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  background-color: white;
  border-top: 1px solid #ddd;
`

export const SendButton = styled.button`
  padding: 10px 20px;
  background-color: #ff9741;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;

  :hover {
    background-color: #ff9741;
  }
`

export const InputMessage = styled.input`
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`
