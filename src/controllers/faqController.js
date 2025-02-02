import FAQ from "../models/faqModel.js";
import redisClient from "../config/redis.js";
import translateText from "../services/translationService.js";

export const createFAQ = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const faq = new FAQ({ question, answer, translations: {} });

    const languages = ["hi", "bn", "es"]; // Add more languages
    for (let lang of languages) {
      faq.translations.set(lang, await translateText(question, lang));
    }

    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getFAQs = async (req, res) => {
  try {
    const { lang } = req.query;
    let faqs = await FAQ.find();

    if (lang) {
      faqs = faqs.map((faq) => ({
        question: faq.translations.get(lang) || faq.question,
        answer: faq.answer,
      }));

      await redisClient.setEx(`faq:${lang}`, 3600, JSON.stringify(faqs));
    }

    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
