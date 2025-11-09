

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Save,
  Edit2,
  X,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
} from "lucide-react";
import {
  getAyatById,
  updateAyatMeaning,
  getFractionsByAyat,
  updateFraction,
  addFraction,
  deleteFraction,
} from "../data/ayatsData";

function AyatDetailPage() {
  const { ayatId } = useParams();
  const navigate = useNavigate();

  const [ayat, setAyat] = useState(null);
  const [fractions, setFractions] = useState([]);
  const [meaning, setMeaning] = useState("");
  const [wordMeaning, setWordMeaning] = useState("");
  const [tempMeaning, setTempMeaning] = useState("");
  const [tempWordMeaning, setTempWordMeaning] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showWordMeaning, setShowWordMeaning] = useState(false);

  // Fetch ayat + fractions
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAyatById(ayatId);
        setAyat(data);
        setMeaning(data.meaning_text || "");
        setWordMeaning(data.word_meaning || "");

        const fractionData = await getFractionsByAyat(ayatId);
        setFractions(fractionData);
      } catch (error) {
        console.error("Failed to fetch ayat:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [ayatId]);

  const handleSave = async () => {
    if (!tempMeaning.trim() && !tempWordMeaning.trim())
      return alert("Please enter some meaning before saving!");
    setSaving(true);
    try {
      await updateAyatMeaning(ayatId, {
        meaning_text: tempMeaning,
        word_meaning: tempWordMeaning,
      });
      setMeaning(tempMeaning);
      setWordMeaning(tempWordMeaning);
      setIsEditing(false);
      alert("✅ Meaning saved successfully!");
    } catch (error) {
      alert("❌ Failed to save meaning!");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = () => {
    setTempMeaning(meaning);
    setTempWordMeaning(wordMeaning);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempMeaning("");
    setTempWordMeaning("");
  };

  const toggleWordMeaning = () => setShowWordMeaning((prev) => !prev);

  // Save updated fraction
  const handleFractionSave = async (id, text, meaning) => {
    try {
      await updateFraction(id, {
        ayat_fraction_text: text,
        ayat_fraction_meaning: meaning,
      });
      setFractions((prev) =>
        prev.map((f) =>
          f.id === id
            ? { ...f, ayat_fraction_text: text, ayat_fraction_meaning: meaning }
            : f
        )
      );
      alert("✅ Fraction updated!");
    } catch (error) {
      alert("❌ Failed to update fraction!");
      console.error(error);
    }
  };

  // Add new fraction
  const handleAddFraction = async () => {
    const newFraction = {
      ayat: ayatId,
      ayat_fraction_number: fractions.length + 1,
      ayat_fraction_text: "",
      ayat_fraction_meaning: "",
    };
    try {
      const created = await addFraction(newFraction);
      setFractions((prev) => [...prev, created]);
    } catch (error) {
      alert("❌ Failed to add fraction!");
      console.error(error);
    }
  };

  // Delete fraction
  const handleDeleteFraction = async (id) => {
    if (!window.confirm("Are you sure you want to delete this fraction?")) return;
    try {
      await deleteFraction(id);
      setFractions((prev) => prev.filter((f) => f.id !== id));
      alert("🗑️ Fraction deleted!");
    } catch (error) {
      alert("❌ Failed to delete fraction!");
      console.error(error);
    }
  };

  // When user selects Arabic text
const handleTextSelection = async () => {
  const selection = window.getSelection().toString().trim();
  if (!selection) return;

  if (!/[\u0600-\u06FF]/.test(selection)) {
    alert("❌ Please select Arabic text only!");
    return;
  }

  if (!window.confirm(`Add this as a new fraction?\n\n"${selection}"`)) return;

  const newFraction = {
    ayat: ayatId,
    ayat_fraction_number: fractions.length + 1,
    ayat_fraction_text: selection,
    ayat_fraction_meaning: "",
  };

  try {
    const created = await addFraction(newFraction);
    setFractions((prev) => [...prev, created]);
    alert("✅ Fraction created from selected text!");
  } catch (error) {
    console.error("❌ Failed to create fraction:", error);
    alert("Failed to create fraction!");
  }
};


  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Loading Ayat...
      </div>
    );

  if (!ayat)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600 text-lg">
        Ayat not found.
      </div>
    );

  const toArabicNumber = (num) => {
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
    return num.toString().replace(/[0-9]/g, (d) => arabicDigits[d]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 pb-16">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-amber-200 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-amber-100 rounded-full transition"
          >
            <ArrowLeft className="text-amber-800 w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-amber-900">
            Ayat {toArabicNumber(ayat.ayat_number)}
          </h1>
          <div className="w-6"></div>
        </div>
      </div>

      {/* Main Ayat Box */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="border border-amber-900 rounded-2xl bg-white shadow-sm p-6">

          <p
  dir="rtl"
  className="text-3xl text-amber-900 text-right cursor-text select-text"
  style={{ fontFamily: "Amiri, serif", lineHeight: "2.5rem" }}
  onMouseUp={handleTextSelection}
>
  {ayat.ayat_number}] {ayat.ayat_text}
</p>


          <hr className="border-t border-gray-900 my-4" />

          {isEditing ? (
            <textarea
              value={tempMeaning}
              onChange={(e) => setTempMeaning(e.target.value)}
              rows="4"
              placeholder="Enter Malayalam meaning..."
              className="w-full border border-amber-100 rounded-xl p-3 mb-4 focus:ring-2 focus:ring-amber-400 outline-none resize-none text-gray-800"
            />
          ) : (
            <p className="text-gray-800 whitespace-pre-wrap leading-relaxed mb-4">
              <strong className="text-amber-800"></strong>{" "}
              {meaning || "— No meaning added yet —"}
            </p>
          )}

          <hr className="border-t border-gray-300 my-3" />

          {/* Toggle Word Meaning */}
          <button
            onClick={toggleWordMeaning}
            className="flex items-center gap-1 text-amber-700 font-medium hover:text-amber-900 transition mb-2"
          >
            {showWordMeaning ? (
              <>
                <ChevronUp size={18} /> Hide Word Meaning
              </>
            ) : (
              <>
                <ChevronDown size={18} /> Show Word Meaning
              </>
            )}
          </button>

          {showWordMeaning && (
            <div className="mt-2">
              {isEditing ? (
                <textarea
                  value={tempWordMeaning}
                  onChange={(e) => setTempWordMeaning(e.target.value)}
                  rows="4"
                  placeholder="Enter word meaning..."
                  className="w-full border border-amber-100 rounded-xl p-3 focus:ring-2 focus:ring-amber-400 outline-none resize-none text-gray-800"
                />
              ) : (
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  <strong className="text-amber-800"></strong>{" "}
                  {wordMeaning || "— No word meaning added yet —"}
                </p>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-end mt-3 gap-3">
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="text-gray-700 hover:text-amber-700 transition"
              >
                <Edit2 size={22} />
              </button>
            ) : (
              <>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="text-green-700 hover:text-green-800 transition"
                >
                  <Save size={22} />
                </button>
                <button
                  onClick={handleCancel}
                  className="text-red-600 hover:text-red-700 transition"
                >
                  <X size={22} />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Fraction Section */}
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <button
              onClick={handleAddFraction}
              className="flex items-center gap-1  text-gray-900 px-3 py-1 rounded-lg transition"
            >
              <Plus size={28} /> 
            </button>
          </div>

          {fractions.length > 0 ? (
            fractions.map((f) => (
              <FractionBox
                key={f.id}
                fraction={f}
                onSave={handleFractionSave}
                onDelete={handleDeleteFraction}
              />
            ))
          ) : (
            <p className="text-gray-500 text-sm">No fractions found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const FractionBox = ({ fraction, onSave, onDelete }) => {
  const [text, setText] = useState(fraction.ayat_fraction_text);
  const [meaning, setMeaning] = useState(fraction.ayat_fraction_meaning);
  const [edit, setEdit] = useState(false);

  return (
    <div className="border border-amber-200 rounded-xl p-4 bg-amber-50 shadow-sm">
      {edit ? (
        <>
          <textarea
            dir="rtl"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="2"
            className="w-full border rounded-lg p-2 mb-2"
          />
          <textarea
            value={meaning}
            onChange={(e) => setMeaning(e.target.value)}
            rows="2"
            className="w-full border rounded-lg p-2 mb-2"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                onSave(fraction.id, text, meaning);
                setEdit(false);
              }}
              className="text-green-700"
            >
              <Save size={20} />
            </button>
            <button onClick={() => setEdit(false)} className="text-red-600">
              <X size={20} />
            </button>
          </div>
        </>
      ) : (
        <>
          <p dir="rtl" className="text-xl text-amber-900 mb-2">
            {fraction.ayat_fraction_text}
          </p>
          <hr className="border-t border-gray-300 mb-2" />
          <p className="text-gray-800">{fraction.ayat_fraction_meaning}</p>
          <div className="flex justify-end mt-2 gap-3">
            <button
              onClick={() => setEdit(true)}
              className="text-gray-700 hover:text-amber-700"
            >
              <Edit2 size={20} />
            </button>
            <button
              onClick={() => onDelete(fraction.id)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AyatDetailPage;
