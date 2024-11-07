import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../redux/features/code-modal/codeModalSlice';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Modal() {

  const dispatch = useDispatch();

  const { isOpen, code } = useSelector((state) => state.codeModal);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white dark:bg-[#111] rounded-md w-[95vw] max-w-lg mx-2 sm:mx-6 md:mx-auto min-h-[300px] h-auto">
    <button
      onClick={() => dispatch(closeModal())}
      className="flex items-end justify-end w-full"
    >
      Close
    </button>
    <h2 className="text-lg font-bold mb-4">Component Code</h2>
    
    {/* Code section with scrollable content */}
    <pre className="bg-gray-100 dark:bg-gray-900 rounded-md text-[8px] md:text-xs text-left min-h-[20vh] max-h-[60vh] overflow-y-auto scrollbar-custom">
      <SyntaxHighlighter language="javascript" style={dracula} showInlineNumbers>
        {code}
      </SyntaxHighlighter>
    </pre>
  </div>
</div>



  )
}

export default Modal