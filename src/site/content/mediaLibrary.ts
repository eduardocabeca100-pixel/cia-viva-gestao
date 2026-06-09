export type VivaMediaItem = {
  id: string;
  name: string;
  src: string;
  createdAt: string;
};

export const VIVA_MEDIA_STORAGE_KEY = "cia-viva-media-library-v1";

export function getMediaLibrary(): VivaMediaItem[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = window.localStorage.getItem(VIVA_MEDIA_STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function saveMediaLibrary(items: VivaMediaItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(VIVA_MEDIA_STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event("cia-viva-media-updated"));
}

export function addMediaItem(file: File): Promise<VivaMediaItem> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const item: VivaMediaItem = {
        id: crypto.randomUUID(),
        name: file.name,
        src: String(reader.result),
        createdAt: new Date().toISOString(),
      };

      const current = getMediaLibrary();
      saveMediaLibrary([item, ...current]);

      resolve(item);
    };

    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

export function removeMediaItem(id: string) {
  const current = getMediaLibrary();
  saveMediaLibrary(current.filter((item) => item.id !== id));
}
