const LimitSelector = ({ limit, onLimitChange }) => {
  return (
    <div className="flex gap-2 justify-center mt-8 mr-2 flex-wrap">
      <label className="text-sm">Items per page:</label>

      <select
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
        className="border px-2 py-1 rounded"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default LimitSelector;