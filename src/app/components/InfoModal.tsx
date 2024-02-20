"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

const InfoModal = () => {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <Link href={pathname}>
          <dialog className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-auto bg-black bg-opacity-50 backdrop-blur">
            <div className="m-auto bg-white p-8">
              <div className="flex flex-col items-center">
                <p>Comparti este sitio con quien quieras!</p>
              </div>
            </div>
          </dialog>
        </Link>
      )}
    </>
  );
};

export default InfoModal;
