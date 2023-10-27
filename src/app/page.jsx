"use client";

import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function Home() {
  const [documents, setDocuments] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch("/api/documents");
      const documents = await res.json();
      setDocuments(documents);
    };
    getDocument();
  }, []);

  const handleEdit = (document) => {
    router.push("/edit-document/?_id=" + document._id);
  };

  const handleDelete = async (document) => {
    const res = await fetch("api/documents/" + document._id, {
      method: "DELETE",
    });

    if (res.ok) {
      setDocuments(
        documents.filter((keptDocuments) => keptDocuments._id != document._id)
      );
    }
  };

  const handleSingle = (document) => {
    router.push("/single-document/?_id=" + document._id);
  };

  return (
    <div>
      <ul>
        {documents.map((document) => (
          <li
            key={document._id}
            className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          >
            <div onClick={(e) => handleSingle(document)}>
              <h2 className="font-bold text-2xl">{document.title}</h2>
              {document.description}{" "}
            </div>
            <div>
              <button onClick={(e) => handleEdit(document)}>
                <FiEdit />
              </button>{" "}
              <button onClick={(e) => handleDelete(document)}>
                <MdDeleteOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
