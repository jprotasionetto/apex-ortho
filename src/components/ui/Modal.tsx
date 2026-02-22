import { useEffect, useCallback } from 'react';
interface ModalProps { open: boolean; onClose: () => void; children: React.ReactNode; title?: string; }
export function Modal({ open, onClose, children, title }: ModalProps) {
  const handleEsc = useCallback((e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); }, [onClose]);
  useEffect(() => { if (open) { document.addEventListener('keydown', handleEsc); return () => document.removeEventListener('keydown', handleEsc); } }, [open, handleEsc]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[10vh]" onClick={onClose}>
      <div className="fixed inset-0 bg-black/60" />
      <div className="relative bg-slate-800 border border-slate-700 rounded-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-y-auto animate-slide-up" onClick={(e) => e.stopPropagation()}>
        {title && <div className="flex items-center justify-between p-4 border-b border-slate-700"><h2 className="text-lg font-semibold text-slate-100">{title}</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button></div>}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}
