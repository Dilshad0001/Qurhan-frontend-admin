


// import React, { useState, useEffect } from "react";
// import { Search, Plus } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { getSurahs } from "../data/surahApi";
// // import AddSurahModal from "./AddSurahModal"; // ✅ Import the same add component
// import AddSurahModal from "../Admin/AddSurahModal";

// function SurahListPage() {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState("");
//   const [surahs, setSurahs] = useState([]);
//   const [filteredSurahs, setFilteredSurahs] = useState([]);
//   const [showAdd, setShowAdd] = useState(false); // ✅ For showing Add Modal



//   const [longPressedSurah, setLongPressedSurah] = useState(null);
// let longPressTimer = null;

// const handleLongPressStart = (e, surah) => {
//   e.preventDefault();
//   longPressTimer = setTimeout(() => {
//     setLongPressedSurah(surah);
//   }, 600); // hold 600ms
// };

// const handleLongPressEnd = () => {
//   clearTimeout(longPressTimer);
// };

// const handleDeleteSurah = async (id) => {
//   if (!window.confirm("Are you sure you want to delete this Surah?")) return;
//   try {
//     await deleteSurah(id);
//     setSurahs((prev) => prev.filter((s) => s.id !== id));
//     alert("🗑️ Surah deleted!");
//     setLongPressedSurah(null);
//   } catch (err) {
//     alert("❌ Failed to delete Surah!");
//     console.error(err);
//   }
// };

// const openEditModal = (surah) => {
//   setEditingSurah(surah);
//   setShowEdit(true);
// };
// const [showEdit, setShowEdit] = useState(false);
// const [editingSurah, setEditingSurah] = useState(null);

