import redisClient from "../config/redis.js";

const cacheMiddleware = async (req, res, next) => {
  const { lang } = req.query;
  if (!lang) return next();

  const cachedData = await redisClient.get(`faq:${lang}`);
  if (cachedData) {
    return res.status(200).json(JSON.parse(cachedData));
  }
  next();
};

export default cacheMiddleware;
