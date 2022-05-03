import { Avatar, Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";

function Sidebar() {
  const createNewChat = () => {
    const input = prompt(
      "Please enter an email address of a user you want to chat with"
    );

    if (!input) return;

    if (EmailValidator.validate(input)) {
    }
  };

  return (
    <Container>
      <Header>
        <UsrAvatar />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <SearchContainer>
        <SearchIcon />
        <SearchInput placeholder="Search inside chats" />
      </SearchContainer>

      <SidebarButton onClick={createNewChat}>New Chat!</SidebarButton>

      {/* List of User Chats */}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UsrAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;