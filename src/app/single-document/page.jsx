"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function EditDocument() {
  const router = useRouter();
  const [selectedDocument, setSelectedDocument] = useState({});

  const searchParams = useSearchParams();
  const documentId = searchParams.get("_id");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log("documentId", documentId);

  useEffect(() => {
    const getDocument = async () => {
      const res = await fetch("api/documents/" + documentId);
      const data = await res.json();
      setSelectedDocument(data[0]);
      setTitle(data[0].title);
      setDescription(data[0].description);
    };
    if (documentId) getDocument();
  }, [documentId]);

  return (
    <div>
      {selectedDocument ? (
        <div>
          <div className="border border-slate-500 px-8 py-2 mt-2">
            <h2 className="font-bold text-2xl">{title}</h2>
          </div>
          <div className="border border-slate-500 px-8 py-2 mt-2">
            {description}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
