export default function Icon({
  name,
  iconMap,
  size = 40,
  className = "",
  ...props
}) {
  const Component = iconMap[name];
  if (!Component)
    return (
      <div className="text-red-500 text-xs">{`icon "${name}" not found`}</div>
    );

  // Додаємо fill-current та клас для кольору
  return (
    <Component
      width={size}
      height={size}
      className={`fill-current ${className}`}
      {...props}
    />
  );
}
