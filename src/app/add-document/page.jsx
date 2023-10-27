"use client";

import { Textarea } from "@nextui-org/react";
import { useState } from "react";

export default function AddDocument() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/documents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div>
      <div className="flex justify-center p-5">
        <h2 className="font-bold text-2xl">New Document</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Document Title"
          value={title}
          className="border border-slate-500 px-8 py-2"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          type="text"
          placeholder="Document Description"
          value={description}
          className="border border-slate-500 px-8 py-2 h-full w-full"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='text-white font-bold text-2xl bg-slate-800 p-1'>Spara</button>
      </form>
    </div>
  );
}
