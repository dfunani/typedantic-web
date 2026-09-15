import { ApiGroup } from "@/components/ApiGroup";
import { ReferenceShell } from "@/components/ReferenceShell";
import { coreApi } from "@/lib/api";

export const metadata = { title: "@typedantic/core" };

export default function CoreApiPage() {
  return (
    <ReferenceShell
      title="@typedantic/core"
      lead="No decorators. Pass a BaseSchema, compile a validator, throw ValidationError."
    >
      {coreApi.map((group) => (
        <ApiGroup key={group.group} group={group.group} items={group.items} />
      ))}
    </ReferenceShell>
  );
}
