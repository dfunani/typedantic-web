import { ApiGroup } from "@/components/ApiGroup";
import { ReferenceShell } from "@/components/ReferenceShell";
import { typedanticApi } from "@/lib/api";

export const metadata = { title: "typedantic" };

export default function TypedanticApiPage() {
  return (
    <ReferenceShell
      title="typedantic"
      lead="The package you import in application code. Decorators, BaseModel, and field metadata."
    >
      {typedanticApi.map((group) => (
        <ApiGroup key={group.group} group={group.group} items={group.items} />
      ))}
    </ReferenceShell>
  );
}
