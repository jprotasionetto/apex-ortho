interface Tab { id: string; label: string; }
interface TabsProps { tabs: Tab[]; activeTab: string; onChange: (id: string) => void; }
export function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex gap-1 p-1 bg-slate-800 rounded-lg border border-slate-700">
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => onChange(tab.id)}
          className={`px-4 py-2 text-sm rounded-md transition-colors ${activeTab === tab.id ? 'bg-primary-600 text-white' : 'text-slate-400 hover:text-slate-200'}`}>{tab.label}</button>
      ))}
    </div>
  );
}
