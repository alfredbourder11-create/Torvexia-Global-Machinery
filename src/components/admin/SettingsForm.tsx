"use client";
import { useState } from "react";
import type { SiteSettings } from "@/lib/media-store";

interface Props {
  initialSettings: SiteSettings;
}

export function SettingsForm({ initialSettings }: Props) {
  const [settings, setSettings] = useState(initialSettings);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  function update(key: keyof SiteSettings, value: string) {
    setSettings((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/admin/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error("Erreur lors de la sauvegarde");
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setSaving(false);
    }
  }

  const fields: { key: keyof SiteSettings; label: string; placeholder: string; type?: string }[] = [
    { key: "contactEmail", label: "Email de contact", placeholder: "contact@torvexia.com", type: "email" },
    { key: "contactWhatsapp", label: "WhatsApp", placeholder: "+86 XXX XXX XXXX" },
    { key: "heroTitle", label: "Titre principal (Hero)", placeholder: "Maquinaria Agrícola Directamente de China" },
    { key: "heroSubtitle", label: "Sous-titre (Hero)", placeholder: "Exportamos tractores y equipos agrícolas..." },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 space-y-5">
        <h2 className="text-white font-bold text-base">Informations de contact</h2>

        {fields.map((field) => (
          <div key={field.key}>
            <label className="block text-zinc-400 text-xs uppercase tracking-wider mb-1.5">
              {field.label}
            </label>
            {field.key === "heroSubtitle" ? (
              <textarea
                value={(settings[field.key] as string) ?? ""}
                onChange={(e) => update(field.key, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-amber-500/15"
              />
            ) : (
              <input
                type={field.type ?? "text"}
                value={(settings[field.key] as string) ?? ""}
                onChange={(e) => update(field.key, e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-zinc-800 border border-zinc-700 focus:border-amber-500/60 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-amber-500/15"
              />
            )}
          </div>
        ))}
      </div>

      {error && (
        <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-red-400 text-sm">{error}</div>
      )}

      <button
        type="submit"
        disabled={saving}
        className={`flex items-center gap-2 font-bold px-8 py-3 rounded-xl text-sm uppercase tracking-wider transition-colors cursor-pointer ${
          saved
            ? "bg-green-500/15 text-green-400 border border-green-500/20"
            : "bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-zinc-950"
        }`}
      >
        {saved ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            Sauvegardé
          </>
        ) : saving ? (
          "Enregistrement..."
        ) : (
          "Enregistrer"
        )}
      </button>
    </form>
  );
}
