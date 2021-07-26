import styled from "styled-components";

export const MessageContainer = styled.View`
  background-color: white;
  margin: 7px 11px;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 10px;
  padding: 7px 11px;
`;
export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;
export const MainContainer = styled.View`
  justify-content: space-between;
  width: 46%;
  margin: 0 0 0 15px;
`;
export const MessageTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #222222;
`;
export const UserName = styled.Text`
  font-size: 17px;
  color: #4f5153;
  text-align: left;
`;
export const MessageReplies = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #222222;
`;
export const ImageHeart = styled.Image`
  width: 25px;
  height: 25px;
  color: ${props => props.color};
`;
export const Date = styled.Text`
  color: #6e7f8d;
  font-size: 16px;
`;
