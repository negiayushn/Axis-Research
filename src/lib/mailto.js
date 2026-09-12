/* Open the visitor's email app (e.g. Gmail) with a prefilled draft.
 * A real user click on a real <a> avoids popup blockers. */
export function openMailto({ to, subject, body }) {
  const url = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const anchor = document.createElement("a")
  anchor.href = url
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
}

/* Shared repeating field styles to keep forms visually consistent. */
export const inputClass =
  "w-full bg-surface-container-low rounded-lg p-3.5 text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-colors shadow-inner"