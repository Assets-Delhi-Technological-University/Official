export default function newsletter() {
    return (
        <>
        <div className="min-h-screen max-h-fit h-14 bg-slate-400">
        <div className="px-8 py-8">
  <a href="#" className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
    <div className="">
      <h3 className="text-3xl font-bold text-amber-500 sm:text-5xl">TITLE</h3>
      <div className="mt-4 border-t-2 border-gray-100 pt-4">
        <p className="text-sm font-medium uppercase text-amber-500">
          SHORT DESCRIPTION
        </p>
      </div>
    </div>
    <div className="mt-8 inline-flex items-center gap-2 text-amber-500 sm:mt-12 lg:mt-16">
      <p className="font-medium sm:text-lg">READ</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </a>
</div>
<div className="px-8 py-8">
  <a href="#" className="group flex flex-col justify-between rounded-sm bg-white p-4 shadow-xl transition-shadow hover:shadow-lg sm:p-6 lg:p-8">
    <div className="">
      <h3 className="text-3xl font-bold text-amber-500 sm:text-5xl">TITLE</h3>
      <div className="mt-4 border-t-2 border-gray-100 pt-4">
        <p className="text-sm font-medium uppercase text-amber-500">
          SHORT DESCRIPTION
        </p>
      </div>
    </div>
    <div className="mt-8 inline-flex items-center gap-2 text-amber-500 sm:mt-12 lg:mt-16">
      <p className="font-medium sm:text-lg">READ</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 transition-all group-hover:ms-3 rtl:rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </div>
  </a>
</div>

</div>
        </>
    )
}