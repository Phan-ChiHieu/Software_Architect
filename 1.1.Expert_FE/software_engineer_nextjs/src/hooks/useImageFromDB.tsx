import { useEffect, useState } from "react";
import { getImageFromDB, saveImageToDB, deleteImageFromDB } from "@/services/useImageDB";

// Hook này giúp tải ảnh từ IndexedDB, nếu không có thì tải ảnh mới
export default function useImageFromDB(
  imageKey: string,
  newImageSrc: string,
  versionKey: string,
  currentVersion: string | null,
  newVersion: string
) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // const handleImage = async (): Promise<void> => {
    //   const cachedImageVersion = await localStorage.getItem(versionKey);

    //   // Kiểm tra nếu phiên bản ảnh đã thay đổi và có ảnh trong IndexedDB
    //   if (cachedImageVersion === currentVersion) {
    //     // Nếu phiên bản ảnh là "v2", hiển thị ảnh mới từ IndexedDB
    //     const cachedImage = await getImageFromDB(imageKey);
    //     if (cachedImage) {
    //       setImageSrc(URL.createObjectURL(cachedImage));
    //       setLoading(false);
    //     }
    //   } else {
    //     // Nếu ảnh chưa được cập nhật, tải ảnh mới và lưu vào IndexedDB
    //     try {
    //       const response = await fetch(newImageSrc);
    //       const blob = await response.blob();

    //       // Lưu ảnh mới vào IndexedDB
    //       await saveImageToDB(imageKey, blob);

    //       // Cập nhật phiên bản ảnh trong LocalStorage
    //       await localStorage.setItem(versionKey, currentVersion);

    //       // Hiển thị ảnh mới
    //       setImageSrc(URL.createObjectURL(blob));
    //     } catch (error) {
    //       console.error("Error fetching image:", error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   }
    // };

    const handleImage = async (): Promise<void> => {
      const versionedKeyNew = `${imageKey}-${newVersion}`; // Kết hợp key với version
      const curVersion = `${imageKey}-${currentVersion}`;

      // Kiểm tra nếu đã có ảnh trong IndexedDB với key tương ứng
      const cachedImage = await getImageFromDB(versionedKeyNew);
      if (cachedImage) {
        // Hiển thị ảnh từ IndexedDB
        setImageSrc(URL.createObjectURL(cachedImage));
        setLoading(false);
        if (currentVersion) {
          const deleteImgCache = await deleteImageFromDB(curVersion);
          console.log("Hình ảnh đã được xóa thành công", deleteImgCache);
        }
      } else {
        // Nếu không có ảnh, tải ảnh mới và lưu vào IndexedDB
        try {
          const response = await fetch(newImageSrc);
          const blob = await response.blob();

          // Lưu ảnh mới vào IndexedDB với versionedKey
          await saveImageToDB(versionedKeyNew, blob);

          // Hiển thị ảnh mới
          setImageSrc(URL.createObjectURL(blob));
        } catch (error) {
          console.error("Error fetching image:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    handleImage();
  }, [imageKey, newImageSrc, versionKey, currentVersion, newVersion]);

  return { imageSrc, loading };
}
