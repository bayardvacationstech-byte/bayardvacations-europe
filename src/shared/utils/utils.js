import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Splits a string of locations/cities by hyphens and returns an array
 * @param {string} str - String containing cities separated by hyphens
 * @returns {string[]} Array of trimmed city names
 */
export const splitCityStr = (str) => {
  // Split by both hyphen types (regular hyphen and en dash) with optional spaces around them
  return str
    .split(/\s*[-–]\s*/)
    .map((place) => place.trim())
    .filter(Boolean);
};

/**
 * Parses FAQ content with questions in <strong> tags and answers in normal text
 * @param {string} content - The FAQ content in HTML format
 * @returns {Array<{question: string, answer: string}>} Array of question-answer pairs
 */
export function parseFaqContent(content) {
  try {
    // Return empty array for null/undefined/empty content
    if (!content || typeof content !== "string") {
      return [];
    }

    const faqArray = [];

    // Find all questions and their positions
    const questionRegex = /<p><strong>([^<]+)<\/strong><\/p>/g;
    let match;
    let lastIndex = 0;
    let currentQuestion = null;

    while ((match = questionRegex.exec(content)) !== null) {
      // If we already have a question, save the previous QA pair
      if (currentQuestion) {
        // Get the answer content (everything between this question and the last one)
        const answerContent = content.substring(lastIndex, match.index).trim();
        if (answerContent) {
          faqArray.push({
            question: currentQuestion,
            answer: cleanupAnswer(answerContent),
          });
        }
      }

      // Save the current question
      currentQuestion = match[1].trim();
      lastIndex = match.index + match[0].length;
    }

    // Don't forget to add the last QA pair
    if (currentQuestion) {
      const finalAnswer = content.substring(lastIndex).trim();
      if (finalAnswer) {
        faqArray.push({
          question: currentQuestion,
          answer: cleanupAnswer(finalAnswer),
        });
      }
    }

    return faqArray;
  } catch (error) {
    return [];
  }
}

/**
 * Cleans up the answer HTML content
 * @param {string} answer - Raw answer HTML content
 * @returns {string} Cleaned up answer HTML
 */
function cleanupAnswer(answer) {
  if (!answer) return "No answer provided";

  let cleaned = answer;

  // Remove leading <p> if it exists
  if (cleaned.startsWith("<p>")) {
    cleaned = cleaned.substring(3);
  }

  // Remove trailing </p> if it exists
  if (cleaned.endsWith("</p>")) {
    cleaned = cleaned.substring(0, cleaned.length - 4);
  }

  return cleaned || "No answer provided";
}

// Deprecation soon
export const convertAndSortHotels = (hotelCharges, old = true) => {
  // Define the desired order
  const desiredOrder = ["twostar", "threestar", "fourstar", "fivestar"];

  // Convert to array and filter out baseCategory
  const hotelArray = Object.entries(hotelCharges)
    .filter(([type]) => type !== "baseCategory")
    .map(([type, details]) => ({
      type,
      ...details,
    }));

  const result = {
    [!old ? "hotelCharges" : "hotelDetails"]: hotelArray.sort((a, b) => {
      const indexA = desiredOrder.indexOf(a.type);
      const indexB = desiredOrder.indexOf(b.type);
      return indexA - indexB;
    }),
    baseCategory: hotelCharges.baseCategory || null,
  };

  return result;
};

export const formatFirebaseTimestamp = (timestamp) => {
  if (!timestamp) return null;
  const date = timestamp?.toDate ? timestamp.toDate() : new Date(timestamp);
  return date;
};

/**
 * Normalizes an image URL by fixing common typos like 'ttps://' instead of 'https://'
 * or 'ttp://' instead of 'http://'.
 * @param {string} url - The URL to normalize
 * @returns {string} The normalized URL
 */
export const normalizeImageUrl = (url) => {
  if (!url || typeof url !== "string") return url;
  
  // Fix common typos at the start of the URL
  if (url.startsWith("ttps://")) {
    url = url.replace("ttps://", "https://");
  }
  if (url.startsWith("ttp://")) {
    url = url.replace("ttp://", "http://");
  }

  // ✅ Use local proxy for Bayard CDN to enable caching headers
  if (url.includes("cdn.bayardvacations.com")) {
    return url.replace("https://cdn.bayardvacations.com", "/media-assets")
              .replace("http://cdn.bayardvacations.com", "/media-assets");
  }
  
  return url;
};
/**
 * Formats a price using Indian locale or returns "On Request" if zero/missing
 * @param {number} price - The price to format
 * @returns {string} Formatted price or "On Request"
 */
export const formatPrice = (price) => {
  if (!price || price === 0) return "On Request";
  return new Intl.NumberFormat('en-IN').format(price);
};
/**
 * Removes unwanted citations like [web:123] or [web:abc.123] from text.
 * Handles strings, arrays of strings, and objects recursively.
 * @param {any} content - The content to clean
 * @returns {any} The cleaned content
 */
export const cleanContent = (content) => {
  if (!content) return content;

  if (typeof content === "string") {
    // Remove [web:...] or similar patterns (case-insensitive)
    return content.replace(/\[[a-zA-Z]+:[^\]]+\]/g, '').trim();
  }

  if (typeof content === "object") {
    // Only recurse on plain objects and arrays
    if (Array.isArray(content)) {
      return content.map(item => cleanContent(item));
    }
    
    // Check if it's a plain object (not null, not a React element, not a class instance)
    if (content.constructor === Object) {
      const cleaned = {};
      for (const key in content) {
        cleaned[key] = cleanContent(content[key]);
      }
      return cleaned;
    }
  }

  return content;
};
