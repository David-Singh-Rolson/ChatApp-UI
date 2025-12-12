export default function Button({ children, ...props }) {
    return (
      <button
        {...props}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-sm font-semibold transition"
      >
        {children}
      </button>
    );
  }
  