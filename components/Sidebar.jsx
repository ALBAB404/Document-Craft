'use client'

import { getDocumentsByAuthor, getDocumentsByCategory, getDocumentsByTag } from "@/utils/doc-util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Sidebar = ({ allDocuments }) => {
  const [root, setRoot] = useState([]);
  const [nonRoots, setNonRoots] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    let matchDoc = allDocuments;
    if (pathname.includes('/authors')) {
      const author = pathname.split('/')[2];
      matchDoc = getDocumentsByAuthor(allDocuments, author);
    }else if (pathname.includes('/tags')) {
      const tag = pathname.split('/')[2];
      matchDoc = getDocumentsByTag(allDocuments, tag);
    }else if (pathname.includes('/categories')) {
      const category = pathname.split('/')[2];
      matchDoc = getDocumentsByCategory(allDocuments, category);
    }

    const roots = matchDoc.filter((doc) => !doc.parent);

    const nonRoots = Object.groupBy(
      matchDoc.filter((doc) => doc.parent),
      ({ parent }) => parent
    );

    const nonRootsKeys = Reflect.ownKeys(nonRoots);
    nonRootsKeys.forEach(key => {
       const foundInRoots = roots.find(root => root.id === key);
       if(!foundInRoots){
        const foundInDocs = allDocuments.find(doc => doc.id === key);
        roots.push(foundInDocs)
       }
    })

    roots.sort((a, b) => {
      if (a.order < b.order) {
          return -1;
      }
      if (a.order > b.order) {
          return 1;
      }
      return 0;
  });

    setRoot([...roots]);
    setNonRoots({...nonRoots});
  }, [pathname])
  

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
