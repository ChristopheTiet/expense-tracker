import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import { setTextFilter, sortByAmount, sortByDate } from "../ducks/filter-slice";

export default function ExpenseListFilter() {
  const filterState = useAppSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="flex">
      <input
        type="text"
        className="border-black border-2"
        value={filterState.text}
        onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        className="form-select appearance-none
      block
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        value={filterState.sortBy}
        onChange={(e) => {
          e.target.value === "amount"
            ? dispatch(sortByAmount())
            : dispatch(sortByDate());
        }}
      >
        <option value="amount">amount</option>
        <option value="date">date</option>
      </select>
    </div>
  );
}

// <div className="fixed top-16 w-72">
//   <Listbox value={selected} onChange={setSelected}>
//     <div className="relative mt-1">
//       <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//         <span className="block truncate">{selected.name}</span>
//         <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//           <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
//         </span>
//       </Listbox.Button>
//       <Transition
//         as={Fragment}
//         leave="transition ease-in duration-100"
//         leaveFrom="opacity-100"
//         leaveTo="opacity-0"
//       >
//         <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//           {people.map((person, personIdx) => (
//             <Listbox.Option
//               key={personIdx}
//               className={({ active }) =>
//                 `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                   active ? "bg-amber-100 text-amber-900" : "text-gray-900"
//                 }`
//               }
//               value={person}
//             >
//               {({ selected }) => (
//                 <>
//                   <span
//                     className={`block truncate ${
//                       selected ? "font-medium" : "font-normal"
//                     }`}
//                   >
//                     {person.name}
//                   </span>
//                   {selected ? (
//                     <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
//                       <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                     </span>
//                   ) : null}
//                 </>
//               )}
//             </Listbox.Option>
//           ))}
//         </Listbox.Options>
//       </Transition>
//     </div>
//   </Listbox>
// </div>;
