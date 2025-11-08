export default function Button({ label, type = 'primary', onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        'py-3 text-base font-semibold w-full rounded-lg text-dark01 bg-primary'
      }
    >
      {label}
    </button>
  );
}
