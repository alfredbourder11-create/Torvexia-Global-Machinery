import { getSettings } from "@/lib/media-store";
import { SettingsForm } from "@/components/admin/SettingsForm";

export default function SettingsPage() {
  const settings = getSettings();

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white font-black text-2xl mb-1">Paramètres</h1>
        <p className="text-zinc-500 text-sm">Gérez les informations de contact et le contenu du site</p>
      </div>
      <SettingsForm initialSettings={settings} />
    </div>
  );
}
