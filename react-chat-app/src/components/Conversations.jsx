import React from "react";
import { ListGroup } from "react-bootstrap";
import { useConversations } from "../context/ConversationsProvider";

export default function Conversations() {

  const { conversations, selectConversationIndex } = useConversations();
  return (
    <ListGroup variant="flush">
      {
        conversations.map((convo, index) => (
          <ListGroup.Item key={index} action onClick={() => selectConversationIndex(index)}active={conversations.selected}>
          {convo.recipients.map(r => r.name).join(', ')}
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}