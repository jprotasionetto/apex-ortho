export interface ExportData {
  toolName: string;
  score?: number;
  maxScore?: number;
  interpretation?: string;
  details?: Record<string, string | number>;
  date: string;
}

export function formatExportText(data: ExportData): string {
  const lines: string[] = [
    `APEX Ortho - ${data.toolName}`,
    `Data: ${new Date(data.date).toLocaleDateString('pt-BR')}`,
    `Hora: ${new Date(data.date).toLocaleTimeString('pt-BR')}`,
    '',
  ];

  if (data.score !== undefined && data.maxScore !== undefined) {
    lines.push(`Score: ${data.score} / ${data.maxScore}`);
  }

  if (data.interpretation) {
    lines.push(`Interpretação: ${data.interpretation}`);
  }

  if (data.details) {
    lines.push('', '--- Detalhes ---');
    Object.entries(data.details).forEach(([key, value]) => {
      lines.push(`${key}: ${value}`);
    });
  }

  lines.push('', '⚠️ Ferramenta de apoio clínico. Não substitui o julgamento profissional.');
  lines.push('Gerado por APEX Ortho - ortho.apexhealthia.com');

  return lines.join('\n');
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      return true;
    } catch {
      return false;
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

export async function exportAsImage(elementId: string): Promise<Blob | null> {
  try {
    const element = document.getElementById(elementId);
    if (!element) return null;

    // Dynamic import html2canvas (optional dependency)
    const mod = await import(/* @vite-ignore */ 'html2canvas');
    const html2canvas = mod.default || mod;
    const canvas = await html2canvas(element, {
      backgroundColor: '#0F172A',
      scale: 2,
    });

    return new Promise<Blob | null>((resolve) => {
      canvas.toBlob((blob: Blob | null) => resolve(blob), 'image/png');
    });
  } catch {
    // html2canvas not available - return null
    return null;
  }
}

export function shareResult(data: ExportData): void {
  const text = formatExportText(data);

  if (navigator.share) {
    navigator.share({
      title: `APEX Ortho - ${data.toolName}`,
      text,
    }).catch(() => {
      // User cancelled or share failed - fallback to clipboard
      copyToClipboard(text);
    });
  } else {
    copyToClipboard(text);
  }
}
