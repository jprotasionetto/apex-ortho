import { useMemo, useState } from 'react';
import Fuse, { type IFuseOptions } from 'fuse.js';
import type { ToolDefinition } from '@/types/tool.ts';

const fuseOptions: IFuseOptions<ToolDefinition> = {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'shortName', weight: 0.3 },
    { name: 'keywords', weight: 0.2 },
    { name: 'description', weight: 0.1 },
  ],
  threshold: 0.3,
  includeScore: true,
};

export function useSearch(tools: ToolDefinition[]) {
  const [query, setQuery] = useState('');
  const fuse = useMemo(() => new Fuse(tools, fuseOptions), [tools]);
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return fuse.search(query).map((r) => r.item);
  }, [fuse, query]);
  return { query, setQuery, results };
}
