import React, {useState} from "react";

export default function Note() {
    const [isVisible, setIsVisible] = useState(false);

    function showNote() {
        setIsVisible(!isVisible);
    }

    return (
        <div>
            <button
                className="p-2 bg-blue-500 text-white rounded-lg"
                onClick={showNote}
            >
                {isVisible ? "Close Note" : "Add Note"}
            </button>
            {isVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">

                        <h2 className="text-xl font-bold text-black mb-4">Add Note</h2>

                        <label className="text-black block mb-1">Title</label>
                        <input
                            className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
                            type="text"
                            id="Title"
                        />

                        <label className="text-black block mb-1">Note</label>
                        <textarea
                            className="w-full p-2 mb-4 bg-gray-100 rounded-lg"
                            id="Textnote"
                        ></textarea>

                        <button
                            className="p-2 bg-blue-500 text-white rounded-lg"
                            id="Save"
                            onClick={showNote}
                        >
                            Save
                        </button>
                        <button
                            className="p-2 bg-blue-500 text-white rounded-lg"
                            id="Delete"
                            onClick={showNote}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
