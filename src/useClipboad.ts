import { useCallback, useEffect, useState } from "react";

/**
 * Get browser's clipboard access
 *
 * @param textData The text that you want to copy
 *
 * Return an array with the first element is a `boolean`
 * that is true if the `textData` is already copied,
 * the second element is a `function` to write
 * `textData` to the user clipboard
 */
const useClipboard = (textData: string) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const readClipboard = async () => {
      try {
        const result = await navigator.clipboard.readText();
        if (result === textData) {
          setState(true);
        } else {
          setState(false);
        }
      } catch (_error) {
        setState(false);
      }
    };
    readClipboard();
  }, [textData]);

  const onCopy = useCallback(() => {
    navigator.clipboard
      .writeText(textData)
      .then(
        () => {
          setState(true);
        },
        (reason) => {
          setState(false);
          console.log("Failed to copy: ", reason);
        },
      )
      .catch((err) => {
        setState(false);
        console.log("Error to copy: ", err);
      });
  }, [textData]);

  return [state, onCopy] as const;
};

export default useClipboard;
