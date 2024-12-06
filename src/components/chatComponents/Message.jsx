import ReactMarkdown from 'react-markdown';

export const Message = ({ id, message, who, created_at }) => {
  return (
    <div className={`
      p-[16px_24px]
      ${who === 'user' ? 'p-[16px_24px]' : 'p-[16px_24px]'}
      rounded-lg
      mb-3
      border-[0.5px]
      ${who === 'user' ? 'border-[#808080]' : 'border-none'}
      ${who === 'user' ? 'ml-auto w-[90%]' : 'mr-auto w-full'} 
      ${who === 'user' ? 'bg-white dark:bg-[#272727]' : 'bg-none'}
      text-gray-600 dark:text-gray-300
    `}>
      <ReactMarkdown>{message}</ReactMarkdown>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {new Date(created_at).toLocaleString()}
      </span>
    </div>
  );
}

export default Message;