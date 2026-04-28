// Chart.js radar chart wrapper with accessible table alternative.
// Chart.js is loaded via CDN and available as window.Chart.

/**
 * Render a radar chart onto the given canvas element.
 * Destroys any existing chart on that canvas before rendering.
 *
 * @param {HTMLCanvasElement} canvas
 * @param {Array}  dimensions  - dimension objects with id, shortLabel, color
 * @param {Object} dimScores   - { dimensionId: { score, level, insufficientData } }
 * @returns {Chart} the Chart.js instance
 */
export function renderRadarChart(canvas, dimensions, dimScores) {
  // Destroy existing chart to avoid memory leaks on re-render
  const existing = Chart.getChart(canvas);
  if (existing) existing.destroy();

  const labels = dimensions.map(d => d.shortLabel);
  const scores = dimensions.map(d => {
    const r = dimScores[d.id];
    return r?.score ?? 0;
  });

  // Use a single accent colour for all dimensions with a light fill
  const PRIMARY = '#0065BD';

  return new Chart(canvas, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: 'Maturity score',
        data: scores,
        fill: true,
        backgroundColor: 'rgba(0, 101, 189, 0.12)',
        borderColor: PRIMARY,
        pointBackgroundColor: PRIMARY,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: PRIMARY,
        borderWidth: 2,
        pointRadius: 5,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            // Show level labels: 1=Initial … 5=Optimised
            callback: (value) => value === 0 ? '' : String(value),
            font: { size: 11 },
            color: '#6B7280',
          },
          grid: { color: '#E5E7EB' },
          angleLines: { color: '#E5E7EB' },
          pointLabels: {
            font: { size: 12, weight: '500' },
            color: '#374151',
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` Score: ${ctx.raw.toFixed(1)} / 5`,
          },
        },
      },
    },
  });
}

/**
 * Build an accessible HTML table containing the same data as the radar chart.
 * This satisfies WCAG 2.2 AA — non-text content has a text alternative.
 *
 * @param {Array}  dimensions
 * @param {Object} dimScores
 * @param {Object} maturityLevels - { levels: [{level, label}] }
 * @returns {string} HTML string
 */
export function buildAccessibleTable(dimensions, dimScores, maturityLevels) {
  const levelLabels = Object.fromEntries(
    (maturityLevels.levels ?? []).map(l => [l.level, l.label])
  );

  const rows = dimensions.map(dim => {
    const result = dimScores[dim.id] ?? {};
    const score  = result.score  != null ? result.score.toFixed(1) : '—';
    const level  = result.level  != null ? result.level : '—';
    const label  = levelLabels[result.level] ?? '—';
    const flag   = result.insufficientData ? ' (insufficient data)' : '';
    return `
      <tr>
        <td>${escapeHtml(dim.label)}</td>
        <td>${score}</td>
        <td>${level}</td>
        <td>${escapeHtml(label)}${flag}</td>
      </tr>`;
  }).join('');

  return `
    <table class="accessible-scores-table" aria-label="Maturity scores by dimension">
      <caption class="sr-only">Radar chart data: maturity scores by dimension</caption>
      <thead>
        <tr>
          <th scope="col">Dimension</th>
          <th scope="col">Score (0–5)</th>
          <th scope="col">Level</th>
          <th scope="col">Maturity band</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
