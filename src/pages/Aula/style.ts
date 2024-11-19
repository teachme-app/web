import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px;
`

export const MainContent = styled.div`
  flex: 3;
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  height: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    object-fit: cover;
    background-color: #ddd;
  }
`

export const Rating = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  input {
    display: none;
  }
  label {
    font-size: 30px;
    color: #ccc;
    cursor: pointer;
  }
  input:checked ~ label,
  label:hover,
  label:hover ~ label {
    color: #f79832;
  }
`

export const Description = styled.div`
  margin-top: 15px;
  color: #666;
`

export const Sidebar = styled.div`
  flex: 1;
  min-width: 200px;
`

export const SidebarItem = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
    object-fit: cover;
  }
  h3 {
    margin: 0;
    font-size: 16px;
  }
  p {
    margin: 5px 0;
    font-size: 12px;
    color: #666;
  }
`
