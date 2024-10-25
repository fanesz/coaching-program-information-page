export const downloadFile = async (
  filePath: string,
  fileName: string
): Promise<boolean> => {
  try {
    const response = await fetch(filePath, { method: "HEAD" });
    if (!response.ok) {
      throw new Error("File not found");
    }
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error(err);
    return false;
  }

  return true;
};
