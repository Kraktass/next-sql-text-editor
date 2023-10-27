"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Textarea } from "@nextui-org/react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/documents/" + documentId, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      router.push("/");
    }
  };

  return (
    <div>
      {selectedDocument ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            className="border border-slate-500 px-8 py-2 mt-2"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            type="text"
            value={description}
            className="border border-slate-500 px-8 py-2 h-full w-full"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className='text-white font-bold text-2xl bg-slate-800 p-1'>Spara</button>
        </form>
      ) : (
        <div>Laddar...</div>
      )}
    </div>
  );
}
