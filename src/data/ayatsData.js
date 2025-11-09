// import axios from "axios";

// const BASE_URL = "https://qura-an-backend-tbdt.onrender.com"; // your backend URL

// // ✅ Function to fetch ayats dynamically by surah_id
// export const getAyatsBySurah = async (surahId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/user/ayat/?surah_id=${surahId}`);
//     return response.data; // returns ayats array
//   } catch (error) {
//     console.error("❌ Failed to fetch Ayats:", error);
//     return [];
//   }
// };




import axios from "axios";

const BASE_URL = "https://qura-an-backend-tbdt.onrender.com";

// ============================
// 🕌 SURAH API FUNCTIONS
// ============================

// ✅ Get all Surahs or search by name
export const getSurahs = async (search = "") => {
  try {
    const url = `${BASE_URL}/adminuser/surah/`;
    const response = await axios.get(url, {
      params: search ? { search } : {},
    });
    return response.data;
  } catch (error) {
    console.error("❌ Failed to fetch Surahs:", error);
    return [];
  }
};

// ✅ Get single Surah by ID
export const getSurahById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/adminuser/surah/${id}/`);
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to fetch Surah ID ${id}:`, error);
    return null;
  }
};

// ✅ Create new Surah
export const addSurah = async (surahData) => {
  try {
    const response = await axios.post(`${BASE_URL}/adminuser/surah/`, {
      surah_number: surahData.surah_number,
      surah_name_arabic: surahData.arabic,
      surah_name_malayalam: surahData.malayalam,
      surah_name_english: surahData.english,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Failed to create Surah:", error.response?.data || error);
    throw error;
  }
};

// ✅ Update Surah (PATCH)
export const updateSurah = async (id, updatedData) => {
  try {
    const response = await axios.patch(`${BASE_URL}/adminuser/surah/${id}/`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`❌ Failed to update Surah ID ${id}:`, error.response?.data || error);
    throw error;
  }
};

// ✅ Delete Surah
export const deleteSurah = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/adminuser/surah/${id}/`);
    return response.status === 204;
  } catch (error) {
    console.error(`❌ Failed to delete Surah ID ${id}:`, error.response?.data || error);
    throw error;
  }
};

// ============================
// 📜 AYAT API FUNCTIONS
// ============================

// ✅ Get all ayats by Surah ID
// export const getAyatsBySurah = async (surahId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/user/ayat/`, {
//       params: { surah_id: surahId },
//     });
//     return response.data; // returns ayats array
//   } catch (error) {
//     console.error("❌ Failed to fetch Ayats:", error);
//     return [];
//   }
// };



// export const getAyatsBySurah = async (surahId) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/adminuser/ayat/`, {
//       params: { surah_id: surahId },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("❌ Failed to fetch ayats:", error);
//     return [];
//   }
// };

// ✅ Update ayat meaning
export const updateAyatMeaning = async (ayatId, meaningText) => {
  try {
    const response = await axios.patch(`${BASE_URL}/adminuser/ayat/${ayatId}/`, {
      meaning_text: meaningText,
    });
    return response.data;
  } catch (error) {
    console.error("❌ Failed to update ayat meaning:", error.response?.data || error);
    throw error;
  }
};



// src/data/ayatsData.js
// import axios from "axios";

// const BASE_URL = "https://qura-an-backend-tbdt.onrender.com";

// ============================
// 📜 AYAT API FUNCTIONS
// ============================

// ✅ Get all ayats by Surah ID
export const getAyatsBySurah = async (surahId) => {
  try {
    const response = await axios.get(`${BASE_URL}/adminuser/ayat/`, {
      params: { surah_id: surahId },
    });
        // console.log('respone===',response.data);

    return response.data; // returns array of ayats
    
  } catch (error) {
    console.error("❌ Failed to fetch Ayats:", error);
    return [];
  }
};

// ✅ Get single Ayat by ID
export const getAyatById = async (ayatId) => {
  try {
    const response = await axios.get(`${BASE_URL}/adminuser/ayat/${ayatId}/`);
    return response.data; // returns one ayat object
  } catch (error) {
    console.error("❌ Failed to fetch Ayat by ID:", error);
    throw error;
  }
};

// ✅ Update Ayat meaning (PATCH)
// export const updateAyatMeaning = async (ayatId, meaningText) => {
//   try {
//     const response = await axios.patch(`${BASE_URL}/adminuser/ayat/${ayatId}/`, {
//       meaning_text: meaningText,
//     });
//     return response.data; // returns updated ayat
//   } catch (error) {
//     console.error("❌ Failed to update Ayat meaning:", error.response?.data || error);
//     throw error;
//   }
// };

// ✅ Optional: Create new Ayat (if you ever add)
export const addAyat = async (ayatData) => {
  try {
    const response = await axios.post(`${BASE_URL}/adminuser/ayat/`, ayatData);
    return response.data;
  } catch (error) {
    console.error("❌ Failed to add Ayat:", error.response?.data || error);
    throw error;
  }
};

// ✅ Optional: Delete Ayat
export const deleteAyat = async (ayatId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/adminuser/ayat/${ayatId}/`);
    return response.status === 204;
  } catch (error) {
    console.error("❌ Failed to delete Ayat:", error.response?.data || error);
    throw error;
  }
};






// ✅ Get fractions by ayat_id
export const getFractionsByAyat = async (ayatId) => {
  try {
    const res = await axios.get(`${BASE_URL}/adminuser/fraction-ayat/`, {
      params: { ayat_id: ayatId },
    });
    return res.data;
  } catch (err) {
    console.error("❌ Failed to fetch fractions:", err);
    return [];
  }
};

// ✅ Add new fraction
export const addFraction = async (fractionData) => {
  try {
    const res = await axios.post(`${BASE_URL}/adminuser/fraction-ayat/`, fractionData);
    return res.data;
  } catch (err) {
    console.error("❌ Failed to add fraction:", err);
    throw err;
  }
};

// ✅ Update fraction
export const updateFraction = async (id, data) => {
  try {
    const res = await axios.patch(`${BASE_URL}/adminuser/fraction-ayat/${id}/`, data);
    return res.data;
  } catch (err) {
    console.error("❌ Failed to update fraction:", err);
    throw err;
  }
};


// ✅ Delete fraction
export const deleteFraction = async (id) => {
  try {
    const res = await axios.delete(`${BASE_URL}/adminuser/fraction-ayat/${id}/`);
    return res.status === 204;
  } catch (err) {
    console.error("❌ Failed to delete fraction:", err);
    throw err;
  }
};
