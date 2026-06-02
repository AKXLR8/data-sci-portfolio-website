export default function FooterCard() {
  return (
    <div className="flex items-center justify-between h-full">
      <span className="text-sm text-gray-600">Akshay Maniyampara</span>
      <span className="text-sm text-gray-600">&copy; {new Date().getFullYear()}</span>
    </div>
  );
}
