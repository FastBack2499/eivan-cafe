export function convertTextToHtml(text: string) {
  if (!text) return '';

  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const paragraphs = text.split(/\n\s*\n/).map(paragraph => {
    const escaped = escapeHtml(paragraph.trim());
    const withBreaks = escaped.replace(/\n/g, '<br />');
    return `<p>${withBreaks}</p>`;
  });

  return paragraphs.join('');
}