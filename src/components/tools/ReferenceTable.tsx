import { useState, useMemo } from 'react';

interface ReferenceTableColumn {
  key: string;
  label: string;
  width?: string;
}

interface ReferenceTableProps {
  title: string;
  columns: ReferenceTableColumn[];
  rows: Record<string, string | number>[];
  searchable?: boolean;
  highlightColumn?: string;
}

export function ReferenceTable({
  title,
  columns,
  rows,
  searchable = false,
  highlightColumn,
}: ReferenceTableProps) {
  const [search, setSearch] = useState('');

  const filteredRows = useMemo(() => {
    if (!search.trim()) return rows;
    const term = search.toLowerCase();
    return rows.filter((row) =>
      columns.some((col) => {
        const val = row[col.key];
        return val !== undefined && String(val).toLowerCase().includes(term);
      }),
    );
  }, [rows, columns, search]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>

      {/* Search input */}
      {searchable && (
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filtrar..."
            className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-3 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-primary-500 focus:outline-none transition-colors"
          />
        </div>
      )}

      {/* Scrollable table wrapper */}
      <div className="overflow-x-auto rounded-xl border border-slate-700">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-800">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 text-left font-medium text-slate-300 whitespace-nowrap ${
                    col.key === highlightColumn ? 'text-primary-400' : ''
                  }`}
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                className={`border-t border-slate-700/50 ${
                  rowIdx % 2 === 1 ? 'bg-slate-800/50' : ''
                } hover:bg-slate-700/30 transition-colors`}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-3 text-slate-300 whitespace-nowrap ${
                      col.key === highlightColumn ? 'text-primary-300 font-medium' : ''
                    }`}
                  >
                    {row[col.key] ?? '—'}
                  </td>
                ))}
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-slate-500">
                  Nenhum resultado encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Row count */}
      {searchable && search.trim() && (
        <p className="text-xs text-slate-500">
          {filteredRows.length} de {rows.length} registro{rows.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}
