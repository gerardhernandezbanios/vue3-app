// simple wrapper fetch; en producción sustituir por axios o ky y manejo de errores
export async function apiGet(path: string, token?: string) {
  const res = await fetch(`/api${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
