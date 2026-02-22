import Fuse, { type IFuseOptions } from 'fuse.js';
import type { ToolDefinition, ModuleId } from '@/types/tool.ts';

const defaultFuseOptions: IFuseOptions<ToolDefinition> = {
  keys: [
    { name: 'name', weight: 0.4 },
    { name: 'shortName', weight: 0.3 },
    { name: 'keywords', weight: 0.2 },
    { name: 'description', weight: 0.1 },
  ],
  threshold: 0.3,
  includeScore: true,
};

export function createSearchIndex(tools: ToolDefinition[]) {
  return new Fuse(tools, defaultFuseOptions);
}

export function searchTools(fuse: Fuse<ToolDefinition>, query: string): ToolDefinition[] {
  if (!query.trim()) return [];
  return fuse.search(query).map(r => r.item);
}

export function groupByModule(tools: ToolDefinition[]): Record<ModuleId, ToolDefinition[]> {
  return tools.reduce((acc, tool) => {
    if (!acc[tool.module]) acc[tool.module] = [];
    acc[tool.module].push(tool);
    return acc;
  }, {} as Record<ModuleId, ToolDefinition[]>);
}

export function filterByCategory(tools: ToolDefinition[], category: string): ToolDefinition[] {
  return tools.filter(t => t.category === category);
}

export function filterByModule(tools: ToolDefinition[], moduleId: ModuleId): ToolDefinition[] {
  return tools.filter(t => t.module === moduleId || t.crossModules?.includes(moduleId));
}
