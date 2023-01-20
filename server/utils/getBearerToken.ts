export const getBearerToken = (req): string | null => (
  req.headers?.authorization?.split(' ')?.[1] || null
);