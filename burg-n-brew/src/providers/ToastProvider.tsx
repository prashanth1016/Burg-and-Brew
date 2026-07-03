'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green" />,
    error: <AlertCircle className="w-5 h-5 text-tomato" />,
    info: <Info className="w-5 h-5 text-mustard" />,
  };

  const bgColors = {
    success: 'bg-green/10 border-green/20',
    error: 'bg-tomato/10 border-tomato/20',
    info: 'bg-mustard/10 border-mustard/20',
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast Container */}
      <div className="fixed top-4 right-4 z-[var(--z-toast)] flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl border shadow-lg animate-slide-up ${bgColors[toast.type]} bg-cream`}
          >
            {icons[toast.type]}
            <p className="text-sm font-medium text-charcoal">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-2 p-1 rounded-full hover:bg-charcoal/10 transition-colors"
            >
              <X className="w-4 h-4 text-charcoal/50" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
