import Link from "next/link";

const Sidebar = ({ allDocuments }) => {
  const root = allDocuments.filter((doc) => !doc.parent);

  const nonRoots = Object.groupBy(
    allDocuments.filter((doc) => doc.parent),
    ({ parent }) => parent
  );

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">
        {root.map((rootNode) => (
          <li className="relative" key={rootNode.id}>
            <Link
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href={`/docs/${rootNode.id}`}
            >
              <span className="truncate">{rootNode.title}</span>
            </Link>
            <ul role="list" style={{ opacity: 1 }}>
              {nonRoots[rootNode.id] &&
                nonRoots[rootNode.id].map((nonRootChild) => (
                  <li key={nonRootChild.id}>
                    <Link
                      className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                      href={`/docs/${rootNode.id}/${nonRootChild.id}`}
                    >
                      <span className="truncate">{ nonRootChild.title }</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
