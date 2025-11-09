


import React, { useState, useEffect } from "react";
import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getSurahs } from "../data/surahApi";
// import AddSurahModal from "./AddSurahModal"; // ✅ Import the same add component
import AddSurahModal from "../Admin/AddSurahModal";

function SurahListPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [surahs, setSurahs] = useState([]);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [showAdd, setShowAdd] = useState(false); // ✅ For showing Add Modal

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSurahs();
      setSurahs(data);
      setFilteredSurahs(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = surahs.filter((surah) => {
      const query = searchQuery.toLowerCase();
      return (
        surah.arabic.includes(searchQuery) ||
        surah.malayalam?.includes(searchQuery) ||
        surah.english?.toLowerCase().includes(query) ||
        surah.id.toString().includes(query)
      );
    });
    setFilteredSurahs(filtered);
  }, [searchQuery, surahs]);

  // ✅ Lock scroll when modal open
  useEffect(() => {
    if (showAdd) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [showAdd]);

  const handleAddSurah = (newSurah) => {
    console.log("New Surah Added:", newSurah);
    setShowAdd(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
      {/* 🟢 Page Content (blurs when modal open) */}
      <div
        className={`max-w-2xl mx-auto px-4 py-4 transition-all duration-500 ${
          showAdd ? "blur-md scale-[0.98]" : ""
        }`}
      >
        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur opacity-30"></div>
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-teal-600"
              size={22}
            />
            <input
              type="text"
              placeholder="സൂറത്ത് തിരയുക..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-12 pr-4 py-4 rounded-2xl border-2 border-teal-200 focus:border-teal-400 focus:outline-none bg-white/90 backdrop-blur shadow-lg transition-all placeholder:text-teal-400"
            />
          </div>
        </div>

        {/* Surah List */}
        <div className="space-y-1">
          {filteredSurahs.map((surah, index) => (
            <div
              key={surah.id}
              onClick={() => navigate(`/surah/${surah.id}`)}
              className="group relative backdrop-blur h-16 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-teal-100 hover:border-teal-300 overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/10 to-teal-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

              <div className="relative flex items-center justify-between -my-3">
                {/* Left side — Number + Malayalam */}
                <div className="flex items-center gap-4">
                  {/* Number Badge */}
                  <div className="w-10 h-10 bg-gray-200 rounded-2xl flex items-center justify-center font-semibold shadow-md group-hover:scale-110 transition-transform duration-300 -mx-5">
                    <span className="text-lg">{surah.number}</span>
                  </div>

                  {/* Malayalam Name */}
                  <p className="text-amber-800 text-sm tracking-wide mx-5">
                    {surah.malayalam}
                  </p>
                </div>

                {/* Right side — Arabic Name */}
                <div className="text-right">
                  <h2
                    className="text-2xl font-bold mx-3 bg-clip-text text-gray-700 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all"
                    style={{ fontFamily: "Amiri, serif" }}
                  >
                    {surah.arabic}
                  </h2>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {filteredSurahs.length === 0 && (
            <div className="text-center py-16">
              <div className="w-20 h-20 from-teal-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-teal-500" size={32} />
              </div>
              <p className="text-xl text-teal-700 font-medium">
                സൂറത്ത് കണ്ടെത്താനായില്ല
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 🟢 Floating Add Button */}
      <button
        onClick={() => setShowAdd(true)}
        className="fixed bottom-6 right-6 bg-teal-600 hover:bg-teal-700 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 z-50"
      >
        <Plus size={28} />
      </button>

      {/* 🟢 Inline Add Modal */}
      {showAdd && (
        <div className="absolute inset-0 flex justify-center items-center z-50 transition-all duration-500 animate-fade-in">
          <div className="bg-white/90 backdrop-blur-2xl border border-teal-100 shadow-2xl rounded-2xl p-6 w-full max-w-md transform scale-100 animate-slide-up">
            <AddSurahModal
              onClose={() => setShowAdd(false)}
              onSave={handleAddSurah}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SurahListPage;
