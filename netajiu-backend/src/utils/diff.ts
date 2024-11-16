export function generateChangeSummary(
  oldContent: string,
  newContent: string,
): object {
  // This is a simple implementation - you could use libraries like diff for more sophisticated diff generation
  if (!oldContent) return { message: "Initial version" };

  if (!newContent) return { message: "No Changes" };
  const words1 = oldContent.split(" ");
  const words2 = newContent.split(" ");
  const added = words2.filter((word) => !words1.includes(word));
  const removed = words1.filter((word) => !words2.includes(word));

  let changes = { added: "", removed: "" };
  if (added.length) changes.added = added.join(" ");
  if (removed.length) changes.removed = removed.join(" ");

  return changes;
}
