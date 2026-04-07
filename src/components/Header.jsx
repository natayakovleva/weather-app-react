export default function Header(props) {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
      {/* Search */}
      <form
        onSubmit={props.handleSearch}
        className="flex w-full sm:w-auto gap-2"
      >
        <input
          value={props.city}
          onChange={(e) => props.setCity(e.target.value)}
          placeholder="Search city..."
          className="
            w-full sm:w-64
            px-4 py-2
            rounded-full
            bg-white/70 dark:bg-white/10
            text-gray-800 dark:text-white
            placeholder-gray-500 dark:placeholder-gray-400
            backdrop-blur-md
            focus:outline-none
            focus:ring-2 focus:ring-blue-400
            transition
          "
        />

        <button
          type="submit"
          className="
            px-4 py-2 rounded-full
            bg-blue-500 hover:bg-blue-600
            text-white
            transition
          "
        >
          Search
        </button>
      </form>

      {/* Toggle */}
      <label className="flex items-center gap-3 cursor-pointer">
        <span className="text-white text-sm">
          {props.isDark ? "Dark" : "Light"}
        </span>

        <div className="relative">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={props.isDark}
            onChange={() => props.setIsDark(!props.isDark)}
          />

          <div
            className="
              w-12 h-6
              bg-white/40 dark:bg-white/20
              rounded-full
              transition
              peer-checked:bg-blue-500
            "
          />

          <div
            className="
              absolute top-1 left-1
              w-4 h-4 bg-white rounded-full
              transition
              peer-checked:translate-x-6
            "
          />
        </div>
      </label>
    </header>
  );
}
