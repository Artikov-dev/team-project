/**
 * Utility function to conditionally join classNames
 * @param {...any} classes - Classes to join
 * @returns {string} - Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
