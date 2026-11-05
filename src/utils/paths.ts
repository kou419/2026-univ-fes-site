/** GitHub Pagesのサブパスも考慮して内部リンク・public画像のURLを作る。 */
export function withBase(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\/+/, '')}`;
}

export function imageUrl(src: string) {
  return /^https?:\/\//.test(src) ? src : withBase(src);
}
