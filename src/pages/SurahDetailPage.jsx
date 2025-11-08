

// // export default SurahDetailPage;
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { ArrowLeft, Share2 } from "lucide-react";
// import { getAyatsBySurah } from "../data/ayatsData";  
// import { getSurahs } from "../data/surahApi";

// function SurahDetailPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [ayats, setAyats] = useState([]);
//   const [view, setView] = useState(null);
//   const [surahName, setSurahName] = useState("");


//   // useEffect(() => {
//   //   const fetchAyats = async () => {
//   //     const data = await getAyatsBySurah(id);
//   //     setAyats(data);
//   //   };
//   //   fetchAyats();
//   // }, [id]);
// // import { getSurahs } from "../data/surahData"; // add this import

// useEffect(() => {
//   const fetchAyats = async () => {
//     const data = await getAyatsBySurah(id);
//     setAyats(data);

//     // get Surah list and find this Surah's Arabic name
//     const surahs = await getSurahs();
//     const found = surahs.find((s) => s.id === Number(id));
//     console.log('found==',found);
    
//     setSurahName(found?.arabic || "");
//   };

//   fetchAyats();
// }, [id]);

// // console.log(surahName);

//   const handleShare = () => {
//     navigator.clipboard.writeText(window.location.href);
//     alert("Link copied!");
//   };
//   const toArabicNumber = (num) => {
//   const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
//   return num.toString().replace(/[0-9]/g, (d) => arabicDigits[d]);
// };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pb-24">
//       {/* Header */}
//       <div className="sticky top-0 z-10 bg-white shadow-md border-b border-amber-200">
//         <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
//           <button onClick={() => navigate(-1)} className="p-2 hover:bg-amber-100 rounded-lg">
//             <ArrowLeft className="text-amber-800" />
//           </button>
//           <h1 className="text-2xl font-bold text-amber-900" style={{ fontFamily: "Amiri, serif" }}>
//             سورة {id}
//           </h1>
//           <button onClick={handleShare} className="p-2 hover:bg-amber-100 rounded-lg">
//             <Share2 className="text-amber-800" />
//           </button>
//         </div>
//       </div>

// {/* Surah Title Banner (Authentic Quran Mushaf style) */}


// {/* <div className="relative w-full my-8 px-4">
//   <div className="max-w-4xl mx-auto">
    
//     <div className="relative bg-white border-t-2 border-b-2 border-amber-800 py-6">
      
//       <div className="absolute top-0 left-0 right-0 flex justify-center">
//         <div className="w-32 h-0.5 bg-amber-800"></div>
//       </div>
      
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center">
//         <div className="w-32 h-0.5 bg-amber-800"></div>
//       </div>

//       <div className="flex items-center justify-center gap-3 md:gap-6 px-4 md:px-8">
        
//         <div className="flex items-center justify-end gap-1 md:gap-2 flex-shrink-0">
//           <div className="w-12 md:w-32 h-px bg-amber-800"></div>
//           <div className="w-1.5 h-1.5 rounded-full bg-amber-800"></div>
//         </div>

//         <div className="text-center flex-shrink-0">
//           <h2
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 whitespace-nowrap"
//             style={{ 
//               fontFamily: "Amiri, serif",
//               fontWeight: 700
//             }}
//             dir="rtl"
//           >
//             سُورَةُ {surahName}
//           </h2>
//         </div>

//         <div className="flex items-center justify-start gap-1 md:gap-2 flex-shrink-0">
//           <div className="w-1.5 h-1.5 rounded-full bg-amber-800"></div>
//           <div className="w-12 md:w-32 h-px bg-amber-800"></div>
//         </div>

//       </div>

//       <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
//         <div className="flex items-center gap-1">
//           <div className="w-2 h-2 rounded-full bg-amber-800"></div>
//           <div className="w-2 h-2 rounded-full bg-amber-600"></div>
//           <div className="w-2 h-2 rounded-full bg-amber-800"></div>
//         </div>
//       </div>
//     </div>

