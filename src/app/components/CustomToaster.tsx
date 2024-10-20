/** @format */

import toast from "react-hot-toast";
import { Flag } from "lucide-react";
import { Iprops } from "@/app/types/CustomToaster.types";

// toast.success("Look at my styles.", {
//   style: {
//     border: "1px solid #713200",
//     padding: "16px",
//     color: "#713200",
//   },
//   iconTheme: {
//     primary: "#713200",
//     secondary: "#FFFAEE",
//   },
// });

const notify = ({ imgUrl, literal1, literal2 }: Iprops) =>
  toast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-yellow-400 dark:bg-purple-500 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={imgUrl} alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900 dark:text-yellow-200">
                Packs choosing now...
              </p>
              {literal1 && (
                <p className="mt-1 text-sm text-gray-500 dark:text-yellow-200">
                  {literal1}
                </p>
              )}
              {literal2 && (
                <span className="flex">
                  <Flag size={32} color="#ec3232" strokeWidth={3} />
                  <p className="ml-2 mt-1 text-sm text-gray-500 dark:text-yellow-200">
                    {literal2}
                  </p>
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-yellow-200"
          >
            Close
          </button>
        </div>
      </div>
    ),
    {
      duration: 3000,
      position: "bottom-left",
    }
  );

export { notify };
