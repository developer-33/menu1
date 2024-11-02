import  { useState } from'react';
import { FaPaperPlane } from'react-icons/fa';

function Messenger() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    setMessages([...messages, { text: newMessage, sender: 'You' }]);
    setNewMessage('');
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="p-4 bg-white shadow-md">
        <h2 className="text-lg font-bold mb-4">Conversation</h2>
        <ul className="space-y-2">
          {messages.map((message, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-gray-600">{message.sender}</span>
              <span className="text-gray-900">{message.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 bg-gray-100">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full p-2 pl-10 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-4 top-4 text-lg text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}

export default Messenger;