//   </div>
// </div> */}
// {/* Surah Title Banner (Authentic Quran Mushaf style) */}
// <div className="relative w-full my-8 px-4">
//   <div className="max-w-4xl mx-auto">
    
//     {/* Simple elegant banner with authentic Mushaf styling */}
//     <div className="relative bg-white border-t-2 border-b-2 border-amber-800 py-6">
      
//       {/* Top decorative line */}
//       <div className="absolute top-0 left-0 right-0 flex justify-center">
//         <div className="w-32 h-0.5 bg-amber-800"></div>
//       </div>
      
//       {/* Bottom decorative line */}
//       <div className="absolute bottom-0 left-0 right-0 flex justify-center">
//         <div className="w-32 h-0.5 bg-amber-800"></div>
//       </div>

//       {/* Main content */}
//       <div className="flex items-center justify-center gap-3 md:gap-6 px-4 md:px-8">
        
//         {/* Left decorative element - simple line with dot */}
//         <div className="flex items-center justify-end gap-1 md:gap-2 flex-shrink-0">
//           <div className="w-12 md:w-32 h-px bg-amber-800"></div>
//           <div className="w-1.5 h-1.5 rounded-full bg-amber-800"></div>
//         </div>

//         {/* Surah name - clean and centered */}
//         <div className="text-center flex-shrink-0">
//           <h2
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 whitespace-nowrap"
//             style={{ 
//               fontFamily: "Amiri, serif",
//               fontWeight: 700
//             }}
//             dir="rtl"
//           >
//             سُورَةُ {surahName}
//           </h2>
//         </div>

//         {/* Right decorative element - simple line with dot */}
//         <div className="flex items-center justify-start gap-1 md:gap-2 flex-shrink-0">
//           <div className="w-1.5 h-1.5 rounded-full bg-amber-800"></div>
//           <div className="w-12 md:w-32 h-px bg-amber-800"></div>
//         </div>

//       </div>

//       {/* Optional: Small ornamental separator below */}
//       <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
//         <div className="flex items-center gap-1">
//           <div className="w-2 h-2 rounded-full bg-amber-800"></div>
//           <div className="w-2 h-2 rounded-full bg-amber-600"></div>
//           <div className="w-2 h-2 rounded-full bg-amber-800"></div>
//         </div>
//       </div>
//     </div>

//   </div>
// </div>

//       <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

//         {/* Continuous Arabic view */}
//         {!view && (
//           <div
//             className="bg-white text-3xl rounded-2xl p-6 shadow-lg text-right text-amber-900"
//             dir="rtl"
//             style={{
//               fontFamily: "Amiri, serif",
//               whiteSpace: "normal",
//               lineHeight: "4.0rem",
//               wordBreak: "keep-all",
//             }}
//           >
//             {ayats.map((ayat) => (
//               <span key={ayat.ayat_number}>
//                 {ayat.ayat_text} ۝{toArabicNumber(ayat.ayat_number)}
//               </span>
//             ))}
//           </div>
//         )}

//         {/* Meaning / Tafseer views */}
//         {view && ayats.map((ayat, index) => (
//           <div key={`${ayat.ayat_number}-${index}`} className="bg-white rounded-2xl p-6 shadow-lg">

//             {/* Meaning View */}
//             {view === "meaning" && (
//               <>
//                 {ayat.fractions?.map((f, i) => (
//                   <div key={`${ayat.ayat_number}-${i}`} className="bg-amber-50 rounded-xl p-4 mb-3">
//                     <p
//                       className="text-xl text-right text-amber-900"
//                       dir="rtl"
//                       style={{ fontFamily: "Amiri, serif" }}
//                     >
//                       {f.text}
//                     </p>
//                     <p className="text-sm text-amber-800 mt-1">
//                       <strong>അർത്ഥം:</strong> {f.meaning}
//                     </p>
//                     <p className="text-sm text-amber-700 mt-1 italic">
//                       <strong>തഫ്സീർ:</strong> {f.tafseer}
//                     </p>
//                   </div>
//                 ))}