// const handleUpdateSurah = async (updated) => {
//   try {
//     await updateSurah(editingSurah.id, updated);
//     setSurahs((prev) =>
//       prev.map((s) =>
//         s.id === editingSurah.id ? { ...s, ...updated } : s
//       )
//     );
//     alert("✅ Surah updated!");
//     setShowEdit(false);
//     setEditingSurah(null);
//   } catch (err) {
//     alert("❌ Update failed!");
//   }
// };

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getSurahs();
//       setSurahs(data);
//       setFilteredSurahs(data);
//     };
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filtered = surahs.filter((surah) => {
//       const query = searchQuery.toLowerCase();
//       return (
//         surah.arabic.includes(searchQuery) ||
//         surah.malayalam?.includes(searchQuery) ||
//         surah.english?.toLowerCase().includes(query) ||
//         surah.id.toString().includes(query)
//       );
//     });
//     setFilteredSurahs(filtered);
//   }, [searchQuery, surahs]);

//   // ✅ Lock scroll when modal open
//   useEffect(() => {
//     if (showAdd) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//     return () => (document.body.style.overflow = "auto");
//   }, [showAdd]);

//   const handleAddSurah = (newSurah) => {
//     console.log("New Surah Added:", newSurah);
//     setShowAdd(false);
//   };

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
//       {/* 🟢 Page Content (blurs when modal open) */}
//       <div
//         className={`max-w-2xl mx-auto px-4 py-4 transition-all duration-500 ${
//           showAdd ? "blur-md scale-[0.98]" : ""
//         }`}
//       >
//         {/* Search Bar */}
//         <div className="relative mb-8">
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur opacity-30"></div>
//           <div className="relative">
//             <Search
//               className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-600"
//               size={22}
//             />
//             <input
//               type="text"
//               placeholder="സൂറത്ത് തിരയുക..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full h-10 pl-12 pr-4 py-4 rounded-2xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none bg-white/90 backdrop-blur shadow-lg transition-all placeholder:text-teal-400"
//             />
//           </div>
//         </div>

//         {/* Surah List */}
//         <div className="space-y-1">
//           {filteredSurahs.map((surah, index) => (
//             <div
//               key={surah.id}
//               onClick={() => navigate(`/surah/${surah.id}`)}
//               className="group relative backdrop-blur h-16 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-teal-100 hover:border-teal-300 overflow-hidden"
//               style={{ animationDelay: `${index * 50}ms` }}
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/10 to-teal-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

//               <div className="relative flex items-center justify-between -my-3">
//                 {/* Left side — Number + Malayalam */}
//                 <div className="flex items-center gap-4">
//                   {/* Number Badge */}
//                   <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center font-semibold shadow-md group-hover:scale-110 transition-transform duration-300 -mx-5">
//                     <span className="text-lg">{surah.number}</span>
//                   </div>

//                   {/* Malayalam Name */}
//                   <p className="text-amber-800 text-sm tracking-wide mx-5">
//                     {surah.malayalam}
//                   </p>
//                 </div>

//                 {/* Right side — Arabic Name */}
//                 <div className="text-right">
//                   <h2
//                     className="text-2xl font-bold mx-3 bg-clip-text text-gray-700 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all"
//                     style={{ fontFamily: "Amiri, serif" }}
//                   >
//                     {surah.arabic}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Empty State */}
//           {/* {filteredSurahs.length === 0 && (
//             <div className="text-center py-16">
//               <div className="w-20 h-20 from-teal-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Search className="text-teal-500" size={32} />
//               </div>
//               <p className="text-xl text-teal-700 font-medium">
//                 സൂറത്ത് കണ്ടെത്താനായില്ല
//               </p>
//             </div>
//           )} */}

//           {filteredSurahs.map((surah) => (
//   <div
//     key={surah.id}
//     onClick={() => navigate(`/surah/${surah.id}`)}
//     onTouchStart={(e) => handleLongPressStart(e, surah)}
//     onTouchEnd={handleLongPressEnd}
//     onMouseDown={(e) => handleLongPressStart(e, surah)}
//     onMouseUp={handleLongPressEnd}
//     className="group relative backdrop-blur h-16 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-teal-100 hover:border-teal-300 overflow-hidden"
//   >
//     <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/10 to-teal-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

//     {/* Surah Info */}
//     <div className="relative flex items-center justify-between -my-3">
//       <div className="flex items-center gap-4">
//         <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center font-semibold shadow-md">
//           <span className="text-lg">{surah.number}</span>
//         </div>
//         <p className="text-amber-800 text-sm tracking-wide mx-5">
//           {surah.malayalam}
//         </p>
//       </div>

//       <div className="text-right">
//         <h2
//           className="text-2xl font-bold mx-3 bg-clip-text text-gray-700"
//           style={{ fontFamily: "Amiri, serif" }}
//         >
//           {surah.arabic}
//         </h2>
//       </div>
//     </div>

//     {/* Edit/Delete icons (visible on long press) */}
//     {longPressedSurah?.id === surah.id && (
//       <div className="absolute inset-0 bg-white/90 flex items-center justify-center gap-6 rounded-3xl shadow-inner z-10">
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             openEditModal(surah);
//           }}
//           className="text-teal-600 hover:text-teal-800 transition"
//         >
//           ✏️ Edit
//         </button>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDeleteSurah(surah.id);
//           }}
//           className="text-red-600 hover:text-red-700 transition"
//         >
//           🗑️ Delete
//         </button>
//       </div>
//     )}
//   </div>
// ))}

//         </div>
//       </div>

//       {/* 🟢 Floating Add Button */}
//       <button
//         onClick={() => setShowAdd(true)}
//         className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
//       >
//         <Plus size={28} />
//       </button>

//       {/* 🟢 Inline Add Modal */}
//       {showAdd && (
//         <div className="absolute inset-0 flex justify-center items-center z-50 transition-all duration-500 animate-fade-in">
//           <div className="bg-white/90 backdrop-blur-2xl border border-teal-100 shadow-2xl rounded-2xl p-6 w-full max-w-md transform scale-100 animate-slide-up">
//             <AddSurahModal
//               onClose={() => setShowAdd(false)}
//               onSave={handleAddSurah}
//             />
//           </div>
//         </div>
//       )}
//       {showEdit && (
//   <div className="absolute inset-0 flex justify-center items-center z-50 bg-black/40 backdrop-blur-sm">
//     <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
//       <AddSurahModal
//         onClose={() => setShowEdit(false)}
//         onSave={handleUpdateSurah}
//         initialData={editingSurah} // ✅ pass current data
//       />
//     </div>
//   </div>
// )}

//     </div>
//   );
// }

// export default SurahListPage;




import React, { useState, useEffect, useRef } from "react";
import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getSurahs, deleteSurah, updateSurah } from "../data/ayatsData";
import AddSurahModal from "../Admin/AddSurahModal";

function SurahListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [surahs, setSurahs] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editingSurah, setEditingSurah] = useState(null);
  const [longPressedSurah, setLongPressedSurah] = useState(null);
  const longPressTimer = useRef(null);

  // 🟢 Fetch Surahs
  useEffect(() => {
    const fetchData = async () => {
      const data = await getSurahs();
      setSurahs(data);
      setFilteredSurahs(data);
    };
    fetchData();
  }, []);

  // 🟢 Filter by search
  useEffect(() => {
    const q = searchQuery.toLowerCase();
    setFilteredSurahs(
      surahs.filter(
        (s) =>
          s.surah_name_arabic?.includes(searchQuery) ||
          s.surah_name_malayalam?.includes(searchQuery) ||
          s.surah_name_english?.toLowerCase().includes(q) ||
          s.surah_number?.toString().includes(q)
      )
    );
  }, [searchQuery, surahs]);

  // 🟢 Long Press handlers (works on mobile + desktop)
  const handleLongPressStart = (e, surah) => {
    // e.preventDefault();
    longPressTimer.current = setTimeout(() => setLongPressedSurah(surah), 600);
  };
  const handleLongPressEnd = () => clearTimeout(longPressTimer.current);

  // 🟢 Right-click (for laptop)
  const handleRightClick = (e, surah) => {
    e.preventDefault();
    setLongPressedSurah(surah);
  };

  // 🟢 Delete Surah
  const handleDeleteSurah = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Surah?")) return;
    try {
      await deleteSurah(id);
      setSurahs((prev) => prev.filter((s) => s.id !== id));
      setLongPressedSurah(null);
      alert("🗑️ Surah deleted successfully!");
    } catch {
      alert("❌ Failed to delete Surah!");
    }
  };

  // 🟢 Edit Surah (open modal)
  const openEditModal = (surah) => {
    setEditingSurah(surah);
    setShowEdit(true);
    setLongPressedSurah(null);
  };

  // 🟢 Update Surah (save changes)
  const handleUpdateSurah = async (updated) => {
    try {
      await updateSurah(editingSurah.id, updated);
      setSurahs((prev) =>
        prev.map((s) =>
          s.id === editingSurah.id ? { ...s, ...updated } : s
        )
      );
      alert("✅ Surah updated successfully!");
      setShowEdit(false);
      setEditingSurah(null);
    } catch {
      alert("❌ Failed to update Surah!");
    }
  };

  // 🟢 Add Surah
  const handleAddSurah = (newSurah) => {
    setSurahs((prev) => [...prev, newSurah]);
    setShowAdd(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      <div
        className={`max-w-2xl mx-auto px-4 py-4 transition-all duration-500 ${
          showAdd || showEdit ? "blur-md scale-[0.98]" : ""
        }`}
      >
        {/* 🔍 Search */}
        <div className="relative mb-8">
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-600"
            size={22}
          />
          <input
            type="text"
            placeholder="സൂറത്ത് തിരയുക..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-12 pr-4 rounded-2xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none bg-white/90 shadow-lg placeholder:text-teal-400"
          />
        </div>

        {/* 📜 Surah List */}
        <div className="space-y-1 ">
          {filteredSurahs.map((s) => (
            <div
              key={s.id}
              onClick={() => navigate(`/surah/${s.id}`)}
              onContextMenu={(e) => handleRightClick(e, s)} // right-click desktop
              onTouchStart={(e) => handleLongPressStart(e, s)} // mobile hold
              onTouchEnd={handleLongPressEnd}
              onMouseDown={(e) => handleLongPressStart(e, s)}
              onMouseUp={handleLongPressEnd}
              className="relative  h-16 rounded-3xl p-6 shadow-md hover:shadow-xl border border-teal-100 hover:border-teal-300 bg-white/60 backdrop-blur cursor-pointer transition"
            >
              {/* Normal card */}
              <div className="flex justify-between items-center  -mt-3 ">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center font-semibold shadow">
                    {s.surah_number}
                  </div>
                  <p className="text-gray-900 text-sm">{s.surah_name_malayalam}</p>
                </div>
                <h2
                  className="text-2xl text-gray-700"
                  style={{ fontFamily: "Amiri, serif" }}
                >
                  {s.surah_name_arabic}
                </h2>
              </div>

              {/* 🟢 Overlay: Edit/Delete */}
              {longPressedSurah?.id === s.id && (
                <div className="absolute inset-0 flex justify-center items-center gap-6 bg-white/95 rounded-3xl z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditModal(s);
                    }}
                    className="text-teal-700 hover:text-teal-900"
                  >
                    ✏️ Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteSurah(s.id);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    🗑️ Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ➕ Add Button */}
      <button
        onClick={() => setShowAdd(true)}
        className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
      >
        <Plus size={28} />
      </button>

      {/* ➕ Add Modal */}
      {showAdd && (
        <div className="absolute inset-0 flex justify-center items-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <AddSurahModal
              // onClose={() => setShowAdd(false)}
              onClose={() => setShowAddAyat(false)}
              onSave={handleAddSurah}
              isEdit={false}
            />
          </div>
        </div>
      )}

      {/* ✏️ Edit Modal */}
      {showEdit && (
        <div className="absolute inset-0 flex justify-center items-center z-50 bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            <AddSurahModal
              onClose={() => setShowEdit(false)}
              onSave={handleUpdateSurah}
              initialData={editingSurah}
              isEdit={true}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SurahListPage;
