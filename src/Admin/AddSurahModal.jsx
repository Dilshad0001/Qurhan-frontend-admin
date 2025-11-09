

// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// // import { addSurah } from '../data/surahApi'; // ✅ import from your API file
// // import { addSurah } from '../data/ayatsData';
// import { addSurah } from '../data/ayatsData';
// const AddSurahModal = ({ onClose, onSave }) => {
//   const [arabic, setArabic] = useState('');
//   const [malayalam, setMalayalam] = useState('');
//   const [english, setEnglish] = useState('');
//   const [number, setNumber] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleSubmit = async () => {
//     if (!arabic || !malayalam || !english || !number) {
//       setErrorMsg('⚠️ Please fill all fields');
//       return;
//     }

//     try {
//       setLoading(true);
//       setErrorMsg('');

//       const newSurah = {
//         surah_number: Number(number),
//         arabic,
//         malayalam,
//         english,
//       };

//       // ✅ API call to your backend
//       const savedSurah = await addSurah(newSurah);

//       // ✅ Call parent function to update list
//       onSave(savedSurah);
//       onClose();
//     } catch (error) {
//       console.error(error);
//       setErrorMsg('❌ Failed to add surah. Check console for details.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-3">
//       <div className="bg-white p-5 rounded-lg w-full max-w-md shadow-xl">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg sm:text-xl font-semibold text-teal-700">
//             Add New Surah
//           </h2>
//           <button onClick={onClose} className="text-gray-500 hover:text-red-500">
//             <X />
//           </button>
//         </div>

//         <input
//           type="number"
//           placeholder="Surah Number"
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />
//         <input
//           type="text"
//           placeholder="Arabic Name"
//           value={arabic}
//           onChange={(e) => setArabic(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />
//         <input
//           type="text"
//           placeholder="Malayalam Name"
//           value={malayalam}
//           onChange={(e) => setMalayalam(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />
//         <input
//           type="text"
//           placeholder="English Name"
//           value={english}
//           onChange={(e) => setEnglish(e.target.value)}
//           className="w-full border p-2 rounded mb-4"
//         />

//         {errorMsg && (
//           <p className="text-red-600 text-sm mb-3 text-center">{errorMsg}</p>
//         )}

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className={`w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition ${
//             loading && 'opacity-70 cursor-not-allowed'
//           }`}
//         >
//           {loading ? 'Adding...' : 'Add Surah'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddSurahModal;
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { addSurah, updateSurah } from "../data/ayatsData";

const AddSurahModal = ({ onClose, onSave, initialData = null, isEdit = false }) => {
  const [arabic, setArabic] = useState("");
  const [malayalam, setMalayalam] = useState("");
  const [english, setEnglish] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ Pre-fill data if editing
  useEffect(() => {
    if (initialData) {
      setArabic(initialData.surah_name_arabic || "");
      setMalayalam(initialData.surah_name_malayalam || "");
      setEnglish(initialData.surah_name_english || "");
      setNumber(initialData.surah_number || "");
    }
  }, [initialData]);

  // ✅ Handle form submit
  const handleSubmit = async () => {
    if (!arabic || !malayalam || !english || !number) {
      setErrorMsg("⚠️ Please fill all fields");
      return;
    }

    const surahData = {
      surah_number: Number(number),
      surah_name_arabic: arabic,
      surah_name_malayalam: malayalam,
      surah_name_english: english,
    };

    try {
      setLoading(true);
      setErrorMsg("");

      if (isEdit && initialData) {
        // 🔄 Update existing surah
        const updatedSurah = await updateSurah(initialData.id, surahData);
        onSave(updatedSurah);
        alert("✅ Surah updated successfully!");
      } else {
        // ➕ Add new surah
        const newSurah = await addSurah(surahData);
        onSave(newSurah);
        alert("✅ Surah added successfully!");
      }

      onClose();
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Failed to save surah. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-3"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose(); // click outside to close
      }}
    >
      <div className="bg-white p-5 rounded-lg w-full max-w-md shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-teal-700">
            {isEdit ? "Edit Surah" : "Add New Surah"}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500">
            <X />
          </button>
        </div>

        {/* Form */}
        <input
          type="number"
          placeholder="Surah Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Arabic Name"
          value={arabic}
          onChange={(e) => setArabic(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="Malayalam Name"
          value={malayalam}
          onChange={(e) => setMalayalam(e.target.value)}
          className="w-full border p-2 rounded mb-3"
        />
        <input
          type="text"
          placeholder="English Name"
          value={english}
          onChange={(e) => setEnglish(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />

        {/* Error Message */}
        {errorMsg && (
          <p className="text-red-600 text-sm mb-3 text-center">{errorMsg}</p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition ${
            loading && "opacity-70 cursor-not-allowed"
          }`}
        >
          {loading
            ? isEdit
              ? "Updating..."
              : "Adding..."
            : isEdit
            ? "Update Surah"
            : "Add Surah"}
        </button>
      </div>
    </div>
  );
};

export default AddSurahModal;
