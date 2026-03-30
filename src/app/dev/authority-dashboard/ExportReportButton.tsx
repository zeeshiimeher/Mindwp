'use client';

/**
 * ExportReportButton
 *
 * Client component for downloading report data as JSON.
 * Receives pre-serialized report from server component.
 */

interface ExportReportButtonProps {
  reportJson: string;
}

export function ExportReportButton({ reportJson }: ExportReportButtonProps) {
  function handleExport() {
    const blob = new Blob([reportJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `content-intelligence-report-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button
      onClick={handleExport}
      style={{
        padding: '0.5rem 1.25rem',
        background: '#2563eb',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: '0.875rem',
        fontWeight: 600,
      }}
    >
      Export Report (JSON)
    </button>
  );
}
