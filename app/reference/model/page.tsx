import { ApiGroup } from "@/components/ApiGroup";
import { ReferenceShell } from "@/components/ReferenceShell";
import { modelApi } from "@/lib/api";

export const metadata = { title: "@typedantic/model" };

export default function ModelApiPage() {
  return (
    <ReferenceShell
      title="@typedantic/model"
      lead="The package you import in application code: BaseModel, RootModel, decorators, TypeAdapter, and annotated types."
    >
      {modelApi.map((group) => (
        <ApiGroup key={group.group} group={group.group} items={group.items} />
      ))}
    </ReferenceShell>
  );
}
