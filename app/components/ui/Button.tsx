// app/components/ui/Button.tsx

export default function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) {
  // cn এর বদলে সরাসরি Tailwind ক্লাস ব্যবহার করা হয়েছে
  const baseStyles = "rounded-lg px-6 py-3 text-sm font-semibold transition";
  const variants = {
    primary: "bg-emerald-600 text-white hover:bg-emerald-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}