import { Bars3Icon, BellIcon, WalletIcon } from "@heroicons/react/24/outline";
import { useAtom } from "jotai";

import { allTopbarAtoms as atoms } from "../../state/atoms";

export default function Topbar() {
  const [, setSidebarOpen] = useAtom(atoms.sidebarOpenAtom);
  const [, setWalletOpen] = useAtom(atoms.walletOpenAtom);

  return (
    <>
      <div className="fixed z-10 w-screen bg-gray-900">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-start sm:items-stretch">
              <Bars3Icon
                className="mr-4 block w-7 text-white sm:hidden"
                onClick={() => setSidebarOpen((prev) => !prev)}
              />
              <a href="./">
                <div className="flex flex-shrink-0 items-center text-white">
                  *LOGO* SpartanSwap
                </div>
              </a>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button className="flex rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <WalletIcon
                      className="h-6 w-6"
                      onClick={() => setWalletOpen((prev) => !prev)}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
