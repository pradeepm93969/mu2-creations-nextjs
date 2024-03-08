export function formatDate(dateString) {
  const { format } = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return format(new Date(dateString));
}