//                 <div className="mt-4 border-t border-amber-100 pt-4">
//                   <p
//                     className="text-2xl text-right text-amber-900 mb-4"
//                     dir="rtl"
//                     style={{ fontFamily: "Amiri, serif" }}
//                   >
//                     {ayat.ayat_text} ۝{ayat.id}
//                   </p>
//                   <p className="text-base text-amber-800 bg-amber-50 rounded-lg p-3 mb-2">
//                     <strong>അർത്ഥം:</strong> {ayat.meaning_text}
//                   </p>
//                   <p className="text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
//                     <strong>വാക്കുകളുടെ അർത്ഥം:</strong> {ayat.word_meaning}
//                   </p>
//                 </div>
//               </>
//             )}

//             {/* Tafseer View */}
//             {view === "tafseer" && (
//               <>
//                 {ayat.fractions?.map((f, i) => (
//                   <div key={`${ayat.ayat_number}-${i}`} className="bg-amber-50 rounded-xl p-4 mb-3">
//                     <p
//                       className="text-xl text-right text-amber-900"
//                       dir="rtl"
//                       style={{ fontFamily: "Amiri, serif" }}
//                     >
//                       {f.text}
//                     </p>
//                     <p className="text-sm text-amber-800 mt-1">
//                       <strong>അർത്ഥം:</strong> {f.meaning}
//                     </p>
//                     <p className="text-sm text-amber-700 mt-1 italic">
//                       <strong>തഫ്സീർ:</strong> {f.tafseer}
//                     </p>
//                   </div>
//                 ))}

//                 <div className="mt-4 border-t border-amber-100 pt-4">
//                   <p
//                     className="text-2xl text-right text-amber-900 mb-2"
//                     dir="rtl"
//                     style={{ fontFamily: "Amiri, serif" }}
//                   >
//                     {ayat.ayat_text} ۝{ayat.id}
//                   </p>
//                   <p className="text-base text-amber-800 bg-amber-50 rounded-lg p-3">
//                     <strong>പൂർണ്ണ അർത്ഥം:</strong> {ayat.meaning_text}
//                   </p>
//                 </div>
//               </>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Footer buttons */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 shadow-lg">
//         <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">
//           <button
//             onClick={() => setView(view === "tafseer" ? null : "tafseer")}
//             className={`flex-1 py-4 rounded-xl font-bold text-lg ${
//               view === "tafseer"
//                 ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
//                 : "bg-amber-100 text-amber-800 hover:bg-amber-200"
//             }`}
//           >
//             🧠 തഫ്‌സീർ
//           </button>

//           <button
//             onClick={() => setView(view === "meaning" ? null : "meaning")}
//             className={`flex-1 py-4 rounded-xl font-bold text-lg ${
//               view === "meaning"
//                 ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
//                 : "bg-amber-100 text-amber-800 hover:bg-amber-200"
//             }`}
//           >
//             💬 അർത്ഥം
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SurahDetailPage;


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";
import { getAyatsBySurah } from "../data/ayatsData";  
// import { getSurahs } from "../data/surahApi";
import { getSurahs } from "../data/surahApi";

function SurahDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ayats, setAyats] = useState([]);
  const [view, setView] = useState(null);
  const [surahName, setSurahName] = useState("");
  const [malayalamsurahName, setmalayalamsurahName] = useState("");

  useEffect(() => {
    const fetchAyats = async () => {
      const data = await getAyatsBySurah(id);
      setAyats(data);

      const surahs = await getSurahs();
      const found = surahs.find((s) => s.id === Number(id));
      console.log('found==',found);
      
      setSurahName(found?.arabic || "");
      setmalayalamsurahName(found?.malayalam || "");
    };

    fetchAyats();
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  const toArabicNumber = (num) => {
    const arabicDigits = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'];
    return num.toString().replace(/[0-9]/g, (d) => arabicDigits[d]);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br ">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-md border-b border-amber-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-amber-100 rounded-lg">
            <ArrowLeft className="text-amber-800" />
          </button>
          <h1 className=" font-bold text-amber-900" style={{ fontFamily: "Amiri, serif" }}>
            {malayalamsurahName}
          </h1>
          <button onClick={handleShare} className="p-2 hover:bg-amber-100 rounded-lg">
            <Share2 className="text-amber-800" />
          </button>
        </div>
      </div>

      {/* Surah Title Banner (Authentic Quran Mushaf style) */}
      <div className="relative w-full my-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white border-t-2 border-b-2 border-amber-800 py-6">
            
            {/* Top decorative line */}
            <div className="absolute top-0 left-0 right-0 flex justify-center">
              <div className="w-32 h-0.5 bg-amber-800"></div>
            </div>
            
            {/* Bottom decorative line */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center">
              <div className="w-32 h-0.5 bg-amber-800"></div>
            </div>

            {/* Main content */}
            <div className="flex items-center justify-center gap-3 md:gap-6 px-4 md:px-8">
              
              {/* Left decorative element */}
              <div className="flex items-center justify-end gap-1 md:gap-2 flex-shrink-0 ">
                <div className="w-12 md:w-32 h-px bg-amber-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-amber-800"></div>
              </div>

              {/* Surah name */}
              <div className="text-center  flex-shrink-0">
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 whitespace-nowrap"
                  style={{ 
                    fontFamily: "Amiri, serif",
                    fontWeight: 700
                  }}
                  dir="rtl"
                >
                  سُورَةُ {surahName}
                </h2>
              </div>

              {/* Right decorative element */}
              <div className="flex items-center justify-start gap-1 md:gap-2 flex-shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-800"></div>
                <div className="w-12 md:w-32 h-px bg-amber-800"></div>
              </div>
            </div>

            {/* Small ornamental separator below */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-800"></div>
                <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                <div className="w-2 h-2 rounded-full bg-amber-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BISMILLAH - Hidden only for Surah 9 (At-Tawbah) */}
      {id !== "9" && (
        <div className="max-w-2xl mx-auto px-4 mt-2 mb-6">
          <div className="text-center py-4">
            <h3
              className="text-3xl md:text-5xl font-bold text-gray-800"
              style={{ 
                fontFamily: "Amiri, serif",
                fontWeight: 700,
                letterSpacing: "0.05em"
              }}
              dir="rtl"
            >
              بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
            </h3>
          </div>
        </div>
      )}

      <div className="max-w-2xl  -my-10">
        {/* Continuous Arabic view */}
        {/* {!view && (
          <div
            className="bg-white text-gray-800 text-3xl rounded-2xl p-6 shadow-lg text-right text-amber-900"
            dir="rtl"
            style={{
              fontFamily: "Amiri, serif",
              whiteSpace: "normal",
              lineHeight: "4.0rem",
              wordBreak: "keep-all",
            }}
          >
            {ayats.map((ayat) => (
              <span key={ayat.ayat_number}>
                {ayat.ayat_text} ۝{toArabicNumber(ayat.ayat_number)}
              </span>
            ))}
          </div>
        )} */}
{!view && (
  <div
    className="bg-white text-gray-800 text-3xl rounded-2xl p-6 shadow-lg text-right text-amber-900"
    dir="rtl"
    style={{
      fontFamily: "Amiri, serif",
      whiteSpace: "normal",
      lineHeight: "4.0rem",
    }}
  >
    {ayats.map((ayat, index) => (
      <p
        key={ayat.ayat_number}
        className="mb-6 flex justify-end items-start gap-4"
        dir="rtl"
        style={{
          paddingRight: `${index * 1.5}rem`, // progressive indent effect
          transition: "padding 0.3s ease",
        }}
      >
        <span className="text-amber-800 text-2xl font-bold">
          ۝{toArabicNumber(ayat.ayat_number)}
        </span>
        <span>{ayat.ayat_text}</span>
      </p>
    ))}
  </div>
)}



        {/* Meaning / Tafseer views */}
        {view && ayats.map((ayat, index) => (
          <div key={`${ayat.ayat_number}-${index}`} className="bg-white rounded-2xl p-6 shadow-lg">
            {/* Meaning View */}
            {view === "meaning" && (
              <>
                {ayat.fractions?.map((f, i) => (
                  <div key={`${ayat.ayat_number}-${i}`} className="bg-amber-50 rounded-xl p-4 mb-3">
                    <p
                      className="text-xl text-right text-amber-900"
                      dir="rtl"
                      style={{ fontFamily: "Amiri, serif" }}
                    >
                      {f.text}
                    </p>
                    <p className="text-sm text-amber-800 mt-1">
                      <strong>അർത്ഥം:</strong> {f.meaning}
                    </p>
                    <p className="text-sm text-amber-700 mt-1 italic">
                      <strong>തഫ്സീർ:</strong> {f.tafseer}
                    </p>
                  </div>
                ))}

                <div className="mt-4 border-t border-amber-100 pt-4">
                  <p
                    className="text-2xl text-right text-amber-900 mb-4"
                    dir="rtl"
                    style={{ fontFamily: "Amiri, serif" }}
                  >
                    {ayat.ayat_text} ۝{ayat.id}
                  </p>
                  <p className="text-base text-amber-800 bg-amber-50 rounded-lg p-3 mb-2">
                    <strong>അർത്ഥം:</strong> {ayat.meaning_text}
                  </p>
                  <p className="text-sm text-amber-700 bg-amber-50 rounded-lg p-3">
                    <strong>വാക്കുകളുടെ അർത്ഥം:</strong> {ayat.word_meaning}
                  </p>
                </div>
              </>
            )}

            {/* Tafseer View */}
            {view === "tafseer" && (
              <>
                {ayat.fractions?.map((f, i) => (
                  <div key={`${ayat.ayat_number}-${i}`} className="bg-amber-50 rounded-xl p-4 mb-3">
                    <p
                      className="text-xl text-right text-amber-900"
                      dir="rtl"
                      style={{ fontFamily: "Amiri, serif" }}
                    >
                      {f.text}
                    </p>
                    <p className="text-sm text-amber-800 mt-1">
                      <strong>അർത്ഥം:</strong> {f.meaning}
                    </p>
                    <p className="text-sm text-amber-700 mt-1 italic">
                      <strong>തഫ്സീർ:</strong> {f.tafseer}
                    </p>
                  </div>
                ))}

                <div className="mt-4 border-t border-amber-100 pt-4">
                  <p
                    className="text-2xl text-right text-amber-900 mb-2"
                    dir="rtl"
                    style={{ fontFamily: "Amiri, serif" }}
                  >
                    {ayat.ayat_text} ۝{ayat.id}
                  </p>
                  <p className="text-base text-amber-800 bg-amber-50 rounded-lg p-3">
                    <strong>പൂർണ്ണ അർത്ഥം:</strong> {ayat.meaning_text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Footer buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 shadow-lg">
        <div className="max-w-2xl mx-auto px-4 py-3 flex gap-3">
          <button
            onClick={() => setView(view === "tafseer" ? null : "tafseer")}
            className={`flex-1 py-4 rounded-xl font-bold text-lg ${
              view === "tafseer"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            🧠 തഫ്‌സീർ
          </button>

          <button
            onClick={() => setView(view === "meaning" ? null : "meaning")}
            className={`flex-1 py-4 rounded-xl font-bold text-lg ${
              view === "meaning"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white"
                : "bg-amber-100 text-amber-800 hover:bg-amber-200"
            }`}
          >
            💬 അർത്ഥം
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurahDetailPage;