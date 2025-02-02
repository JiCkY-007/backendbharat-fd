import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const TRANSLATE_API = "https://libretranslate.com/translate";

const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(TRANSLATE_API, {
      q: text,
      source: "en",
      target: targetLang,
    });
    return response.data.translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    return text; // Fallback to English
  }
};

export default translateText;
