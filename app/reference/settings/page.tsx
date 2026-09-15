import { ApiGroup } from "@/components/ApiGroup";
import { ReferenceShell } from "@/components/ReferenceShell";
import { settingsApi } from "@/lib/api";

export const metadata = { title: "typedantic-settings" };

export default function SettingsApiPage() {
  return (
    <ReferenceShell
      title="typedantic-settings"
      lead="Environment-backed models. Extends BaseModel; does not re-export Field."
    >
      {settingsApi.map((group) => (
        <ApiGroup key={group.group} group={group.group} items={group.items} />
      ))}
    </ReferenceShell>
  );
}
