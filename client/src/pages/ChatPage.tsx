import React, { useState, useEffect, useRef } from 'react';
import './ChatPage.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  senderName?: string;
  timestamp: string;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hey! I saw you were looking for someone to chat with. What's on your mind?",
    sender: 'other',
    senderName: 'Anon 1',
    timestamp: '10:42 AM'
  },
  {
    id: 2,
    text: "Just exploring this new app. The design is pretty slick now.",
    sender: 'user',
    senderName: 'Me',
    timestamp: '10:43 AM'
  },
  {
    id: 3,
    text: "Right? I really like the minimal aesthetic. Feels very sturdy.",
    sender: 'other',
    senderName: 'Anon 1',
    timestamp: '10:44 AM'
  },
  {
    id: 4,
    text: "Exactly. No more layout glitches!",
    sender: 'user',
    senderName: 'Me',
    timestamp: '10:45 AM'
  }
];

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      senderName: 'Me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const replyMessage: Message = {
        id: Date.now() + 1,
        text: "That's interesting! Tell me more.",
        sender: 'other',
        senderName: 'Anon 1',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  return (
    <div className="chat-layout">
      {/* Sidebar Area */}
      <aside className="chat-sidebar">
        <div className="sidebar-header">
          <h1>NAVBAR</h1>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-item active">Chats</div>
          <div className="nav-item">Contacts</div>
          <div className="nav-item">Settings</div>
        </nav>
      </aside>
      
      {/* Main Chat Area */}
      <main className="chat-main">
        <header className="chat-header">
          <div className="header-info">
            <h2>Anon 1</h2>
            <span className="status">Online</span>
          </div>
          <div className="header-actions">
            <button className="icon-btn">⋮</button>
          </div>
        </header>
        
        <div className="messages-container">
          <div className="date-divider">Today</div>
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`message-wrapper ${msg.sender}`}
            >
              {msg.sender === 'other' && (
                <div className="avatar-small">{msg.senderName?.charAt(0)}</div>
              )}
              <div className="message-content">
                <div className="bubble">
                  {msg.text}
                </div>
                <div className="message-meta">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-area">
          <form className="input-container" onSubmit={handleSendMessage}>
            <input 
              type="text" 
              className="message-input" 
              placeholder="Type a message..." 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="send-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
