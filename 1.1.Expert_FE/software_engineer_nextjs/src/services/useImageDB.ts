import { openDB, IDBPDatabase } from "idb";

const DB_NAME = "ImageStorage";
const STORE_NAME = "images";

export async function openImageDB(): Promise<IDBPDatabase> {
  return openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
}

/**
 * Lưu trữ hình ảnh vào IndexedDB.
 * @param key - Tên khóa lưu trong IndexedDB.
 * @param blob - Hình ảnh dưới dạng blob.
 */
export async function saveImageToDB(key: string, blob: Blob): Promise<void> {
  const db = await openImageDB();
  await db.put(STORE_NAME, blob, key);
}

/**
 * Lấy hình ảnh từ IndexedDB.
 * @param key - Tên khóa cần lấy từ IndexedDB.
 * @returns Blob | null - Hình ảnh dưới dạng blob nếu có, hoặc null nếu không tìm thấy.
 */
export async function getImageFromDB(key: string): Promise<Blob | null> {
  const db = await openImageDB();
  return db.get(STORE_NAME, key);
}

/**
 * Xóa hình ảnh từ IndexedDB.
 * @param key - Tên khóa cần xóa từ IndexedDB.
 * @returns void
 */
export async function deleteImageFromDB(key: string): Promise<void> {
  const db = await openImageDB();
  await db.delete(STORE_NAME, key);
}
