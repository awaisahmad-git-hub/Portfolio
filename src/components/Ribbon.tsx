const items = [
  "C#",
  "ASP.NET Core",
  ".NET MAUI",
  "Entity Framework Core",
  "RESTful Web APIs",
  "SQL Server",
  "Blazor",
  "SignalR",
  "XAML",
  "WPF",
  "Azure DevOps",
  "JWT",
  "Entra ID",
  "Tailwind CSS",
];

/**
 * Continuous technology ribbon. The list is rendered twice so the track can
 * loop seamlessly at -50%.
 */
export function Ribbon() {
  return (
    <div
      className="ribbon mask-fade-x relative overflow-hidden border-y border-line py-4"
      aria-hidden="true"
    >
      <div className="ribbon-track flex w-max items-center gap-10 pr-10">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center gap-10">
            {items.map((item) => (
              <li
                key={item}
                className="flex shrink-0 items-center gap-10 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-bone-dim/80"
              >
                {item}
                <span className="h-1 w-1 rounded-full bg-amber/45" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
