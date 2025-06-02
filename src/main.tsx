import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer
  position="top-right"
  autoClose={4000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  limit={5}
  toastStyle={{
    background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
    backdropFilter: 'blur(16px)',
    color: '#e5e7eb',
    borderRadius: '16px',
    border: '1px solid rgba(139, 92, 246, 0.2)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(139, 92, 246, 0.1)',
    fontWeight: 500,
    fontSize: '0.95rem',
    lineHeight: '1.5',
    fontFamily: '"Inter", "Segoe UI", Roboto, sans-serif',
    minHeight: '60px',
    padding: '16px 20px',
  }}
  style={{
    width: '400px',
    maxWidth: '90vw',
  }}
  toastClassName="modern-toast"
  progressClassName="modern-toast-progress"      
/>

{/* Custom CSS styles for additional customization */}
<style>{`
  .modern-toast {
    animation: slideInRight 0.3s ease-out;
    transform-origin: right;
  }
  
  .modern-toast:hover {
    transform: translateX(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 6px 20px rgba(139, 92, 246, 0.15) !important;
    transition: all 0.2s ease-out;
  }
  
  .modern-toast-body {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  .modern-toast-progress {
    background: linear-gradient(90deg, #8b5cf6 0%, #a855f7 50%, #c084fc 100%) !important;
    box-shadow: 0 2px 8px rgba(139, 92, 246, 0.3);
  }
  
  .modern-toast-close {
    transition: all 0.2s ease;
  }
  
  .modern-toast-close:hover {
    color: #f3f4f6 !important;
    opacity: 1 !important;
    transform: scale(1.1);
  }
  
  /* Success toast variant */
  .Toastify__toast--success {
    background: linear-gradient(135deg, #0a2f1f 0%, #1a3d2e 50%, #2d5a3d 100%) !important;
    border: 1px solid rgba(34, 197, 94, 0.2) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(34, 197, 94, 0.1) !important;
  }
  
  .Toastify__toast--success .Toastify__progress-bar {
    background: linear-gradient(90deg, #10b981 0%, #22c55e 50%, #34d399 100%) !important;
  }
  
  /* Error toast variant */
  .Toastify__toast--error {
    background: linear-gradient(135deg, #2f0a0a 0%, #3d1a1a 50%, #5a2d2d 100%) !important;
    border: 1px solid rgba(239, 68, 68, 0.2) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(239, 68, 68, 0.1) !important;
  }
  
  .Toastify__toast--error .Toastify__progress-bar {
    background: linear-gradient(90deg, #ef4444 0%, #f87171 50%, #fca5a5 100%) !important;
  }
  
  /* Warning toast variant */
  .Toastify__toast--warning {
    background: linear-gradient(135deg, #2f1f0a 0%, #3d2e1a 50%, #5a452d 100%) !important;
    border: 1px solid rgba(245, 158, 11, 0.2) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(245, 158, 11, 0.1) !important;
  }
  
  .Toastify__toast--warning .Toastify__progress-bar {
    background: linear-gradient(90deg, #f59e0b 0%, #fbbf24 50%, #fcd34d 100%) !important;
  }
  
  /* Info toast variant */
  .Toastify__toast--info {
    background: linear-gradient(135deg, #0a1f2f 0%, #1a2e3d 50%, #2d3d5a 100%) !important;
    border: 1px solid rgba(59, 130, 246, 0.2) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(59, 130, 246, 0.1) !important;
  }
  
  .Toastify__toast--info .Toastify__progress-bar {
    background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%) !important;
  }
  
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  /* Dark scrollbar for toast container */
  .Toastify__toast-container::-webkit-scrollbar {
    width: 6px;
  }
  
  .Toastify__toast-container::-webkit-scrollbar-track {
    background: rgba(17, 24, 39, 0.5);
    border-radius: 3px;
  }
  
  .Toastify__toast-container::-webkit-scrollbar-thumb {
    background: rgba(139, 92, 246, 0.6);
    border-radius: 3px;
  }
  
  .Toastify__toast-container::-webkit-scrollbar-thumb:hover {
    background: rgba(139, 92, 246, 0.8);
  }
`}</style>
    <App />
  </StrictMode>,
)
